import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_ORGANIZATION_QUERY, Organization } from "../Organization";
import RepositoryList from "../RepositoryList";
import wait from "waait";

const mocks = [
  {
    request: {
      query: GET_ORGANIZATION_QUERY,
      variables: {
        name: "github"
      }
    },
    result: {
      data: {
        organization: {
          name: "Github",
          repositories: {
            edges: [
              {
                node: {
                  id: 0,
                  name: "fetch"
                }
              },
              {
                node: {
                  id: 1,
                  name: "hub"
                }
              },
              {
                node: {
                  id: 2,
                  name: "training-kit"
                }
              }
            ]
          }
        }
      }
    }
  }
];

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Organization name="github" />
    </MockedProvider>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Organization />
    </MockedProvider>
  );

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should render organization name", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Organization name="github" />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const p = component.root.findByType("h1");
  expect(p.children).toContain("Github");
});

it("should render error", async () => {
  const orgMock = {
    request: {
      query: GET_ORGANIZATION_QUERY,
      variables: { name: "github" }
    },
    error: new Error()
  };

  const component = renderer.create(
    <MockedProvider mocks={[orgMock]} addTypename={false}>
      <Organization name="github" />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error");
});
