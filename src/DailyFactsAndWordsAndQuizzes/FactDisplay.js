import React, { Component } from "react";
import facts from "./facts";

class FactDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: facts,
    };
  }

  render() {
    return <div id="fact-display">{this.state.data[4].fact}</div>;
  }
}

export default FactDisplay;
