import React from "react";
import "./IssueLabels.scss";

const IssueLabels = ({ labels }) =>
  labels.edges.map(({ node }) => (
    <li key={node.id}>
      <span
        className="Label issue-label"
        style={{ backgroundColor: `#${node.color}` }}
      >
        {node.name}
      </span>
    </li>
  ));

export default IssueLabels;
