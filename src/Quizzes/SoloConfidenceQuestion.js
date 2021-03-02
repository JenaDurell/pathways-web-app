import React, { Component } from "react";
import ConfidenceQuestionData from './data14ConfidenceQuestionData'
import SoloConfidenceAnswer from "./SoloConfidenceAnswer";


class SoloConfidenceQuestion extends Component{

  
  
  
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

 
      <div id = 'confidence'>
         {
          this.state.quizInfo.map(data => {
            
          return <div> 
                     <span id = 'confidenceText'>{data.quiz}</span>
                     <SoloConfidenceAnswer answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default SoloConfidenceQuestion;



