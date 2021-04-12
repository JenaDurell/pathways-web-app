import React, { Component } from "react";
import Investing2data7 from './Investing2data7'
import Investing2Answer7 from "./Investing2Answer7";


class Investing2Quiz7 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : Investing2data7

  })
}
 
 
  componentDidMount(){
    this.setQuiz();
  }


  render() {
    return(

 
      <div id = 'quiz'>
         {
          this.state.quizInfo.map(data => {
            
          return <div> 
                       <span id = 'question'><b>{data.quiz}</b></span>
                     <Investing2Answer7 correctAnswer={data.correctAnswer} answers={data.answers} />
                     
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Investing2Quiz7;



