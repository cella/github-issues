import React from "react";
import "./IssueItem.scss";

const IssueItem = ({ number, title, author }) => {
  return (
    <div className="issue-item">
      <div className="issue-item__icon">
        <svg
          className="octicon octicon-issue-opened open"
          viewBox="0 0 14 16"
          version="1.1"
          width="14"
          height="16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
          />
        </svg>
      </div>
      <div className="issue-item__title">{title}</div>
      <div className="issue-item__subtitle">
        <span className="issue-item__number">#{number}</span> opened by{" "}
        <span className="issue-item__author">{author}</span>
      </div>
    </div>
  );
};

export default IssueItem;
