import React from "react";
import { NavLink } from "react-router-dom";
import "./IssuesHeader.scss";

export const IssuesHeader = ({ owner, repo }) => (
  <div className="issues-header">
    <h1 className="issues-header-title mt-2">
      Github Issues for <span className="issues-header-title__owner">{owner}</span>/
      <span className="issues-header-title__repo">{repo}</span>
    </h1>
    <div className="BtnGroup mt-3 mb-3 issues-header__buttons">
      <NavLink
        to={`/${owner}/${repo}`}
        exact
        activeClassName="btn-primary"
        className="btn BtnGroup-item"
      >
        Open
      </NavLink>
      <NavLink
        to={`/${owner}/${repo}/closed`}
        activeClassName="btn-primary"
        className="btn BtnGroup-item"
      >
        Closed
      </NavLink>
    </div>
  </div>
);

export default IssuesHeader;
