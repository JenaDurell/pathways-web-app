import React, { Component } from "react";
import ConfidenceQuestionData from './data14ConfidenceQuestionData'
import ConfidenceAnswer from "./ConfidenceAnswer";


class ConfidenceQuestion extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : ConfidenceQuestionData

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
                     <span id = 'confidenceText'><b>{data.quiz}</b></span>
                     <ConfidenceAnswer answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default ConfidenceQuestion;



