import React from 'react';
import CheckList from './CheckList';
import '../styles/Pathways.css';
import phoneDollerSign from '../images/phoneDollerSign.png';
import moneyMath from '../images/moneyMath.png';
import winner from '../images/winner.png';
import blueGraph from '../images/blueGraph.png';
import { Link } from '@reach/router';

export default function BuildingEmergencyFund(props) {
  return (
    <div>
      <Link to="/emergencyFundMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      
      <div className="title-page-header">
        <b>Building an Emergency Fund</b>

        <div className="section">
          <b>Let's start building your emergency fund!</b>
        </div>
        <div className="section">
          <b>Storing the Fund</b>
        </div>
        <div id="info">
          First! Be sure to store your emergency fund in a{' '}
          <b>highly liquid state,</b> such as a savings account. This is
          important so that you can <b>access it quickly.</b>
          <img id="icons" src={phoneDollerSign} alt="phoneDollerSign" />
          It is also important to keep this money <b>separate</b> from a day to
          day checking account so you are not tempted to dip into it for
          non-emergency spending.
        </div>
        <div className="section">
          <b>Building the Fund</b>
        </div>
        <div id="info">
          Make a contribution plan, and <b>stick to it.</b> Try to make{' '}
          <b>small contributions</b> on a weekly, bi-weekly, or monthly basis.
          <img id="icons" src={moneyMath} alt="moneyMath" />
        </div>
        <div className="section">
          <b>Tips!</b>
        </div>
        <div id="info">
          1. If you find yourself spending less than normal one week,{' '}
          <b>transfer that extra money as well.</b>
          <br></br>
          <br></br>
          2. If you receive a <b>tax refund,</b> put that into your emergency
          fund. This is a once a year action that can really make a difference,
          as long as you <b>make the smart choice!</b>
          <img id="icons" src={blueGraph} alt="blueGraph" />
        </div>
        <div className="section">
          <b>Checklist</b>
        </div>
        <CheckList />

        <div className="section">
          <b>Great Job!</b>
        </div>
        <img id="icons" src={winner} alt="winner" />
        <div id="info">
          Getting into the habit of regualrly saving money is critical. It's the
          little things that make the big difference!
          <br></br>
          <br></br>
        </div>
        <Link to="/pathwaysHome">
          <button id="finish" type="button">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}
