import React from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import mapLoveBucks from '../imagesMap/mapLoveBucks.png';
import mapCreditAndCoin from '../imagesMap/mapCreditAndCoin.png';
import mapBlueGraph from '../imagesMap/mapBlueGraph.png';

function EmergencyFundMap() {
  return (
    <div>
      <Link to="/pathwaysHome">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="section">
        <b>Emergency Fund</b>
      </div>
      <div id="emergencyFundMap">
        <div id="emergencyFundInfo">
          <Link to="/emergencyFundInfo">
            <input
              className="loveBucksIcon"
              type="image"
              src={mapLoveBucks}
              alt="loveBucks"
            />
          </Link>
          <h5> What is an emergency fund?</h5>
        </div>
        <div id="emergencyFundSize">
          <Link to="/emergencyFundSize">
            <input
              className="mapIcons"
              type="image"
              src={mapCreditAndCoin}
              alt="creditAndCoin"
            />
          </Link>
          <h5>Emergency fund size</h5>
        </div>
        <div id="buildingEmergencyFund">
          <Link to="/buildingEmergencyFund">
            <input
              className="mapIcons"
              type="image"
              src={mapBlueGraph}
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
