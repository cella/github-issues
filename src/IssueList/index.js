import React from "react";
import IssueItem from "../IssueItem";

const IssueList = ({ issues }) =>
  issues.edges.map(({ node }) => (
    <li className="Box-row" key={node.id}>
      <IssueItem
        number={node.number}
        title={node.title}
        author={node.author.login}
      />
    </li>
  ));

export default IssueList;
