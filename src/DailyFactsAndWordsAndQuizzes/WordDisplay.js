import React, { Component } from "react";
import words from './words'

class WordDisplay extends Component{
    constructor(props) {
        super(props);

    this.state = {
        data: words,
        index: [0]
      };
    }
    componentDidMount() {
        this.interval = setInterval(() => this.setState({index: [+1] }), 1000);
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