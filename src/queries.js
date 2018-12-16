import gql from "graphql-tag";

export const GET_ISSUES_QUERY = gql`
  query(
    $org: String!
    $repo: String!
    $issueState: [IssueState!]
    $cursor: String
  ) {
    organization(login: $org) {
      login
      repository(name: $repo) {
        id
        name
        issues(
          first: 25
          orderBy: { field: CREATED_AT, direction: DESC }
          states: $issueState
          after: $cursor
        ) {
          edges {
            node {
              author {
                login
              }
              id
              number
              title
              createdAt
              labels(first: 5) {
                edges {
                  node {
                    id
                    color
                    name
                  }
                }
              }
            }
          }
          pageInfo {
            endCursor
            hasNextPage
          }
          totalCount
        }
      }
    }
  }
`;

export default GET_ISSUES_QUERY;
