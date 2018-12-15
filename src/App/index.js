import React, { Component } from "react";
import Organization from "../Organization";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="container-lg clearfix">
        <Organization org="atom" repo="atom" />
      </div>
    );
  }
}

export default App;
