import React from "react";
import { mount, shallow } from "enzyme";
import IssuesHeader from "../IssuesHeader";

it("should render owner name", () => {
  const wrapper = shallow(<IssuesHeader owner="github" repo="fetch" />);
  expect(wrapper.find(".issues-header-title__owner").text()).toBe("github");
});

it("should render repository name", () => {
  const wrapper = shallow(<IssuesHeader owner="github" repo="fetch" />);
  expect(wrapper.find(".issues-header-title__repo").text()).toBe("fetch");
});
