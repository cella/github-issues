import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import wait from "waait";
import { GET_ISSUES_QUERY } from "../queries";
import { Repository } from "../Repository";
import mocks from "../mocks/owner-mocks";

it("renders without error", () => {
  renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Repository owner="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={[]}>
        <Repository />
      </MockedProvider>
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should render total count", async () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Repository owner="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h2");

  expect(p.children).toContain("200");
});
//
it("should render error", async () => {
  const repoMock = {
    request: {
      query: GET_ISSUES_QUERY,
      variables: { owner: "github", repo: "fetch", issueState: "OPEN" }
    },
    error: new Error()
  };

  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={[repoMock]} addTypename={false}>
        <Repository owner="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error");
});
