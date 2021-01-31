import React, { Component } from 'react';
import '../styles/Pathways.css';

export default class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: [
        {
          id: 1,
          value: 'Determine how much you want to save.',
          isChecked: false,
        },
        {
          id: 2,
          value: 'Open a savings account if you do not already have one.',
          isChecked: false,
        },
        {
          id: 3,
          value: 'Contribute what you can into the savings account.',
          isChecked: false,
        },
        {
          id: 4,
          value: 'Determine how much you can contribute and how often.',
          isChecked: false,
        },
        {
          id: 5,
          value: 'Stick to your plan until your emergency fund is complete!',
          isChecked: false,
        },
        {
          id: 6,
          value: 'If you use the fund, make sure to refill it.',
          isChecked: false,
        },
      ],
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));
  }

  render() {
    return (
      <div className="info">
        {this.state.steps.map((item) => (
          <li key = {item.id}>
            <label>
              <input
              id = 'checkbox'
                type="checkbox"
                value={item.id}
                onChange={this.handleChange}
              />
              {item.value}
            </label>
          </li>
        ))}
      </div>
    );
  }
}
