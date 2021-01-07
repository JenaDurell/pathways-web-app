import React, { Component } from "react";
import quizData5 from './data5'
import Answer5 from "./Answer5";

class Quiz5 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData5

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
                     <Answer5 correctAnswer={data.correctAnswer} answers={data.answers} />
                     
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz5;



