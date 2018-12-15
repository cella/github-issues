import React from "react";

const IssueList = ({ issues }) =>
  issues.edges.map(({ node }) => <li key={node.id}>{node.title}</li>);

export default IssueList;
