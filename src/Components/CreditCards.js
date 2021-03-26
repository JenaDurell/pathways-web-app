import React, { useEffect } from "react";
import { Link } from "@reach/router";
import boat from "../images/boat.png";

export default function CreditCards(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/emergencyFundMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="title-page-header">
        <b>Credit Cards</b>

        <div id="info">
          <b>
            Have a credit card? Or multiple? Looking to get your first?
            Regardless, this module will teach you the ins and outs of applying
            for using credit cards.
          </b>

          <div className="section">
            <b>Applying for a card</b>
          </div>

          <div id="info">
            When you apply for a credit card, there are a number of factors
            taken into account. One of the most important is your{" "}
            <b>credit score.</b>
            <img id="icons" src={boat} alt="alarm" />
            Additional factors include the number of <b>delinquencies, </b>or
            payments that are over 30 days overdue,{" "}
            <b>how many cards or loans </b>you have applied for in recent years,
            how much <b>debt </b>you have, and your <b>income.</b>
          </div>
        </div>

        <div className="section">
          <b>APR </b>

          <div id="info">
            THere are two main featurs of your credit card: <b>APR </b>and{" "}
            <b>Credit Limit.</b>
            <br></br>
            <br></br>
            APR or annual percentage rate is your <b>interest rate. </b>This is
            how much interest you will have to pay if you do not pay off at
            least the minimum on your card each month. However, you should{" "}
            <b>always pay off your card in full, </b>regardless of your APR.
            <img id="icons" src={boat} alt="alarm" />
          </div>
        </div>
        <div className="section">
          <b>Credit Limit</b>

          <div id="info">
            Your credit limit is the <b>total balance that you can carry.</b>{" "}
            For example, if your card has a credit limit of $1,000.00, you can
            make up to $1,000 worth of purchases on it before you pay it off.
            <img id="icons" src={boat} alt="stress" />
            If you try to make a purchase that would send you over your credit
            limit, your card will be declined. This is what people mean when
            they say they "maxed out" a credit card. However, you should{" "}
            <b>never use your entire credit limit </b>before paying it off.
          </div>
        </div>
        <div className="section">
          <b>Credit Utilization</b>

          <div id="info">
            The amount of credit you use before paying it off (your{" "}
            <b>credit Utilization rate</b>) should stay below <b>30%.</b>{" "}
            Optimally, you should even stay below 10%. Following the previous
            example, this means you never want to spend more than $300 on your
            card before you pay off the balance.
          </div>
        </div>
        <div className="section">
          <b>Fees</b>
          <div id="info">
            Your card may have additional features such as fees, minimums, grace
            periods, rewards, points, and bonuses.
            <br></br>
            <br></br>
            <b>Fees </b>cam be anything from <b>annual fees </b>to{" "}
            <b>foreign transaction fees </b>and <b>balance transfer fees. </b>An
            annual fee is sort of like a membership cost, while foreign
            transaction fees charge you if you use your card in another country.
            Balance transfer fees occur when you transfer your balance (the
            amount of debt you owe) from one card to another.
          </div>
        </div>
        <div className="section">
          <b>Minimum</b>
          <div id="info">
            The <b>"minimum</b> is the <b>lowest amount of your balance that you can pay off each month </b>without suffering penalties, generally a percentage of your total balance. 
            <br></br>
            <br></br>
            However, you should <em>always pay your bill off in full each month.</em>
            <img id="icons" src={boat} alt="alarm" />
          </div>
        </div>
        <div className="section">
          <b>Grace Periods</b>

          <div id="info">
            <b>Grace periods </b>are when cards offer <b>0% APR </b>(no interest) for a certain amount of time after you open an account.
            <br></br>
            <br></br>
            <b>Do not take this into account when choosing a card </b>because smart credit card usage means paying your bill off in full every month, so you never carry a balance month to month.
          </div>
        </div>
        <div className="section">
          <b>Using Your Credit Card</b>

          <div id="info">
            When you have a credit card, <b>think of it like a debit card!</b>
            <br></br>
            <br></br>
            Never spend more money than you have in your checking account. Doing so is a surefire way to end up in debth and worsen your credit score.
            <img id="icons" src={boat} alt="alarm" />
          </div>
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
