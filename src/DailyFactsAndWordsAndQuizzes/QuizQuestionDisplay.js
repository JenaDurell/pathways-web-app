import React, { Component } from "react";
import QuizAnswerDisplay from "./QuizAnswerDisplay";
import quizContent from "./quizContent";
import { format } from "date-fns";
class QuizQuestionDisplay extends Component {
  state = {
    quizInfo: [],
  };

  setQuiz = () => {
    const date = new Date();
    var today = parseInt(format(date, "dd"));

    this.setState({
      quizInfo: [quizContent[today]],
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
