import React from "react";
import IssueItem from "../IssueItem";

const IssueList = ({ issues, issueState }) =>
  issues.edges.map(({ node }) => (
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

export default IssueList;
