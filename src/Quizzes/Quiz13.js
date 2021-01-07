import React, { Component } from "react";
import quizData13 from './data13'
import Answer13 from "./Answer13";
import Done from '../Components/Done'

class Quiz13 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData13

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
                     <Answer13 correctAnswer={data.correctAnswer} answers={data.answers} />
                     
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz13;



