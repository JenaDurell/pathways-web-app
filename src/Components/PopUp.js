import React, { Component } from 'react'


export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className = "modal_content" >
            Thanks for answering! Click back to return to the home page.
            
           
            </div>
         
      </div>
    );
  }
}