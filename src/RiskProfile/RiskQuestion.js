import React, { Component } from "react";
import riskData from "./riskData";
import RiskAnswer from "./RiskAnswer";

class RiskQuestion extends Component {
  state = {
    quizInfo: [],
    score: 0,
    responses: 0

  };

  setQuiz = () => {
      
    this.setState({
      quizInfo: riskData,
    })
  
  };

  componentDidMount() {
    this.setQuiz();
  }

  render() {
      return (
          <div id = "info">
              {this.state.quizInfo.map((data) => {
                  return (
                      <div>
                          <span id= "question">{data.question}</span>
                          <RiskAnswer
                          answers = {data.answers} 
                          one = {data.one}
                          two = {data.two}
                          three = {data.three}
                          one2 = {data.one2}
                          two2 = {data.two2}
                          three2 = {data.three2}
                          four2 = {data.four2}
                          five2 = {data.five2}
                          one3 = {data.one3}
                          two3 = {data.two3}
                          three3 = {data.three3}
                          four3= {data.four3}
                          five3 = {data.five3}
                          one4 = {data.one4}
                          two4 = {data.two4}
                          three4 = {data.three4}
                          four4 = {data.four4}
                          five4 = {data.five4}
                          one5 = {data.one5}
                          two5 = {data.two5}
                          three5 = {data.three5}
                          four5 = {data.four5}
                          one6 = {data.one6}
                          two6 = {data.two6}
                          three6 = {data.three6}
                          four6 = {data.four6}
                          score= { 0 }
                          
                          
                          />
                          </div>
                  )
              })}
          </div>
      )
  }
}

export default RiskQuestion;
