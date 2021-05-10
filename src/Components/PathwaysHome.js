import React, { useEffect } from "react";
import { Link } from "@reach/router";
import "../styles/Pathways.css";
import mapLoveBucks from "../imagesMap/mapLoveBucks.png";
import mapPurpleGraph from "../imagesMap/mapPurpleGraph.png";
import risk from "../imgRiskProfile/risk.png";
import creditAndCoins from "../imgInvest2/creditAndCoins.png";

function PathwaysHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div id="pathwaysMap">
        <div className="section">
          <b>Pathways</b>
        </div>
<br></br>
        <div id="toEmergencyFund">
          <Link to="/buildingCreditMap">
            <input
              className="loveBucksIcon"
              type="image"
              src={creditAndCoins}
              alt="credit cards"
            />
          </Link>
          <h5>Building Credit</h5>
        </div>

        <div id="toEmergencyFund">
          <Link to="/emergencyFundMap">
            <input
              className="loveBucksIcon"
              type="image"
              src={mapLoveBucks}
              alt="loveBucks"
            />
          </Link>
          <h5>Emergency Fund</h5>
        </div>

        <div id="toInvesting1">
          <Link to="/firstInvestingMap">
            <input
              className="mapIcons"
              type="image"
              src={mapPurpleGraph}
              alt="investingGraph"
            />
          </Link>
          <h5>Investing 101</h5>
        </div>

        <div id="toInvesting1">
          <Link to="/investing2Map">
            <input
              className="mapIcons"
              type="image"
              src={mapPurpleGraph}
              alt="investingGraph"
            />
          </Link>
          <h5>Investing 201</h5>
        </div>
        <div id="toInvesting1">
          <Link to="/riskProfile">
            <input
              className="mapIcons"
              type="image"
              src={risk}
              alt="investingGraph"
            />
          </Link>
          <h5>Risk Profile</h5>
        </div>
      </div>
      <h4>More to come!</h4>
    </div>
  );
}

export default PathwaysHome;
