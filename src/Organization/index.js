import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import IssueList from "../IssueList";
import "./Organization.scss";

export const GET_ORGANIZATION_QUERY = gql`
  query($org: String!, $repo: String!) {
    organization(login: $org) {
      name
      repository(name: $repo) {
        id
        name
        issues(
          first: 25
          orderBy: { field: CREATED_AT, direction: DESC }
          states: [OPEN]
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
            }
          }
          totalCount
        }
      }
    }
  }
`;

export const Organization = ({ org, repo }) => (
  <Query query={GET_ORGANIZATION_QUERY} variables={{ org, repo }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      const { organization } = data;

      return (
        <div>
          <h1>
            Github Issues for {organization.name}/{organization.repository.name}
          </h1>

          <div className="Box issues-list">
            <div className="Box-header issues-list__header">
              <h2 className="Box-title issues-list__title">
                <svg
                  className="octicon octicon-issue-opened"
                  viewBox="0 0 14 16"
                  version="1.1"
                  width="14"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                  />
                </svg>
                {organization.repository.issues.totalCount} Open
              </h2>
            </div>
            <ul>
              <IssueList issues={organization.repository.issues} />
            </ul>
          </div>
        </div>
      );
    }}
  </Query>
);

export default Organization;
