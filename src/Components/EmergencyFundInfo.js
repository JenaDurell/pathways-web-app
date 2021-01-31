import React from 'react';
import '../styles/Pathways.css';
import sosAlarm from '../images/sosAlarm.png';
import treeOncar from '../images/treeOnCar.png';
import stress from '../images/stress.png';
import brokenComputer from '../images/brokenComputer.png';
import shopping from '../images/shopping.png';
import fireExtinguisher from '../images/fireExtinguisher.png';
import loveBucks from '../images/loveBucks.jpg'
import Quiz2 from '../Quizzes/Quiz2';
import FinishMiniEmergencyPath from './FinishMiniEmergencyPath'
import { Link } from '@reach/router'

export default function EmergencyFundInfo(props) {
  return (
    <div>
      <Link to="/emergencyFundMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
    <div className="title-page-header">
      <b>Emergency Fund</b>
      
      <div className="section">
        <b>What is an emergency fund?</b>
        

        <div id="info">
          Emergencies can arise at any time and you need to be prepared for when
          they happen. An emergency fund does just that.
          <br></br>
          <br></br>
          An emergency fund is a stash of money stored away to cover the costs
          of any <b>"financial emergencies".</b>
        </div>
        
        <img id="icons" src={sosAlarm} alt="alarm" />
        <Quiz2 />
       
        
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
          <img id="icons" src={treeOncar} alt="treeOnCar" />
          
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
        
          <img id="icons" src={stress} alt="stress" />
          <br></br>
        </div>
      </div>
      <div className="section">
        <b>There when you need it...</b>
        
        <div id="info">
          The point of an emergency fund is that hopefully you don't have to use
          it, but it's <b>there when you need it.</b>
          <br></br>
          <img id="icons" src={brokenComputer} alt="brokenComputer" />
         
        </div>
      </div>
      <div className="section">
        <b>Jess and Mark</b>
        
        <div id="info">
          Jess' and Mark's computers both break during exam week.
          <br></br>
          <br></br>
          Jess has an <b>emergency fund</b> and uses that to buy a new computer.
          Her emergency fund is now empty, but she <b>builds it back up</b> over
          the next few months by adjusting her spending plan.
          <br></br>
          <br></br>
          Jess was relieved that she could solve her computer crisis{' '}
          <b>quickly</b> and <b>stress-free.</b> What about Mark?
          <img id="icons" src={shopping} alt="shopping" />
          Mark does not have an emergency fund so he used a <b>credit card.</b>
          <br></br>
          <br></br>
          He does not have a lot of credit history, so his interest rate is{' '}
          <b>22.99%.</b> He puts $1,500 onto his credit card but has no
          immediate way of paying it off.
          <br></br>
          <br></br>A year later, Mark is now in debt <b>$1,844.85</b> for a
          computer that cost $1,500.
        </div>
      </div>
      
      <br></br>
      <div className="section">
        <b>There when you need it.</b>
      
      <div id="info">
        Now you can see how <b>important it is to have an emergency fund</b> as
        a student.
        <br></br>
        <br></br>
        After college, <b>emergency funds need to be larger</b> as the
        consequences can be more severe.
        <br></br>
        <br></br>
        But, by starting the <b>habit of keeping an emergency fund now, </b> you will be better prepared for any financial emergencies that may arise. 
        <br></br>
        <img id="icons" src={fireExtinguisher} alt="fireExtinguisher" />
        <br></br>
        Life is already stressful enough, but by keeping an emergency fund, you will have one less thing to worry about.     

        <img id='icons' src = {loveBucks} alt = "loveBucks"/>
      </div>
      </div>
      <FinishMiniEmergencyPath />
    </div>
    </div>
  );
}
