import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import bucks from '../imagesInvesting/bucks.png';
import sleep from '../imagesInvesting/sleep.png';
import roadBlock from '../imagesInvesting/roadBlock.png';
import FinishMiniFirstInvestPath from '../Components/FinishMiniFirstInvestPath';
import { Link } from '@reach/router';

export default function WhatIsInvesting(props) {
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
        <b>Investing 1</b>

        <div className="section">
          <b>What is Investing?</b>
        </div>
        <div id="info">
          Investing is necessary to build wealth. Instead of working for money,
          you can actually let your money work for you.
          <br></br>
          <br></br>
          Investing means committing a resource in return for a{' '}
          <b>future benefit.</b> In the financial sense, the resource being
          invested is money, and the future benefit is <b>more money.</b>
          <img id="icons" src={bucks} alt="bucks" />
          Investing allows people to commit a certain amount of money towards a
          financial asset in hopes of the asset growing in value, or{' '}
          <b>appreciating.</b>
        </div>
        <div className="section">
          <b>Investing Example:</b>
        </div>
        <div id="info">
          Assume you buy a board game for <b>$200.</b> Fifteen years later, it
          is worth <b>$1,000</b> because of the sentimental value that it
          creates. The board game has <b>appreciated</b>, and your money spent
          then is worth 5 times as much now.
          <br></br>
          <br></br>
          The same goes for <b>investing</b> in securities such as stocks and
          bonds (we will cover securities later). You buy a stock, watch it{' '}
          <b>appreciate</b>, and then sell it for more money than you bought it
          for, i.e. a profit.
        </div>
        <div className="section">
          <b>Make Money While Sleeping</b>
        </div>
        <div id="info">
          The best part is, investing <b>does not require a lot of work.</b> It
          can be very easy and you don't have to put a lot of time into it.
          <br></br>
          <br></br>
          It is so easy, that you can even <b>
            make money while you sleep!
          </b>{' '}
          How great is that?!
          <img id="icons" src={sleep} alt="sleep" />
        </div>
        <div className="section">
          <b>Risk</b>
        </div>
        <div id="info">
          However, there is some <b>risk</b> involved with investing.
          <br></br>
          <br></br>
          There is always a chance that you lose money if the value of your
          investments <b>depreciates.</b>
          <img id="icons" src={roadBlock} alt="roadblock" />
          But don't worry, you are <b>on the right track</b> to make more
          informed investment decisions!
          <br></br>
          <br></br>
          This is only the start, keep going to learn more about investing!
        </div>
        <FinishMiniFirstInvestPath />
      </div>
    </div>
  );
}
