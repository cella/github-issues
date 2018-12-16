import React from "react";
import { NavLink } from "react-router-dom";
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import { GET_ISSUES_QUERY } from "../queries";
import IssueIcon from "../IssueIcon";
import IssueList from "../IssueList";
import "./Organization.scss";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    organization: {
      ...previousResult.organization,
      repository: {
        ...previousResult.organization.repository,
        issues: {
          ...previousResult.organization.repository.issues,
          ...fetchMoreResult.organization.repository.issues,
          edges: [
            ...previousResult.organization.repository.issues.edges,
            ...fetchMoreResult.organization.repository.issues.edges
          ]
        }
      }
    }
  };
};

export const Organization = ({ org, repo, issueState }) => (
  <Query query={GET_ISSUES_QUERY} variables={{ org, repo, issueState }}>
    {({ loading, error, data, fetchMore }) => {
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
                to={`/${org}/${repo}`}
                exact
                activeClassName="btn-primary"
                className="btn BtnGroup-item"
              >
                Open
              </NavLink>
              <NavLink
                to={`/${org}/${repo}/closed`}
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
          <button
            className="btn btn-block"
            type="button"
            onClick={() =>
              fetchMore({
                variables: {
                  org,
                  repo,
                  issueState,
                  cursor: organization.repository.issues.pageInfo.endCursor
                },
                updateQuery
              })
            }
          >
            Load More Issues
          </button>
        </div>
      );
    }}
  </Query>
);

export default withRouter(Organization);
