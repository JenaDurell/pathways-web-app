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
      
      <div className="info">
        <b>What is a credit score and how can it change my financial situation?</b>
        

        <div id="info">
          Emergencies can arise at any time and you need to be prepared for when
          they happen. An emergency fund does just that.
          <br></br>
          <br></br>
          An emergency fund is a stash of money stored away to cover the costs
          of any <b>"financial emergencies".</b>
        </div>
        
        <img id="icons" src={boat} alt="alarm" />
        
      </div>
      
      <div className="section">
        <b>Why have one? </b>
        
        <div id="info">
          These unexpected expenses are <b>stressful</b> and can be{' '}
          <b>costly.</b>
          <br></br>
          <br></br>
          Having an emergency fund allows you to make the payment or payments
          necessary to deal with unexpected situations{' '}
          <b>without severely impacting your financial wellbeing.</b>
          <br></br>
          <img id="icons" src={boat} alt="treeOnCar" />
          
        </div>
      </div>
      <div className="section">
        <b>Avoid Debt</b>
       
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
