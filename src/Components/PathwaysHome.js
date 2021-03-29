import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import mapLoveBucks from '../imagesMap/mapLoveBucks.png';
import mapPurpleGraph from '../imagesMap/mapPurpleGraph.png'
import mainCards from '../imgBuildCredit/mainCards.png'

function PathwaysHome() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>

      <div id="pathwaysMap">
      <div className="section">
        <b>Pathways</b>
      </div>

      <div id="toEmergencyFund">
          <Link to="/buildingCreditMap">
            <input className="loveBucksIcon" type="image" src={mainCards} alt="credit cards" />
          </Link>
          <h5>Building Credit</h5>
        </div>

        <div id="toEmergencyFund">
          <Link to="/emergencyFundMap">
            <input className="loveBucksIcon" type="image" src={mapLoveBucks} alt="loveBucks" />
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
      </div>
    <h4>More to come!</h4>
    </div>
  );
}

export default PathwaysHome
