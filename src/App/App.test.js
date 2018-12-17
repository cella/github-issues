import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { Repository } from "../Repository";
import { shallow } from "enzyme";
import ApolloClient from "apollo-boost";
import renderer from "react-test-renderer";
import App from "../App";
import { MockedProvider } from "react-apollo/test-utils";

it("renders App component successfully", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it("redirects to atom open issues on initial route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/"]}>
      <MockedProvider>
        <App />
      </MockedProvider>
    </MemoryRouter>
  );
  expect(component.root.findByType(Repository).props.owner).toBe("atom");
  expect(component.root.findByType(Repository).props.repo).toBe("atom");
  expect(component.root.findByType(Repository).props.issueState).toBe("OPEN");
});

it("redirects to atom open issues on /owner/ route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/github"]}>
      <MockedProvider>
        <App />
      </MockedProvider>
    </MemoryRouter>
  );
  expect(component.root.findByType(Repository).props.owner).toBe("atom");
  expect(component.root.findByType(Repository).props.repo).toBe("atom");
  expect(component.root.findByType(Repository).props.issueState).toBe("OPEN");
});

it("renders open issues on /owner/repo/ route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/github/fetch"]}>
      <MockedProvider>
        <App />
      </MockedProvider>
    </MemoryRouter>
  );
  expect(component.root.findByType(Repository).props.owner).toBe("github");
  expect(component.root.findByType(Repository).props.repo).toBe("fetch");
  expect(component.root.findByType(Repository).props.issueState).toBe("OPEN");
});

it("renders closed issues on closed route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/github/fetch/closed"]}>
      <MockedProvider>
        <App />
      </MockedProvider>
    </MemoryRouter>
  );
  expect(component.root.findByType(Repository).props.owner).toBe("github");
  expect(component.root.findByType(Repository).props.repo).toBe("fetch");
  expect(component.root.findByType(Repository).props.issueState).toBe(
    "CLOSED"
  );
});
