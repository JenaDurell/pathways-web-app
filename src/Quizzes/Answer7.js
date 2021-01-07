import React, { Component } from 'react';

class Answer7 extends Component {
  state = {
    answers: this.props.answers,
    guess: true,
    correctAnswer: this.props.correctAnswer,
    
  };

  // Event on button
  onAnswer = () => {
    
    this.setState({

      guess: false,
      
    });
  };

  render() {
    return (
      <div>
        {this.state.answers.map((ans, index) => {
  if (this.state.guess) {
    return <button id = 'quizButton' onClick={this.onAnswer} key={index}>{ans}</button>
  } else {
    if (ans === this.state.correctAnswer) {
      return <button id="correct" key={index}>{ans}</button>
    } else {
      return <button id = 'quizButton' key={index}>{ans}</button>
    }
  }
})}
        </div>
    );
  }
}

export default Answer7;
