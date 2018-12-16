import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import IssueIcon from "../IssueIcon";
import OcticonIssueClosed from "../Icons/octicon-issue-closed";
import OcticonIssueOpened from "../Icons/octicon-issue-opened";

it("renders IssueIcon component successfully", () => {
  const wrapper = shallow(<IssueIcon />);
  expect(wrapper.exists()).toBe(true);
});

it("renders OcticonIssueOpened", () => {
  const wrapper = mount(<IssueIcon issueState="OPEN" />);
  expect(wrapper.find(OcticonIssueOpened).exists()).toBe(true);
  expect(wrapper.find(OcticonIssueClosed).exists()).toBe(false);
});

it("renders OcticonIssueClosed", () => {
  const wrapper = mount(<IssueIcon issueState="CLOSED" />);
  expect(wrapper.find(OcticonIssueOpened).exists()).toBe(false);
  expect(wrapper.find(OcticonIssueClosed).exists()).toBe(true);
});
