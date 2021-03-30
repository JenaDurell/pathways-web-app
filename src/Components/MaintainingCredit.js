import React, { useEffect } from "react";
import '../styles/Pathways.css';
import { Link } from "@reach/router";
import hand from "../imgBuildCredit/hand.png";
import happyMeter from "../imgBuildCredit/happyMeter.png"
import bills from "../imgBuildCredit/bills.png"
import tenPercent from "../imgBuildCredit/tenPercent.png"
import noCredit from "../imgBuildCredit/noCredit.png"
import fullWallet from "../imgBuildCredit/fullWallet.png"

export default function MaintainingCredit(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/buildingCreditMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="title-page-header">
        <b>Calculating Credit</b>

        <div id="info">
          <b>How do I maintain and improve my credit score?</b>

          <div className="section">
            <b>Steps to good credit</b>
          </div>

          <div id="info">
            Coming up are <b>five steps </b>to building and maintaining good credit!
            <img id="icons" src={hand} alt="hand" />
          </div>
        </div>

        <div className="section">
          <b>Step 1</b>

          <div id="info">
            Check your credit reports.
            <br></br>
            <br></br>
            <b>Know your score </b>so you know where you are starting.
            <br></br>
            <br></br>
            If you have never taken out loans or opened a credit card, you don't have a credit score yet.
            
            <img id="icons" src={happyMeter} alt="happy meter" />
          </div>
        </div>
        <div className="section">
          <b>Step 2</b>

          <div id="info">
            <b>Stay on top of bills and payments.</b>
            <br></br>
            <br></br>
           Paying your bills on time shows lenders that you are <b>responsible with credit.</b>
            <img id="icons" src={bills} alt="bills" />
           Payment history makes up a large amount of your credit score. Therefore, try to avoid late payments, defaults, repossessions, foreclosures and third party collections.
          </div>
        </div>
        <div className="section">
          <b>Step 3</b>

          <div id="info">
           Lower your <b>credit utilization rate.</b> Debt makes up 30% of your credit score so the amount of debt relative to how much credit you have available is very important to maintaining a good credit score. When you pay down your credit card balances and lower the utilization ratio, your credit score could improve. 
            <img id="icons" src={tenPercent} alt="ten percent" />
            Keeping it <b>under 30% </b>will help you build your credit, but you'll need to shoot for <b>10% </b>to get your score in the <b>"excellent" </b>range.
          </div>
        </div>
        <div className="section">
          <b>Step 4</b>

          <div id="info">
           <b>Avoid over-applying </b>for credit cards. New credit applications account for 10% of your score. Each time you apply for credit that prompts a <b>hard inquiry </b>into your report, your score will decline. This is different from checking your score yourself, which will not affect your credit score.
            <br></br>
            <br></br>
          So, try to avoid applying for multiple new credit cards or loans in a short period of time if you want to maintain your score.
            <img id="icons" src={noCredit} alt="no credit" />
            For example, some banks utilize the <b>"5/24 rule" </b>where they will not issue cards to a user who has applied for or opened more than 5 new cards in a 24 month period.
          </div>
        </div>
        <div className="section">
          <b>Step 5</b>

          <div id="info">
            <b>Live within your means!</b>
            <img id="icons" src={fullWallet} alt="full wallet" />
            A credit card is <b>not unlimited cash, </b>and it is far too easy to fall into a trap of over-spending and racking up debt.
            <br></br>
            <br></br>
          So, <b>treat it like a debit card </b>and pay off your purchases immediately.
           
          </div>
        </div>
        <div className="section">
          <b>Recap</b>

          <div id="info">
        <b>Step 1: </b>Know your score.
        <br></br>
            <br></br>
            <b>Step 2: </b>Make on-time payments.
            <br></br>
            <br></br>
            <b>Step 3: </b>Keep a low credit utilization rate.
            <br></br>
            <br></br>
            <b>Step 4: </b>Avoid over applying for credit cards. 
            <br></br>
            <br></br>
            <b>Step 5: </b>Live within your means!
            <img id="icons" src={hand} alt="hand" />
          
          </div>
        </div>
        <Link to="/buildingCreditMap">
          <button id="finish" type="button">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}
