import React from "react";
import ReactDOM from "react-dom";
import IssueItem from "../IssueItem";
import { shallow, mount } from "enzyme";

it("renders IssueItem component successfully", () => {
  const wrapper = shallow(<IssueItem />);
  expect(wrapper.exists()).toBe(true);
});

it("renders title", () => {
  const wrapper = mount(<IssueItem title="fancy title" />);
  expect(wrapper.find(".issue-item__title").text()).toEqual("fancy title");
});

it("renders author", () => {
  const wrapper = mount(<IssueItem author="yogi" />);
  expect(wrapper.find(".issue-item__author").text()).toEqual("yogi");
});

it("renders number", () => {
  const wrapper = mount(<IssueItem number="0" />);
  expect(wrapper.find(".issue-item__number").text()).toEqual("#0");
});
