import React from "react";
import OcticonIssueClosed from "../Icons/octicon-issue-closed";
import OcticonIssueOpened from "../Icons/octicon-issue-opened";

const IssueIcon = ({ issueState }) => {
  if (issueState === "CLOSED") {
    return <OcticonIssueClosed className="closed" />;
  } else {
    return <OcticonIssueOpened className="open" />;
  }
};

export default IssueIcon;
