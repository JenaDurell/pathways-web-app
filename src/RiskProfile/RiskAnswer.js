import React, { Component } from "react";

class RiskAnswer extends Component {
  state = {
    answers: this.props.answers,
    guess: true,
    selectedAnswer: "",
    score: this.props.score,
    one: this.props.one,
    two: this.props.two,
    three: this.props.three,
    one2: this.props.one2,
    two2: this.props.two2,
    three2: this.props.three2,
    four2: this.props.four2,
    five2: this.props.five2,
    one3: this.props.one3,
    two3: this.props.two3,
    three3: this.props.three3,
    four3: this.props.four3,
    five3: this.props.five3,
    one4: this.props.one4,
    two4: this.props.two4,
    three4: this.props.three4,
    four4: this.props.four4,
    five4: this.props.five4,
    one5: this.props.one5,
    two5: this.props.two5,
    three5: this.props.three5,
    four5: this.props.four5,
    one6: this.props.one6,
    two6: this.props.two6,
    three6: this.props.three6,
    four6: this.props.four6,
  };

  onAnswer = (ans) => {
    if (ans === this.state.one || this.state.one2 || this.state.one3) {
      this.setState({
        score: this.props.score + 1,
      });
    }
    this.setState({
        guess: false,
        selectedAnswer: ans,
        score: this.state.score,
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
        {this.state.guess ? null : (
          <div>
            {" "}
            Thanks for answering! Click back to return to the home page.{" "}
          </div>
        )}
      </div>
    );
  }
}

export default RiskAnswer;
