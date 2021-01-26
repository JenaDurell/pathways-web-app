import React from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import loveBucks from '../images/loveBucks.jpg';
import creditAndCoin from '../images/creditAndCoin.png';
import blueGraph from '../images/blueGraph.png';

function EmergencyFundMap() {
  return (
    <div>
      <div className="section">
        <b>Emergency Fund</b>
      </div>
      <div id="emergencyFundMap">
        <div id="emergencyFundInfo">
          <Link to="/emergencyFundInfo">
            <input
              className="loveBucksIcon"
              type="image"
              src={loveBucks}
              alt="loveBucks"
            />
          </Link>
         <h5> What is an emergency fund?</h5>
        </div>
        <div id="emergencyFundSize">
          <h5>Emergency fund size</h5>
          <Link to="/emergencyFundSize">
            <input
              className="mapIcons"
              type="image"
              src={creditAndCoin}
              alt="creditAndCoin"
            />
          </Link>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/buildingEmergencyFund">
            <input
              className="mapIcons"
              type="image"
              src={blueGraph}
              alt="blueGraph"
            />
          </Link>
          <h5>Building an emergency fund </h5>
        </div>
      </div>
    </div>
  );
}

export default EmergencyFundMap;
