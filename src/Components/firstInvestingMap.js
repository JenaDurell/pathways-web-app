import React from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css';
import investingGraph from '../imagesInvesting/investingGraph.png';
import creditAndCoin from '../images/creditAndCoin.png';
import coinAndCap from '../imagesInvesting/coinAndCap.png';
import blueGraph from '../images/blueGraph.png';
import securities from '../imagesInvesting/securities.png';

function FirstInvestingMap() {
  return (
    <div>
      <div className="section">
        <b>Investing 1</b>
      </div>

      <div id="investing1Map">
        <div id="whatIsInvesting">
          <Link to="/whatIsInvesting">
            <input
              className="mapIcons"
              type="image"
              src={investingGraph}
              alt="investing graph"
            />
          </Link>
          <h5>What is investing?</h5>
        </div>

        <div id="whyInvest">
            <h5>Why invest?</h5>
          <Link to='/whyInvest'>
            <input
              className="mapIcons"
              type="image"
              src={creditAndCoin}
              alt="credit card and coins"
            />
          </Link>
        </div>

        <div id="investingEarly">
            
          <Link to="/investingEarly">
            <input
              className="mapIcons"
              type="image"
              src={coinAndCap}
              alt="coinAndCap"
            />
          </Link>
          <h5>Investing early</h5>
        </div>

        <div id="securities">
            <h5>Securities</h5>
          <Link to='/securities'>
            <input
              className="mapIcons"
              type="image"
              src={securities}
              alt="securities"
            />
          </Link>
        </div>

        <div id="stockMarket">
          <Link to='/stockMarket'>
            <input
              className="mapIcons"
              type="image"
              src={blueGraph}
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
