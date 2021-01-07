import React, { Component } from 'react';

class Answer12 extends Component {
  state = {
    answers: this.props.answers,
    guess: true,
    correctAnswer: this.props.correctAnswer,
    
  };

  // Event on button
  onAnswer = () => {
    console.log('click!')
    this.setState({

      guess: false,
      
    });
  };

  render() {
    return (
      <div>
        {this.state.answers.map((ans, index) => {
  if (this.state.guess) {
    return <button onClick={this.onAnswer} key={index}>{ans}</button>
  } else {
    if (ans === this.state.correctAnswer) {
      return <button id="correct" key={index}>{ans}</button>
    } else {
      return <button key={index}>{ans}</button>
    }
  }
})}
        </div>
    );
  }
}

export default Answer12;
