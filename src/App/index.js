import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Repository from "../Repository";

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
          path="/:owner"
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
          path="/:owner/:repo"
          component={props => {
            return (
              <div>
                <Repository
                  owner={props.match.params.owner}
                  repo={props.match.params.repo}
                  issueState="OPEN"
                />
              </div>
            );
          }}
        />
        <Route
          exact
          path="/:owner/:repo/closed"
          component={props => {
            return (
              <div>
                <Repository
                  owner={props.match.params.owner}
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
