import React, { Component } from "react";
import quizData8 from './data8'
import Answer8 from "./Answer8";


class Quiz8 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData8

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
                     <Answer8 correctAnswer={data.correctAnswer} answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz8;



