import React from 'react';
import '../styles/Pathways.css';
import Quiz13 from '../Quizzes/Quiz13'
import bank from '../imagesInvesting/bank.png';
import onlineBroker from '../imagesInvesting/onlineBroker.png';
import { Link } from '@reach/router';


export default function StockMarket(props) {
    return(
        <div className= 'title-page-header'>
        <div className="section">
        <b>The Stock Market</b>
      </div>
      <div id="info">
        You cannot invest unless you understand the stock market and how it
        works. Keep reading to find out...
        <br></br>
        <br></br>
        The stock market is where you go if you want to{' '}
        <b>buy or sell stocks.</b>
        <br></br>
        <br></br>
        Historically, you would go to a physical location to do this, but{' '}
        <b>today it is all electronic.</b>
        <img id="icons" src={bank} alt="bank" />
      </div>
      <div className="section">
        <b>How to access the stock market?</b>
      </div>
      <div id="info">
        The stock market is <b>accessible to anyone </b>through online
        stockbrokers such as <b>brokerages</b> or <b>robo-advisors.</b>
        <img id="icons" src={onlineBroker} alt="onlineBroker" />
        <Quiz13 />
      <br></br>
        You can now do something today that your future self will be thankful
        for!
      <br></br>
      
      </div>
      <Link to="/pathwaysHome">
        <button id="finish" type="button">
          Finish
        </button>
      </Link>
      </div>
   
    )
}