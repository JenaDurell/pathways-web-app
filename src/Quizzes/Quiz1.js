import React, { Component } from "react";
import quizData10 from './data10'
import Answer10 from "./Answer10";
import Done from './Done'

class Quiz10 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : quizData10

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
                       {data.quiz}
                     <Answer10 correctAnswer={data.correctAnswer} answers={data.answers} />
                     <Done />
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Quiz10;



