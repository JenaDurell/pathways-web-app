import React, { Component } from "react";
import quizData2 from './data2'
import Answer2 from "./Answer2";

class Quiz2 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData2

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
                     <Answer2 correctAnswer={data.correctAnswer} answers={data.answers} />
                   
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz2;



