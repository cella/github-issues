import gql from "graphql-tag";

export const GET_ISSUES_QUERY = gql`
  query(
    $owner: String!
    $repo: String!
    $issueState: [IssueState!]
    $cursor: String
  ) {
    repository(owner: $owner, name: $repo) {
      id
      name
      owner {
        login
      }
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
`;

export default GET_ISSUES_QUERY;
