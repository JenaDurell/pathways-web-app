import React, { Component } from "react";
import Investing2data3 from './Investing2data3'
import Investing2Answer3 from "./Investing2Answer3";


class Investing2Quiz3 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : Investing2data3

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
                     <Investing2Answer3 correctAnswer={data.correctAnswer} answers={data.answers} />
                     
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Investing2Quiz3;



