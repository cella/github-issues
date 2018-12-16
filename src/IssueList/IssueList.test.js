import React from "react";
import ReactDOM from "react-dom";
import { MockedProvider } from "react-apollo/test-utils";
import { shallow } from "enzyme";
import IssueList from "../IssueList";
import mocks from "../mocks/issue-list-mocks";

it("renders IssueList component successfully", () => {
  const wrapper = shallow(<IssueList issues={mocks} />);
  expect(wrapper.exists()).toBe(true);
});

it("renders a list of issues", () => {
  const wrapper = shallow(<IssueList issues={mocks} />);
  expect(wrapper.find("li")).toHaveLength(3);
});

it("renders blank slate", () => {
  const wrapper = shallow(<IssueList />);
  expect(wrapper.find("li")).toHaveLength(0);
});
