import React, { Component } from "react";
import Organization from "../Organization";

class App extends Component {
  render() {
    return (
      <div>
        <Organization org="atom" repo="atom" />
      </div>
    );
  }
}

export default App;
