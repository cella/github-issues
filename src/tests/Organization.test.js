import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import renderer from "react-test-renderer";
import { GET_ISSUES_QUERY, Organization } from "../Organization";
import wait from "waait";
import { MemoryRouter } from "react-router-dom";

const mocks = [
  {
    request: {
      query: GET_ISSUES_QUERY,
      variables: {
        org: "github",
        repo: "fetch",
        issueState: "OPEN"
      }
    },
    result: {
      data: {
        organization: {
          login: "github",
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
                    createdAt: "2018-12-15T22:50:54Z",
                    labels: {
                      edges: [
                        {
                          node: {
                            id: 0,
                            color: "fef2c0",
                            name: "feature"
                          }
                        }
                      ]
                    }
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
                    createdAt: "2018-12-14T22:50:54Z",
                    labels: {
                      edges: [
                        {
                          node: {
                            id: 1,
                            color: "fef2c0",
                            name: "feature"
                          }
                        }
                      ]
                    }
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
                    createdAt: "2018-12-13T22:50:54Z",
                    labels: {
                      edges: [
                        {
                          node: {
                            id: 2,
                            color: "fef2c0",
                            name: "feature"
                          }
                        }
                      ]
                    }
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
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Organization org="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );
});

it("should render loading state initially", () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={[]}>
        <Organization />
      </MockedProvider>
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree.children).toContain("Loading...");
});

it("should render organization name", async () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Organization org="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h1");

  expect(p.children).toContain("github");
});

it("should render repository name", async () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Organization org="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h1");

  expect(p.children).toContain("fetch");
});

it("should render total count", async () => {
  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Organization org="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response
  const p = component.root.findByType("h2");

  expect(p.children).toContain("200");
});
//
it("should render error", async () => {
  const orgMock = {
    request: {
      query: GET_ISSUES_QUERY,
      variables: { org: "github", repo: "fetch", issueState: "OPEN" }
    },
    error: new Error()
  };

  const component = renderer.create(
    <MemoryRouter>
      <MockedProvider mocks={[orgMock]} addTypename={false}>
        <Organization org="github" repo="fetch" issueState="OPEN" />
      </MockedProvider>
    </MemoryRouter>
  );

  await wait(0); // wait for response

  const tree = component.toJSON();
  expect(tree.children).toContain("Error");
});
