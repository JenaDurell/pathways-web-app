import React, { Component } from "react";
import quizData10 from './data10'
import Answer10 from "./Answer10";

class Quiz10 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData10

  })
}
 
 
  componentDidMount(){
    this.setQuiz();
  }


  render() {
    return(

 
      <div id = 'info'>
         {
          this.state.quizInfo.map(data => {
            
          return <div> 
                      <span id = 'question'><b>{data.quiz}</b></span>
                     <Answer10 correctAnswer={data.correctAnswer} answers={data.answers} />
                 
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz10;



