import React from "react";
import { NavLink } from "react-router-dom";
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import gql from "graphql-tag";
import IssueIcon from "../IssueIcon";
import IssueList from "../IssueList";
import "./Organization.scss";

export const GET_ISSUES_QUERY = gql`
  query($org: String!, $repo: String!, $issueState: [IssueState!]) {
    organization(login: $org) {
      login
      repository(name: $repo) {
        id
        name
        issues(
          first: 25
          orderBy: { field: CREATED_AT, direction: DESC }
          states: $issueState
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
          totalCount
        }
      }
    }
  }
`;

export const Organization = ({ org, repo, issueState }) => (
  <Query query={GET_ISSUES_QUERY} variables={{ org, repo, issueState }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      const { organization } = data;

      return (
        <div className="issues">
          <div className="issues-header">
            <h1 className="issues-header__title mt-2">
              Github Issues for {organization.login}/
              {organization.repository.name}
            </h1>
            <div className="BtnGroup mt-3 mb-3 issues-header__buttons">
              <NavLink
                to="/"
                exact
                activeClassName="btn-primary"
                className="btn BtnGroup-item"
              >
                Open
              </NavLink>
              <NavLink
                to="/closed"
                activeClassName="btn-primary"
                className="btn BtnGroup-item"
              >
                Closed
              </NavLink>
            </div>
          </div>

          <div className="Box issues-list">
            <div className="Box-header issues-list-header">
              <h2 className="Box-title issues-list-header__title">
                <IssueIcon issueState={issueState} />
                {organization.repository.issues.totalCount} {issueState}
              </h2>
            </div>
            <ul>
              <IssueList
                issues={organization.repository.issues}
                issueState={issueState}
              />
            </ul>
          </div>
        </div>
      );
    }}
  </Query>
);

export default withRouter(Organization);
