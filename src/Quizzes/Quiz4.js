import React, { Component } from "react";
import quizData4 from './data4'
import Answer4 from "./Answer4";


class Quiz4 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData4

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
                     <Answer4 correctAnswer={data.correctAnswer} answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz4;



