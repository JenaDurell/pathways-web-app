import React, { Component } from "react";
import facts from "./facts";
import { format } from "date-fns";
class FactDisplay extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    var today = parseInt(format(date, "dd"));
    
    this.state = {
      index: today,
      data: facts,
    };
    
  }

  render() {
    return (
      <div id="fact-display">{this.state.data[this.state.index].fact}</div>
    );
  }
}

export default FactDisplay;
