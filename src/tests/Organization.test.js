import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_ORGANIZATION_QUERY, Organization } from "../Organization";
import wait from "waait";

const mocks = [
  {
    request: {
      query: GET_ORGANIZATION_QUERY,
      variables: {
        org: "github",
        repo: "fetch"
      }
    },
    result: {
      data: {
        organization: {
          name: "Github",
          repository: {
            id: "0",
            name: "fetch",
            issues: {
              edges: [
                {
                  node: {
                    id: 0,
                    number: 0,
                    title: "this is a issue 1",
                    author: {
                      login: "bluesclues"
                    },
                    createdAt: "2018-12-15T22:50:54Z"
                  }
                },
                {
                  node: {
                    id: 1,
                    number: 1,
                    title: "this is a issue 2",
                    author: {
                      login: "spongebob"
                    },
                    createdAt: "2018-12-14T22:50:54Z"
                  }
                },
                {
                  node: {
                    id: 2,
                    number: 2,
                    title: "this is a issue 3",
                    author: {
                      login: "louislouis"
                    },
                    createdAt: "2018-12-13T22:50:54Z"
                  }
                }
              ],
              totalCount: 200
            }
          }
        }
      }
    }
  }
];

it("renders without error", () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Organization org="github" repo="fetch" />
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
      <Organization org="github" repo="fetch" />
    </MockedProvider>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h1");

  expect(p.children).toContain("Github");
});

it("should render repository name", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Organization org="github" repo="fetch" />
    </MockedProvider>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h1");

  expect(p.children).toContain("fetch");
});

it("should render total count", async () => {
  const component = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Organization org="github" repo="fetch" />
    </MockedProvider>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h2");

  expect(p.children).toContain("200");
});

it("should render error", async () => {
  const orgMock = {
    request: {
      query: GET_ORGANIZATION_QUERY,
      variables: { org: "github", repo: "fetch" }
    },
    error: new Error()
  };

  const component = renderer.create(
    <MockedProvider mocks={[orgMock]} addTypename={false}>
      <Organization org="github" repo="fetch" />
    </MockedProvider>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error");
});
