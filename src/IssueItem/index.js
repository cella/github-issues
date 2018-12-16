import React from "react";
import Moment from "react-moment";
import IssueIcon from "../IssueIcon";
import IssueLabels from "../IssueLabels";
import "./IssueItem.scss";

const IssueItem = ({
  number,
  title,
  author,
  createdAt,
  labels,
  issueState
}) => {
  return (
    <div className="issue-item">
      <div className="issue-item__icon">
        <IssueIcon issueState={issueState} />
      </div>
      <div className="issue-item__title">{title}</div>
      <div className="issue-item__created">
        <span className="issue-item__number">#{number}</span> opened{" "}
        <span className="issue-item__date">
          <Moment fromNow date={createdAt} />
        </span>{" "}
        by <span className="issue-item__author">{author}</span>
      </div>
      <div className="issue-item__labels">
        <ul>
          <IssueLabels labels={labels} />
        </ul>
      </div>
    </div>
  );
};

export default IssueItem;
