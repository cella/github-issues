import React from "react";
import { mount, shallow } from "enzyme";
import IssuesHeader from "../IssuesHeader";

it("should render organization name", () => {
  const wrapper = shallow(<IssuesHeader org="github" repo="fetch" />);
  expect(wrapper.find(".issues-header-title__org").text()).toBe("github");
});

it("should render repository name", () => {
  const wrapper = shallow(<IssuesHeader org="github" repo="fetch" />);
  expect(wrapper.find(".issues-header-title__repo").text()).toBe("fetch");
});
