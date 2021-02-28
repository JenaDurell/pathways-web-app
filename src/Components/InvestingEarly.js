import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import CompoundInterestCalc from './CompoundInterestCalc';
import Quiz7 from '../Quizzes/Quiz7';
import Quiz8 from '../Quizzes/Quiz8';
import dolla from '../imagesInvesting/dolla.png';
import tinyToes from '../imagesInvesting/tinyToes.png';
import arrowUpChart from '../imagesInvesting/arrowUpChart.png';
import gardenGirl from '../imagesInvesting/gardenGirl.png';
import scale from '../imagesInvesting/scale.png';
import FinishMiniFirstInvestPath from '../Components/FinishMiniFirstInvestPath';
import { Link } from '@reach/router';

export default function InvestingEarly(props) {
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
          <b>Investing Early</b>
        </div>
        <div id="info">
          When it comes to investing, time is your friend. Using it to your
          advantage can help you make significantly more money than you would
          otherwise.
        </div>
        <div className="section">
          <b>Start Small</b>
        </div>
        <div id="info">
          Many people think that investing is something that you can only do if
          you have <b> a lot of money. </b>That couldn't be farther from the{' '}
          <b>truth.</b>
          <br></br>
          <br></br>
          In fact, it is actually better to <b>start small. </b>Starting small
          allows you to learn about the process of investing to figure out what{' '}
          <b>works for you, </b>while not being too worried about the effects.
          <img id="icons" src={dolla} alt="dolla" />
          With the recent emergence of digital investment platforms, you can
          even <b>invest as little as $1.</b>
        </div>

        <div className="section">
          <b>Start Early</b>
        </div>
        <div id="info">
          Starting small means that you can <b>start early.</b> By doing so, you
          are able to <b>build the habit</b> of putting money away in your
          investment account, regardless of the amount.
          <img id="icons" src={tinyToes} alt="tinyToes" />
          Even if it is just a small amount of money initially, the{' '}
          <b>lessons learned will pay off </b>when you have more money to work
          with.
        </div>

        <Quiz7 />
        <div className="section">
          <b>Invest for the Long Term</b>
        </div>
        <div id="info">
          You will also <b>make more money </b>by starting early. Historically,
          in the long term, the market always <b>goes up, </b>but in the short
          term, it can go down.
          <br></br>
          <br></br>
          So the longer you invest, the greater chance you will have of making
          money on that investment.
          <img id="icons" src={arrowUpChart} alt="arrowUpChart" />
        </div>

        <div className="section">
          <b>Compound Interest</b>
        </div>
        <div id="info">
          Another major reason to start early is because of{' '}
          <b>compound interest.</b> Compound interest is the interest earned on
          interest earned on interest, and so on.
          <br></br>
          <br></br>
          This is done by <b>reinvesting your returns. </b>Therefore, the longer
          you keep your money invested, the higher the returns will be with each
          consequent year.
          <img id="icons" src={gardenGirl} alt="gardenGirl" />
          <Quiz8 />
          <br></br>
          <b> Explanation:</b>
          <br></br>
          <br></br>
          Assuming an 8% annual return, if you invest <b>$3,000</b> every year
          from age 25 to 35, when you are 65, your <b>$30,000</b> invested will
          have grown to more than <b>$472,000.</b>
          <br></br>
          <br></br>
          If you start investing <b>$3,000</b> every year from age 35 to 65,
          when you reach 65 your <b>$90,000 </b> will only have reached{' '}
          <b>$368,000.</b>
          <br></br>
          <br></br>
          That's a big difference!
          <img id="icons" src={scale} alt="scale" />
          <div className="section">
            <b>Compound Interest</b>
          </div>
          <div id="info">
            Input values below to see the effect of compound interest assuming
            an <b>8% </b> annual return:
          </div>
          <CompoundInterestCalc />
        </div>
        <div id="info">
          <b>Why invest?</b>
          <br></br>
          <br></br>
          Investing is incredibly important and the sooner you start investing,
          the better off you'll be!
          <br></br>
          <br></br>
          Now that you know <b>why </b>you should invest, read on to learn about
          some of the available investment options.
        </div>

        <FinishMiniFirstInvestPath />
      </div>
    </div>
  );
}
