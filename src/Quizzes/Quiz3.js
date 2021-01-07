import React, { Component } from "react";
import quizData3 from './data3'
import Answer3 from "./Answer3";
import Done from '../Components/Done'

class Quiz3 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData3

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
                     <Answer3 correctAnswer={data.correctAnswer} answers={data.answers} />
                     <Done />
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz3;



