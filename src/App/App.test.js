import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { MemoryRouter } from "react-router-dom";
import { Organization } from "../Organization";
import { shallow } from "enzyme";
import ApolloClient from "apollo-boost";
import renderer from "react-test-renderer";
import App from "../App";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    }`
  }
});

it("renders App component successfully", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it("renders open issues on initial route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/"]}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MemoryRouter>
  );

  expect(component.root.findByType(Organization).props.issueState).toBe("OPEN");
});

it("renders open issues on closed route", () => {
  const component = renderer.create(
    <MemoryRouter initialEntries={["/closed"]}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </MemoryRouter>
  );

  expect(component.root.findByType(Organization).props.issueState).toBe(
    "CLOSED"
  );
});
