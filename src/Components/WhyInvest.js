import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import InflationCalc from './InflationCalc';
import Quiz5 from '../Quizzes/Quiz5';
import Quiz6 from '../Quizzes/Quiz6';
import pig from '../imagesInvesting/pig.png';
import moneyDown from '../imagesInvesting/moneyDown.png';
import boxer from '../imagesInvesting/boxer.png';
import FinishMiniFirstInvestPath from '../Components/FinishMiniFirstInvestPath';
import { Link } from '@reach/router';

export default function WhyInvest(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Link to="/firstInvestingMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="title-page-header">
        <div className="section">
          <b>Why Invest?</b>
        </div>
        <div id="info">
          Not only is it beneficial to invest, but you are actually hurting
          yourself by not investing. Here's why...
          <br></br>
          <br></br>
          Investing is incredibly important because it allows you to{' '}
          <b>increase your wealth</b> over time. Not only that, but by not
          investing, you actually <b>lose money!</b> Wait, what? How does that
          happen?
          <img id="icons" src={pig} alt="pig" />
          Well, cash or money that you store in a non-interest account{' '}
          <b>depreciates</b> over time due to <b>inflation.</b>
        </div>
        <div className="section">
          <b>Inflation</b>
        </div>
        <div id="info">
          Inflation is a rise of the prices of goods and services which leads to
          a <b>decrease in purchasing power.</b> Since 1990, the inflation rate
          has been on average <b>2.4% annually.</b>
          <br></br>
          <br></br>
          This means that the purchasing power of money decreases by <b>
            2.4%
          </b>{' '}
          per year.
          <img id="icons" src={moneyDown} alt="moneyDown" />
        </div>
        <div className="section">
          <b>Inflation Example</b>
        </div>
        <div id="info">
          Assuming the value of money decreases by <b>2.4%</b> every year, every{' '}
          <b>$100</b> bill that you might have in your wallet this year will
          only be worth <b>$78.43</b> in 10 years.
          <br></br>
          <br></br>
          <InflationCalc />
          <br></br>
        </div>
        <Quiz5 />
        <br></br>
        <div className="section">
          <b>Beating Inflation</b>
        </div>
        <div id="info">
          By investing, you can <b>beat inflation </b>and avoid this from
          happening.
          <img id="icons" src={boxer} alt="boxer" />
          The historical average annual stock market return is said to be{' '}
          <b> 10%. </b>With an average of 2.4% inflation, this leaves us with an
          average of almost <b> 8% increase in returns!</b>
          <br></br>
          <br></br>
          <Quiz6 />
          <br></br>
          <br></br>
          Fantastic! With the completion of this section, you are one step
          closer to making informed investment decions!
          <br></br>
          <br></br>
          Let's keep it going!
        </div>
        <br></br>
        <FinishMiniFirstInvestPath />
      </div>
    </div>
  );
}
