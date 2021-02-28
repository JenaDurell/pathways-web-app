import React, { Component } from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

class KnowledgeAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: this.props.answers,
      guess: true,
      answerText: this.props.rightAnswerText,
    };
  }
  //event on button
  onAnswer = async (answerText) => {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let userId = params.get('uid');
    console.log(answerText);

    this.setState({
      guess: false,
    });

    let answerObj = {
      data: {
        uid: userId,
        quizId: 'knowledgeLevel',
        answerId: answerText,
      },
    };

    await axios
      .post(
       ' https://us-central1-finsiteful.cloudfunctions.net/savePathwaysAnswer-savePathwaysAnswer ',
        // 'http://localhost:5001/finsiteful/us-central1/savePathwaysAnswer-savePathwaysAnswer',
        answerObj
      )
      .then((res) => {
        console.log(res);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div id="answer2">
        {this.state.answers.map((ans, index) => {
          return (
            <div className="buttonWrap">
              <button
                className="confidenceQuizButton"
                onClick={() => {
                  this.onAnswer(ans);
                }}
                key={index}
              >
                {ans}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
export default KnowledgeAnswer;
