import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { shallow } from "enzyme";

it("renders App component successfully", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
