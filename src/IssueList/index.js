import React from "react";
import IssueItem from "../IssueItem";

const IssueList = ({ issues, issueState }) => {
  if (issues && issues.edges.length > 0) {
    return issues.edges.map(({ node }) => (
      <li className="Box-row" key={node.id}>
        <IssueItem
          number={node.number}
          title={node.title}
          author={node.author.login}
          createdAt={node.createdAt}
          labels={node.labels}
          issueState={issueState}
        />
      </li>
    ));
  } else {
    return (
      <div className="blankslate">
        <h3>This repository doesn't have any issues yet.</h3>
      </div>
    );
  }
};

export default IssueList;
