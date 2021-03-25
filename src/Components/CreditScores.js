import React, { useEffect } from 'react';
import { Link } from '@reach/router'
import boat from '../images/boat.png'

export default function CreditScores(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Link to="/emergencyFundMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
    <div className="title-page-header">
      <b>Credit Scores</b>
      
      <div id="section">
        <b>What is a credit score and how can it change my financial situation?</b>
        
        <div id = 'info'>
          <b>What is a credit score?</b>
        </div>

        <div id="info">
         Individuals can build their credit by maintaining a good credit score. A credit score is an analysis of a person's <b>"creditworthiness."</b>
         <img id="icons" src={boat} alt="alarm" />
          Banks and credit card companies use credit scores to <b>evaluate potential risk </b>from lending money to certain consumers e.g. who qualifies for a loan, at what interest rate and what credit limits.
        </div>
        
        <img id="icons" src={boat} alt="alarm" />
        
      </div>
      
      <div className="section">
        <b>Importance of Credit </b>
        
        <div id="info">
         Having a good credit score will help determine the <b>types of loans </b>you are able to get and the <b>interest rates you pay.</b>
          <br></br>
          <br></br>
          The lower your credit score, the higher your interest rates will be.
          <br></br>
          <br></br>
          The lifetime cost of higher interest rates from a poor credit score can add up and even exceed six figures.
          <img id="icons" src={boat} alt="alarm" />
        </div>
      </div>
      <div className="section">
        <b>Credit Example</b>
       
        <div id="info">
          An emergency fund allows you to avoid making large purchases on a{' '}
          <b>credit card</b> or having to take out a <b>loan.</b>
          <br></br>
          <br></br>
          In both of those scenarios you would suffer from having to pay off{' '}
          <b>high fees and interest rates.</b>
        
          <img id="icons" src={boat} alt="stress" />
          <br></br>
        </div>
      </div>
      <div className="section">
        <b>There when you need it...</b>
        
        <div id="info">
          The point of an emergency fund is that hopefully you don't have to use
          it, but it's <b>there when you need it.</b>
          <br></br>
          <img id="icons" src={boat} alt="brokenComputer" />
         
        </div>
      </div>
      
    </div>
    </div>
  );
}
