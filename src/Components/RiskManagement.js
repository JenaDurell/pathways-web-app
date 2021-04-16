import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz14 from "../Investing2Quizzes/Investing2Quiz14";
import triangle from "../imgInvest2/triangle.png";
import pieChart from "../imgInvest2/pieChart.png";
import computerWithGreenBox from "../imgInvest2/computerWithGreenBox.png";
import cards from "../imgInvest2/cards.png"

export default function RiskManagement(props) {
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
        <b>Risk Management</b>

        <div id="info">
          <b>
            How much risk can you tolerate? Knowing this will help you make
            smarter investment decisions.
          </b>
          <div className="section">
            <b>Risk </b>
          </div>
          <div id="info">
            Investing does <b>not guarantee </b>that you will make money.
            <br></br>
            <br></br>
            Assets with the potential for <b>greater return </b>will also have
            the potential for <b>greater loss </b>and vice versa.
            <br></br>
            <br></br>
            Ther is therefore a lot of <b>risk </b>involved when investing.
            <img id="icons" src={triangle} alt="triangle" />
          </div>
        </div>

        <div className="section">
          <b>Asset Allocation </b>

          <div id="info">
            Asset allocation is how your portfolio is how your portfolio is{" "}
            <b>comprised of different types of assets.</b>
            <img id="icons" src={pieChart} alt="pie chart" />
            Your <b>asset allocation </b>determines the amount risk involved
            with your investment because different assets are associated with
            different <b>levels of risk.</b>
          </div>
          <br></br>
        </div>
        <Investing2Quiz14 />
        <div className="section">
          <b>Risk Profile</b>

          <div id="info">
           Your risk profile is an evaluation of your <b>tolerance to taking risks </b>when investing.
            
            <img
              id="icons"
              src={cards}
              alt="cards"
            />
            Make sure to complete the Risk Profile Pathway to find out what your risk profile is.
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
