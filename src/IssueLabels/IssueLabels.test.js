import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import IssueLabels from "../IssueLabels";

const mocks = {
  edges: [
    {
      node: {
        id: 0,
        color: "fef2c0",
        name: "feature"
      }
    }
  ]
};

it("renders IssueLabels component successfully", () => {
  const wrapper = shallow(<IssueLabels labels={mocks} />);
  expect(wrapper.exists()).toBe(true);
});

it("renders a list of labels", () => {
  const wrapper = shallow(<IssueLabels labels={mocks} />);
  expect(wrapper.find("li")).toHaveLength(1);
});

it("renders title", () => {
  const wrapper = shallow(<IssueLabels labels={mocks} />);
  expect(wrapper.find(".issue-label").text()).toEqual("feature");
});
