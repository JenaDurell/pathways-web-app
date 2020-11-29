


import React, { Component, Fragment } from "react";
import quizData from './data'
import Answer from "./Answer";

class Quiz extends Component{

  state={
    dataQuestion:[],
  }
 

 setStatefunction = () =>{
   
//  use reactjs setState 
  this.setState({
    dataQuestion:quizData
  })
}
 
 
  componentDidMount(){
    this.setStatefunction();
  }


  render() {
    return(

      
      <Fragment> 
      
    
         {this.state.dataQuestion.map(data => {
            
          return <div key className="question"> 
                      <h2> {data.quiz}</h2> 
                     <Answer key={data.id}  answer={data.findAnswer} rightAnswer={data.rightAnswer} rightAnswerText={data.findAnswer[data.rightAnswer]}/>
                 </div>
          })
         }
        
      </Fragment>

    );
  }
}

export default Quiz;



