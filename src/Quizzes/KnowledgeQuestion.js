import React, { Component } from "react";
import KnowledgeQuestionData from './data15KnowledgeQuestionData'
import KnowledgeAnswer from "./KnowledgeAnswer";


class KnowledgeQuestion extends Component{

  
  
  
  state={
    quizInfo : [],
  }

 setQuiz = () =>{
   

  this.setState( {

    quizInfo : KnowledgeQuestionData

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
                     <KnowledgeAnswer answers={data.answers} />
              
                 </div>
          })
         }
        
        </div>
    );
  }
}

export default KnowledgeQuestion;
