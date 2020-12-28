import React, { Component } from 'react';
import { Router } from '@reach/router'
import '../styles/Pathways.css';
import CheckBox from './CheckBox';

export default class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        { id: 1, value: 'Determine how much you want to save.', isChecked: false },
        { id: 2, value: 'Open a savings account if you do not already have one.', isChecked: false },
        { id: 3, value: 'Contribute what you can into the savings account.', isChecked: false },
        { id: 4, value: 'Determine how much you can contribute and how often.', isChecked: false },
        { id: 4, value: 'Stick to your plan until your emergency fund is complete!', isChecked: false },
        { id: 4, value: 'If you use the fund, make sure to refill it.', isChecked: false },
      ],
    };
  }

  handleAllChecked = (event) => {
    let steps = this.state.steps;
    steps.forEach((step) => (step.isChecked = event.target.checked));
    this.setState({ steps: steps });
  };

  handleCheckChildElement = (event) => {
    let steps = this.state.steps;
    steps.forEach((step) => {
      if (step.value === event.target.value)
        step.isChecked = event.target.checked;
    });
    this.setState({ steps: steps });
  };

  render() {
    return (
      <div className="info">
        <ul>
          {this.state.steps.map((step) => {
            return (
              <CheckBox
                handleCheckChildElement={this.handleCheckChildElement}
                {...step}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
