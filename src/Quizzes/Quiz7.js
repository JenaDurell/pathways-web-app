import React, { Component } from "react";
import quizData7 from './data7'
import Answer7 from "./Answer7";


class Quiz7 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData7

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
                     <Answer7 correctAnswer={data.correctAnswer} answers={data.answers} />
          
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz7;



