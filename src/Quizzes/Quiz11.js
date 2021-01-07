import React, { Component } from "react";
import quizData11 from './data11'
import Answer11 from "./Answer11";

class Quiz11 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData11

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
                     <Answer11 correctAnswer={data.correctAnswer} answers={data.answers} />
                  
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz11;



