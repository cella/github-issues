import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Organization from "../Organization";

class App extends Component {
  render() {
    return (
      <div className="container-lg clearfix">
        <Route
          exact
          path="/"
          component={() => (
            <Redirect
              to={{
                pathname: "/atom/atom"
              }}
            />
          )}
        />
        <Route
          exact
          path="/:org"
          component={() => (
            <Redirect
              to={{
                pathname: "/atom/atom"
              }}
            />
          )}
        />
        <Route
          exact
          path="/:org/:repo"
          component={props => {
            return (
              <div>
                <Organization
                  org={props.match.params.org}
                  repo={props.match.params.repo}
                  issueState="OPEN"
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/:org/:repo/closed"
          component={props => {
            return (
              <div>
                <Organization
                  org={props.match.params.org}
                  repo={props.match.params.repo}
                  issueState="CLOSED"
                />
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
