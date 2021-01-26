import React from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import loveBucks from '../images/loveBucks.jpg';
import investingGraph from '../imagesInvesting/investingGraph.png';

function PathwaysHome() {
  return (
    <div>
      <div className="section">
        <b>Pathways</b>
      </div>

      <div id="pathwaysMap">

        <div id="toEmergencyFund">
          <Link to="/emergencyFundMap">
            <input className="loveBucksIcon" type="image" src={loveBucks} alt="loveBucks" />
          </Link>
          <h5>Emergency Fund</h5>
        </div>

        <div id="toInvesting1">
              <h5>Investing 1</h5>
          <Link to="/firstInvestingMap">
            <input 
              className="mapIcons"
              type="image"
              src={investingGraph}
              alt="investingGraph"
            />
          </Link>
        </div>
      </div>

    </div>
  );
}

export default PathwaysHome;
