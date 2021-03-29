import React, { Component } from 'react';

class QuizAnswerDisplay extends Component {
  state = {
    answers: this.props.answers,
    guess: true,
    correctAnswer: this.props.correctAnswer,
    selectedAnswer: '',
  };

  onAnswer = (ans) => {
    this.setState({
      guess: false,
      selectedAnswer: ans,
    });
  };

  render() {
    return (
      <div id="answer2">
        {this.state.answers.map((ans, index) => {
          if (this.state.guess) {
            return (
              <button
                className="quizButton"
                onClick={() => this.onAnswer(ans)}
                key={index}
              >
                {ans}
              
              </button>
              
              
            );
          } else {
            if (ans === this.state.correctAnswer) {
              return (
                <button className="correct" key={index}>
                  {ans}
                </button>
              );
            } else if (
              this.state.selectedAnswer === ans &&
              this.state.correctAnswer !== ans
            ) {
              <button className="incorrect" key={index}>
                {ans}
              </button>;

              return (
                <button className="incorrect" key={index}>
                  {ans}
                </button>
              );
            } else {
              return (
                <button className="quizButton" key={index}>
                  {ans}
                </button>
              );
            }
          }
        })}
        <br></br>
        {this.state.guess ? null : <div> Thanks for answering! Click back to return to the home page. </div>}
      </div>
    );
  }
}
export default QuizAnswerDisplay;
