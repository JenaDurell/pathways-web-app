import React, { useEffect } from "react";
import { Link } from "@reach/router";
import historyBook from "../imgBuildCredit/historyBook.png";
import weight from "../imgBuildCredit/weight.png"
import calendar from "../imgBuildCredit/calendar.png"
import moneyBag from "../imgBuildCredit/moneyBag.png"
import noCredit from "../imgBuildCredit/noCredit.png"

export default function CalculatingCredit(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="title-page-header">
      <Link to="/buildingCreditMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
        <b>Calculating Credit</b>

        <div id="info">
          <b>How is my credit score calculated?</b>

          <div className="section">
            <b>What makes up a score?</b>
          </div>

          <div id="info">
            Your credit score is compiled of <b>five </b>different factors.
            <br></br>
            <br></br>
            <ul>
           <li>1. Payment history </li> 
           <li>2. Debt </li>
           <li>3. Length of credit history </li>
           <li>4. Types of
            accounts</li> 
            <li>5. Recent credit activity</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <b>Payment History</b>

          <div id="info">
            Payment history makes up <b>35%</b> of your score.
            <br></br>
            <br></br>
            Do you make payments <b>on time?</b>
            <br></br>
            <br></br>
            How <b>often</b> do you miss payments?
            <br></br>
            <br></br>
            How many <b>days past</b> the due date do you pay your bills?
            <br></br>
            <br></br>
            How many <b>recent </b>payments have been missed?
            <img id="icons" src={historyBook} alt="history book" />
          </div>
        </div>
        <div className="section">
          <b>Debt</b>

          <div id="info">
            Debt makes up <b>30% </b>of your score.
            <br></br>
            <br></br>
            This is based on the amount you owe, the number and types of
            accounts you have, and the proportion of the money you owe compared
            to how much credit you have available.
            <img id="icons" src={weight} alt="weight" />
            If you pay on time, small balances can <b>raise </b>your credit
            score while high balances and maxed-out credit cards will{" "}
            <b>lower </b>your credit score.
          </div>
        </div>
        <div className="section">
          <b>Length of credit history</b>

          <div id="info">
            The length of your credit history makes up <b>15% </b>of your score.
            <br></br>
            <br></br>
            The <b>longer </b>your history of making payments on time, the{" "}
            <b>higher </b>your score will be.
            <img id="icons" src={calendar} alt="calendar" />
          </div>
        </div>
        <div className="section">
          <b>Types of accounts</b>

          <div id="info">
            How diverse your credit history is makes up <b>10% </b>of your score.
            <br></br>
            <br></br>
           Having a <b>variety of accounts </b>including installment loans, home loans, and retail and credit cards may <b>improve </b>your score.
            <img id="icons" src={moneyBag} alt="money bag" />
          </div>
        </div>
        <div className="section">
          <b>Recent credit activity</b>

          <div id="info">
            Your recent credit activity makes up <b>10% </b>of your score.
            <br></br>
            <br></br>
          If you've opened many accounts recently or applied to open accounts, it <b>signifies potential financial trouble </b>and may lower your score.
            <img id="icons" src={noCredit} alt="no credit" />
            However, if you've had the <b>same loans or credit cards </b>for a long period of time, while paying them on time, your score will go up over time.
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
