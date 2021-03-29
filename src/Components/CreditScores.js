import React, { useEffect } from "react";
import '../styles/Pathways.css';
import { Link } from "@reach/router";
import scoreboard from "../imgBuildCredit/scoreboard.png";
import bullhorn from "../imgBuildCredit/bullhorn.png"
import happyGirlSadBoy from "../imgBuildCredit/happyGirlSadBoy.png"
export default function CreditScores(props) {
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
        <b>Credit Scores</b>

        <div id="section">
          <b>
            What is a credit score and how can it change my financial situation?
          </b>

          <div id="info">
            <b>What is a credit score?</b>
          </div>

          <div id="info">
            Individuals can build their credit by maintaining a good credit
            score. A credit score is an analysis of a person's{" "}
            <b>"creditworthiness."</b>
            <img id="icons" src={scoreboard} alt="scoreclock" />
            Banks and credit card companies use credit scores to{" "}
            <b>evaluate potential risk </b>from lending money to certain
            consumers e.g. who qualifies for a loan, at what interest rate and
            what credit limits.
          </div>

        
        </div>

        <div className="section">
          <b>Importance of Credit </b>

          <div id="info">
            Having a good credit score will help determine the{" "}
            <b>types of loans </b>you are able to get and the{" "}
            <b>interest rates you pay.</b>
            <br></br>
            <br></br>
            The lower your credit score, the higher your interest rates will be.
            <br></br>
            <br></br>
            The lifetime cost of higher interest rates from a poor credit score
            can add up and even exceed six figures.
            <img id="icons" src={bullhorn} alt="bullhorn" />
          </div>
        </div>
        <div className="section">
          <b>Credit Example</b>

          <div id="info">
            For example: Jerome has a credit score in the <b>620 </b>range while
            Kelly has a credit score that is over <b>760 </b>(the scale is from
            300-850).
            <img id="icons" src={happyGirlSadBoy} alt="stress" />
            Jerome would pay <b>$65,000 more </b>on a $200,000 mortgage than
            Kelly.
            <br></br>
            <br></br>
            Jerome would pay <b>$5,100 more </b>on a five-year $30,000 auto
            loan.
            <br></br>
            <br></br>
            Jerome would pay <b>$22,000 more </b>than Kelly on a 15-year home
            equity loan of $50,000.
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
