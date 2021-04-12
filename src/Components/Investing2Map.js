import React, { useEffect } from "react";
import { Link } from "@reach/router";
import "../styles/Pathways.css";
import investPathIcon from "../imgInvest2/investPathIcon.png";
import certificate from "../imgInvest2/certificate.png";
import blueAndWhiteAndDollaSign from "../imgInvest2/blueAndWhiteAndDollaSign.png";
import creditAndCoins from "../imgInvest2/creditAndCoins.png";
import passingCash from "../imgInvest2/passingCash.png";
function Investing2Map() {
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
      <div className="invest2">
        <b>Investing 2</b>
      </div>
      <div id="emergencyFundMap">
        <div id="emergencyFundInfo">
          <Link to="/ETF">
            <input
              className="mapIcons"
              type="image"
              src={investPathIcon}
              alt="graph"
            />
          </Link>
          <h5> ETFs</h5>
        </div>
        <div id="emergencyFundSize">
          <Link to="/mutualFunds">
            <input
              className="mapIcons"
              type="image"
              src={certificate}
              alt="certificate"
            />
          </Link>
          <h5>Mutual Funds</h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/moreStockMarket">
            <input
              className="mapIcons"
              type="image"
              src={blueAndWhiteAndDollaSign}
              alt="blueGraph"
            />
          </Link>
          <h5>Stock Market (cont.) </h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/tradingAssets">
            <input
              className="mapIcons"
              type="image"
              src={creditAndCoins}
              alt="blueGraph"
            />
          </Link>
          <h5>Trading Assets</h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/whereToInvest">
            <input
              className="mapIcons"
              type="image"
              src={passingCash}
              alt="blueGraph"
            />
          </Link>
          <h5>Where to Invest?</h5>
        </div>
      </div>
    </div>
  );
}

export default Investing2Map;
