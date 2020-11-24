import React, { Component, Fragment } from "react";
class Answer extends Component {
    constructor(props){
      super(props)
//  create state
  this.state = {
    answers: this.props.answer,
    clickCheck:true,
    rightAnswer: this.props.rightAnswer,
    time: Date.now()
  };
    }
  // Event on button
  onAnswer = () => {
   
    this.setState({ 
      clickCheck:false,
    });
  
  };
  
  render() {
   
    return (
     
      <Fragment>
     
        { this.state.clickCheck ? this.state.answers.map(ans => {
          return <button onClick={this.onAnswer}> {ans}</button>;
        }) : <button>{this.state.rightAnswer}</button>  } 

      </Fragment>
   
    );
  }
}

export default Answer;



