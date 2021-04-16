import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz1 from "../Investing2Quizzes/Investing2Quiz1";
import redX from "../imgInvest2/redX.png";
import greenCheck from "../imgInvest2/greenCheck.png";
import investPathIcon from "../imgInvest2/investPathIcon.png";
import pieChartBarGraph from '../imgInvest2/pieChartBarGraph.png'
export default function ETF(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/investing2Map">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="title-page-header">
        <b>ETFs</b>

        <div id="info">
          <b>
            Want to earn more money while spending less and taking less risk?
            ETFs are the way to do that.
          </b>

          <div id="info">
            ETFs or <b> Exchange Traded Funds </b>are a type of security that
            contain multiple assets or securities such as stocks and bonds.
            <img id="icons" src={pieChartBarGraph} alt="pie chart and bar graph" />
            ETFs are just like other marketable securities and can be{" "}
            <b>bought and sold on the market </b>throughout the day. An ETF can
            hold <b>hundreds or thousands of stocks </b>across various
            industries, or it can focus on specific industries or sectors.
          </div>
        </div>

        <div className="section">
          <b>ETF Types </b>

          <div id="info">
            An ETF might only hold <b>U.S. securities, </b>while another ETF
            only holds <b>foreign securities.</b> Other types of ETFs include:
            <br></br>
            <br></br>
            1. <b>Bond ETFs</b> invest in bonds.
            <br></br>
            <br></br>
            2. <b>Industry ETFs</b> track specific industries such as technology
            or banking.
            <br></br>
            <br></br>
            3. <b>Commodity ETFs</b> invest in crude oil or gold.
            <br></br>
            <br></br>
            4. <b>Currency ETFs</b> invest in foreign currencies.
            <br></br>
            <br></br>
          </div>
        </div>
        <div className="section">
          <b>ETF Advantages</b>

          <div id="info">
            First of all, because an ETF holds <b>several securities, </b>the
            investment risk is lower.
            <br></br>
            It is also more <b>price efficient </b>because you only have to make
            one transaction instead of one per security.
            <img id="icons" src={greenCheck} alt="green check mark" />
            ETFs also allow you to <b>focus your investments </b>on certain
            industries. For example, if you really want to invest in the
            healthcare industry, then you can do so through a healthcare focused
            ETF.
          </div>
        </div>
        <div className="section">
          <b>ETF Disadvantages</b>

          <div id="info">
            A disadvantage of investing in an ETF is that it can provide{" "}
            <b>less diversification</b> due to focused industries.
            <img id="icons" src={redX} alt="red x" />
            Another disadvantage is that <b>costs could be higher </b>due to
            certain brokers implementing management fees of ETFs. This is not
            always the case so make sure that you <b>do the research</b> before
            choosing which ones you want.
            <Investing2Quiz1 />
            <br></br>
            <div className="section">
              <b>Great job!</b>
              <img id="icons" src={investPathIcon} alt="graph" />
              <b>ETFs</b>
            </div>
            In the past decade, the amount invested in ETFs has grown from $1.3
            trillion to around $5 trillion.
          </div>
        </div>

        <Link to="/investing2Map">
          <button id="finish" type="button">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}
