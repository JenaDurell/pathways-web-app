import React, { Component } from "react";
import inspirations from "./inspirations";
import { format } from "date-fns";
class InspirationDisplay extends Component {
  constructor(props) {
    super(props);

    const date = new Date();
    var today = parseInt(format(date, "dd"));
    
    this.state = {
      index: today,
      data: inspirations,
    };
  }

  render() {
    return (
      <div id="fact-display">{this.state.data[this.state.index].inspiration}</div>
    );
  }
}

export default InspirationDisplay;