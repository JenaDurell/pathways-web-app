import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import greenBook from "../imgBuildCredit/greenBook.png"
import blueHands from "../imgBuildCredit/blueHands.png"
import coinAndCap from "../imgBuildCredit/coinAndCap.png"
import trading from "../imgBuildCredit/trading.png"
import photoDrawer from "../imgBuildCredit/photoDrawer.png"

function BuildingCreditMap() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Link to="/pathwaysHome">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="section">
        <b>Building Credit</b>
      </div>
      <div id="emergencyFundMap">
        <div id="emergencyFundInfo">
          <Link to="/creditScores">
            <input
              className="loveBucksIcon"
              type="image"
              src={greenBook}
              alt="green book"
            />
          </Link>
          <h5> Credit Scores</h5>
          
        </div>
        <div id="emergencyFundSize">
          <Link to="/creditCards">
            <input
              className="mapIcons"
              type="image"
              src={blueHands}
              alt="blue hands"
            />
          </Link>
          <h5>Credit Cards</h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/calculatingCredit">
            <input
              className="mapIcons"
              type="image"
              src={coinAndCap}
              alt="coin under cap"
            />
          </Link>
          <h5>Calculating Credit </h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/maintainingCredit">
            <input
              className="mapIcons"
              type="image"
              src={trading}
              alt="trading"
            />
          </Link>
          <h5>Maintaining Credit </h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/creditMyths">
            <input
              className="mapIcons"
              type="image"
              src={photoDrawer}
              alt="photo drawer"
            />
          </Link>
          <h5>Credit Myths</h5>
        </div>
      </div>
    </div>
  );
}

export default BuildingCreditMap;
