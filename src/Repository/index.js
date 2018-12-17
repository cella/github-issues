import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Query } from "react-apollo";
import { withRouter } from "react-router";
import { GET_ISSUES_QUERY } from "../queries";
import IssueIcon from "../IssueIcon";
import IssueList from "../IssueList";
import IssuesHeader from "../IssuesHeader";
import "./Repository.scss";

const updateQuery = (previousResult, { fetchMoreResult }) => {
  if (!fetchMoreResult) {
    return previousResult;
  }

  return {
    ...previousResult,
    repository: {
      ...previousResult.repository,
      issues: {
        ...previousResult.repository.issues,
        ...fetchMoreResult.repository.issues,
        edges: [
          ...previousResult.repository.issues.edges,
          ...fetchMoreResult.repository.issues.edges
        ]
      }
    }
  };
};

export const Repository = ({ owner, repo, issueState }) => (
  <Query query={GET_ISSUES_QUERY} variables={{ owner, repo, issueState }}>
    {({ loading, error, data, fetchMore }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error</p>;

      const { repository } = data;

      return (
        <div className="issues">
          <IssuesHeader
            owner={repository.owner.login}
            repo={repository.name}
          />

          <div className="Box issues-list">
            <div className="Box-header issues-list-header">
              <h2 className="Box-title issues-list-header__title">
                <IssueIcon issueState={issueState} />
                {repository.issues.totalCount} {issueState}
              </h2>
            </div>
            <ul>
              <IssueList
                issues={repository.issues}
                issueState={issueState}
              />
            </ul>
          </div>

          <Fragment>
            {repository.issues.pageInfo.hasNextPage && (
              <button
                className="btn btn-block issues-list__button"
                type="button"
                onClick={() =>
                  fetchMore({
                    variables: {
                      owner,
                      repo,
                      issueState,
                      cursor: repository.issues.pageInfo.endCursor
                    },
                    updateQuery
                  })
                }
              >
                Load More Issues
              </button>
            )}
          </Fragment>
        </div>
      );
    }}
  </Query>
);

export default withRouter(Repository);
