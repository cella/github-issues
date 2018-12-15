import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import IssueList from "../IssueList";

export const GET_ORGANIZATION_QUERY = gql`
  query($org: String!, $repo: String!) {
    organization(login: $org) {
      name
      repository(name: $repo) {
        id
        name
        issues(first: 25, states: [OPEN]) {
          edges {
            node {
              id
              title
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
            Open issues for {organization.name}/{organization.repository.name}
          </h1>
          <p>Total count: {organization.repository.issues.totalCount}</p>
          <ul>
            <IssueList issues={organization.repository.issues} />
          </ul>
        </div>
      );
    }}
  </Query>
);

export default Organization;
