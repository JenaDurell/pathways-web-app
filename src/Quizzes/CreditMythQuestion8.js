import React, { Component } from "react";
import CreditMythAnswer from "./CreditMythAnswer";
import creditMythContent from "./creditMythContent";
import { Link } from "@reach/router"
class CreditMythQuestion extends Component {
    state = {
        quizInfo: [],
        index: creditMythContent[7].id,
    };
    
    setQuiz = () => {
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
              <span id="question"><b>{data.quiz}</b></span>
              <CreditMythAnswer
                correctAnswer={data.correctAnswer}
                answers={data.answers}
                info={data.info}
              />
            </div>
          );
        })}
       <Link to="/pathwaysHome">
       <button id="finish" type="button">
         Finish
       </button>
     </Link>
      </div>
    );
  }
}

export default CreditMythQuestion;
