import React, { Component } from "react";
import Organization from "../Organization";
import { Route } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="container-lg clearfix">
        <Route
          exact
          path="/"
          component={() => (
            <div>
              <Organization org="atom" repo="atom" issueState="OPEN" />
            </div>
          )}
        />
        <Route
          exact
          path="/closed"
          component={() => (
            <div>
              <Organization org="atom" repo="atom" issueState="CLOSED" />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
