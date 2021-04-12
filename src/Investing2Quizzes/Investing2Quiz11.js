import React, { Component } from "react";
import Investing2data11 from './Investing2data11'
import Investing2Answer11 from "./Investing2Answer11";


class Investing2Quiz11 extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : Investing2data11

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
                     <Investing2Answer11 correctAnswer={data.correctAnswer} answers={data.answers} />
                     
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default Investing2Quiz11;



