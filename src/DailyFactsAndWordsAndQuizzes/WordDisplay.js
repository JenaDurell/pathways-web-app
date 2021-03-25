import React, { Component } from "react";
import words from './words'
import { format } from "date-fns";
class WordDisplay extends Component{
    constructor(props) {
        super(props);
        const date = new Date();
        var today = parseInt(format(date, "dd"));
        

    this.state = {
        data: words,
        index: today
      };
    }
    
    render() {
        
      return (
        <div>
        <div className= 'word'>
            {this.state.data[this.state.index].word}
        </div>
        <div className= 'word-display'>
         {this.state.data[this.state.index].def}
         </div>
         </div>
      );
    }
      }
  
  
  export default WordDisplay;