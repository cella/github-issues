import React from "react";
import { MockedProvider } from "react-apollo/test-utils";
import ReactDOM from "react-dom";
import IssueList from "../IssueList";
import { shallow } from "enzyme";

const mocks = {
  edges: [
    {
      node: {
        id: 0,
        number: 0,
        title: "this is a issue 1",
        author: {
          login: "bluesclues"
        },
        createdAt: "2018-12-15T22:50:54Z"
      }
    },
    {
      node: {
        id: 1,
        number: 1,
        title: "this is a issue 2",
        author: {
          login: "spongebob"
        },
        createdAt: "2018-12-14T22:50:54Z"
      }
    },
    {
      node: {
        id: 2,
        number: 2,
        title: "this is a issue 3",
        author: {
          login: "louislouis"
        },
        createdAt: "2018-12-13T22:50:54Z"
      }
    }
  ],
  totalCount: 200
};

it("renders IssueList component successfully", () => {
  const wrapper = shallow(<IssueList issues={mocks} />);
  expect(wrapper.exists()).toBe(true);
});

it("renders a list of issues", () => {
  const wrapper = shallow(<IssueList issues={mocks} />);
  expect(wrapper.find("li")).toHaveLength(3);
});
