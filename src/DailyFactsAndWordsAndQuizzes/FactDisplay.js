import React, { Component } from "react";
import facts from './facts'

class FactDisplay extends Component{
    constructor(props) {
        super(props);
        console.log(facts)

    this.state = {
        data: facts
      };
    }
    
    render() {
        
      return (
        
        <div id= 'fact-display'>
         {this.state.data[1].fact}
         </div>
      );
    }
      }
  
  
  export default FactDisplay;