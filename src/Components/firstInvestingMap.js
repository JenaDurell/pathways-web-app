import React, { useEffect } from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import mapPurpleGraph from '../imagesMap/mapPurpleGraph.png';
import mapCreditAndCoin from '../imagesMap/mapCreditAndCoin.png';
import mapGrad from '../imagesMap/mapGrad.png';
import mapBlueGraph from '../imagesMap/mapBlueGraph.png';
import mapSecurities from '../imagesMap/mapSecurities.png';

function FirstInvestingMap() {
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

      <div id="investing1Map">
      <div className="section">
        <b>Investing 101</b>
      </div>
        <div id="whatIsInvesting">
          <Link to="/whatIsInvesting">
            <input
              className="mapIcons"
              type="image"
              src={mapPurpleGraph}
              alt="investing graph"
            />
          </Link>
          <h5>What is investing?</h5>
        </div>

        <div id="whyInvest">
          <Link to='/whyInvest'>
            <input
              className="mapIcons"
              type="image"
              src={mapCreditAndCoin}
              alt="credit card and coins"
              />
          </Link>
              <h5>Why invest?</h5>
        </div>

        <div id="investingEarly">
            
          <Link to="/investingEarly">
            <input
              className="mapIcons"
              type="image"
              src={mapGrad}
              alt="Grad"
            />
          </Link>
          <h5>Investing early</h5>
        </div>

        <div id="securities">
          <Link to='/securities'>
            <input
              className="mapIcons"
              type="image"
              src={mapSecurities}
              alt="securities"
              />
          </Link>
              <h5>Securities</h5>
        </div>

        <div id="stockMarket">
          <Link to='/stockMarket'>
            <input
              className="mapIcons"
              type="image"
              src={mapBlueGraph}
              alt="blue graph"
            />
          </Link>
          <h5>The stock market</h5>
        </div>
      </div>
    </div>
  );
}

export default FirstInvestingMap;
