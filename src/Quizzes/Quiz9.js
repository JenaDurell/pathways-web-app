import React, { Component } from "react";
import quizData9 from './data9'
import Answer9 from "./Answer9";


class Quiz9 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData9

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
                     <Answer9 correctAnswer={data.correctAnswer} answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz9;



