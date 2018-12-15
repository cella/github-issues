import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import RepositoryList from "../RepositoryList";

export const GET_ORGANIZATION_QUERY = gql`
  query($name: String!) {
    organization(login: $name) {
      name
      repositories(first: 6) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const Organization = ({ name }) => (
  <Query query={GET_ORGANIZATION_QUERY} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      const { organization } = data;

      return (
        <div>
          <h1>{organization.name} </h1>
          <ul>
            <RepositoryList
              loading={loading}
              repositories={organization.repositories}
            />
          </ul>
        </div>
      );
    }}
  </Query>
);

export default Organization;
