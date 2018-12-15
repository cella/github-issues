import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import ReactDOM from "react-dom";
import RepositoryList from "../RepositoryList";
import { shallow } from "enzyme";

const mocks = {
  edges: [
    {
      node: {
        id: 0,
        name: "fetch"
      }
    },
    {
      node: {
        id: 1,
        name: "hub"
      }
    },
    {
      node: {
        id: 2,
        name: "training-kit"
      }
    }
  ]
};

it("renders RepositoryList component successfully", () => {
  const wrapper = shallow(<RepositoryList repositories={mocks} />);
  expect(wrapper.exists()).toBe(true);
});

it("renders a list of repositories", () => {
  const wrapper = shallow(<RepositoryList repositories={mocks} />);
  expect(wrapper.find("li")).toHaveLength(3);
});
