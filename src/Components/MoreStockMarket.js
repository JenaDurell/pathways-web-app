import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz5 from "../Investing2Quizzes/Investing2Quiz5";
import Investing2Quiz6 from "../Investing2Quizzes/Investing2Quiz6"
import networking from "../imgInvest2/networking.png"
import crypto from "../imgInvest2/crypto.png"
import computerWithGreenBox from "../imgInvest2/computerWithGreenBox.png"


export default function MoreStockMarket(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Link to="/buildingCreditMap">
        <button id="backButton" type="button">
          Back
        </button>
      </Link>
      <div className="title-page-header">
        <b>Stock Market (cont.)</b>

        <div id="info">
          <b>
            Investing is easier if you understand the stock market and how it works. Get started to learn more.
          </b>

          <div id="info">
            The stock market operates through a <b>network of exchanges.</b>
            <br></br>
            <br></br>
            These exchanges allow companies to <b>list their shares </b>of stock that they want to sell.
            <br></br>
            <br></br>
            An investor can then go in and purchase these shares and start <b>trading </b>them with other investors.
            <img id="icons" src={networking} alt="network" />
          </div>
        </div>

        <div className="section">
          <b>The Exchanges </b>

          <div id="info">
           The exchanges then keep <b>track of all the trades </b>which helps investors determine the price at which to buy or sell stocks.
           <img id="icons" src={crypto} alt="crypto symbols" />
           The price is determined by the <b>supply and demand </b>of each security at that given time.
          </div>
          <br></br>
          <Investing2Quiz5 />
          <br></br>
          <Investing2Quiz6 />
          <br></br>
        </div>
        <div className="section">
          <b>Computerized Tracking</b>

          <div id="info">
            Tracking the trades and setting prices is mostly done via <b>computer algorithms </b>nowadays which allows for constant updates.
            <br></br>
            <br></br>
            However, some exchanges still utilize people to set pricing.
            <img id="icons" src={computerWithGreenBox} alt="computer monitor screen" />
           Awesome! The stock market is now awaiting your arrival.
          </div>
        </div>
        
        <Link to="/buildingCreditMap">
          <button id="finish" type="button">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}
