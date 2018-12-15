import React from "react";

const RepositoryList = ({ repositories }) =>
  repositories.edges.map(({ node }) => <li key={node.id}>{node.name}</li>);

export default RepositoryList;
