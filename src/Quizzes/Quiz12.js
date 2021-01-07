import React, { Component } from "react";
import quizData12 from './data12'
import Answer12 from "./Answer12";

class Quiz12 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData12

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
                     <Answer12 correctAnswer={data.correctAnswer} answers={data.answers} />
                  
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz12;



