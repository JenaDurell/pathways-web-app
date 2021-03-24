import React, { Component } from "react";
import QuizAnswerDisplay from "./QuizAnswerDisplay";
import quizContent from "./quizContent";

class QuizQuestionDisplay extends Component {
  state = {
    quizInfo: [],
  };

  setQuiz = () => {
    console.log([quizContent[4]]);

    this.setState({
      quizInfo: [quizContent[4]],
    });
  };

  componentDidMount() {
    this.setQuiz();
  }

  render() {
    return (
      <div id="info">
        {this.state.quizInfo.map((data) => {
          return (
            <div>
              <span id="question">{data.quiz}</span>
              <QuizAnswerDisplay
                correctAnswer={data.correctAnswer}
                answers={data.answers}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default QuizQuestionDisplay;
