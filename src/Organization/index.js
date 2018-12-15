import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const GET_ORGANIZATION_QUERY = gql`
  query($name: String!) {
    organization(login: $name) {
      name
    }
  }
`;

export const Organization = ({ name }) => (
  <Query query={GET_ORGANIZATION_QUERY} variables={{ name }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      return <h1>{data.organization.name} </h1>;
    }}
  </Query>
);

export default Organization;
