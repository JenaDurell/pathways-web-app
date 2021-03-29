import React, { Component } from "react";
import CreditMythAnswer from "./CreditMythAnswer";
import creditMythContent from "./creditMythContent";
class CreditMythQuestion2 extends Component {
    state = {
        quizInfo: [],
        index: creditMythContent[1].id,
    };
    
    setQuiz = () => {
    //   let index=  [0]
    this.setState({
      quizInfo: [creditMythContent[this.state.index]],
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
              <CreditMythAnswer
                correctAnswer={data.correctAnswer}
                answers={data.answers}
                info={data.info}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CreditMythQuestion2;
