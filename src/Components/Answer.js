import React, { Component, Fragment} from "react";
import axios from 'axios'

class Answer extends Component {
    constructor(props){
      super(props)
//  create state
  this.state = {
    answers: this.props.answer,
    clickCheck:true,
    rightAnswer: this.props.rightAnswer,
    answerText: this.props.rightAnswerText
    
  };
    }
   
    //event on button
    onAnswer = (answerIndex) => {
    this.setState({ 
      clickCheck:false,
    });

    axios
      .post(
        'https://us-central1-amazing-thought-296514.cloudfunctions.net/recordQuizInfo',
        {
          data: {
            id: 'qkzcsvj9M4JI5te8olrE',
            quizObj: {
              date: Date.now(),
              answer : answerIndex,
              rightAnswer: this.state.rightAnswer,
              
            },
          },
        }
      )
      .then((res) => {
        console.log(res);
      //   //   setIsLoading(false)
       })
      .catch(function (error) {
        console.log(error);
        //   setIsLoading(false),
      });
  
  };
  
  render() {
   
    return (
     
      <Fragment>
     
        { this.state.clickCheck ? this.state.answers.map((ans, index) => {
          return <button onClick={()=>this.onAnswer(index)}>{ans}</button>;
        }) : <button onClick={()=>this.onAnswer}>{this.state.answerText}</button>  } 

      </Fragment>
   
    );
  }
}
export default Answer;



