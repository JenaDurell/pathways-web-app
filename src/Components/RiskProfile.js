import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import cards from "../imgInvest2/cards.png"
import RiskQuestion from "../RiskProfile/RiskQuestion"

export default function RiskProfile(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/pathwaysHome">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>

      <div className="title-page-header">
        <b>Risk Profile</b>
      </div>

    <div id = 'info'>
        Your risk profile is an evaluation of your <b>tolerance to taking risks </b>when investing.
        <img
              id="icons"
              src={cards}
              alt="cards"
            />
            Answer the following questions to see your risk profile. There are no right or wrong answers so <b>be honest!</b>
    </div>
    <div className="section">
            <b>Your Risk Profile </b>

            <RiskQuestion />
          </div>
      
    </div>
  );
}
