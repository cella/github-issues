import { GET_ISSUES_QUERY } from "../queries";

export const mocks = [
  {
    request: {
      query: GET_ISSUES_QUERY,
      variables: {
        owner: "github",
        repo: "fetch",
        issueState: "OPEN"
      }
    },
    result: {
      data: {
        repository: {
          id: "0",
          name: "fetch",
          owner: {
            login: "github"
          },
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
            pageInfo: {
              endCursor:
                "Y3Vyc29yOnYyOpK5MjAxOC0xMS0yMVQyMTo1NToyOC0wNTowMM4W2aUa",
              hasNextPage: true
            },
            totalCount: 200
          }
        }
      }
    }
  }
];

export default mocks;
