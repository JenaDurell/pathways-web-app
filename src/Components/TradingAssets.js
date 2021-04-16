import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz8 from "../Investing2Quizzes/Investing2Quiz8";
import Investing2Quiz9 from "../Investing2Quizzes/Investing2Quiz9";
import orderClipBoard from "../imgInvest2/orderClipBoard.png"
import stopSign from "../imgInvest2/stopSign.png"
import Investing2Quiz7 from "../Investing2Quizzes/Investing2Quiz7";
import forSaleSign from "../imgInvest2/forSaleSign.png"
import creditAndCoins from "../imgInvest2/creditAndCoins.png"

export default function TradingAssets(props) {
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
        <b>Trading Assets</b>

        <div id="info">
          <b>
            Become better at trading your assets by familiarizing yourself with
            the following terms and methods.
          </b>

          <div className="section">
            <b>Terms </b>

            <div id="info">
              <b>Ask Price: </b>If you are selling an asset, you will set an ask
              price; the price you would like to receive for the asset.
              <br></br>
              <br></br>
              <b>Bid Price: </b>If you are buying an asset, you will set a bid
              price; the price you would like to pay for the asset.
              <br></br>
              <br></br>
              <b>Market Value: </b>Trading at market value means buying at the
              ask price or selling at the bid price.
              <br></br>
              <br></br>
              <b>Stock Price: </b>The price at which the stock is currently
              trading.
              <br></br>
              <br></br>
            </div>
          </div>
              <Investing2Quiz7 />
          <div className="section">
            <b>Limit Order</b>

            <div id="info">
             A <b>limit order </b>is an order to buy or sell a stock when it reaches a certain price.
              <br></br>
              <br></br>
              Orders can be sent to brokers or to the trading venue.
              <img id="icons" src={orderClipBoard} alt="order clipboard" />
            </div>
          </div>
          <div className="section">
            <b>How to use Limit Orders</b>

            <div id="info">
            1. If you bought a stock for <b>$10 </b>and the price of it is <b>going up,</b> you can set a limit order to sell the stock if it reaches <b>$15 or higher.</b>
              <br></br>
              <br></br>
             2. If you want to buy a stock whose price is <b>$10, </b>you can set a limit order to buy the stock if it ever reaches <b>$5 or less.</b>
              <img id="icons" src={orderClipBoard} alt="order clipboard" />
            </div>
          </div>
          <div className="section">
            <b>Stop Order</b>

            <div id="info">
           A <b>stop order </b>is an order to buy or sell a stock when it reaches a certain price in order to minimize losses.
              
              <img id="icons" src={stopSign} alt="stop sign" />
            </div>
          </div>
          <div className="section">
            <b>How to use Stop Orders</b>

            <div id="info">
           1. If you buy a stock for <b>$10 </b>and the price of it is going down, you can set a stop order to sell the stock if it reaches <b>$8 or less.</b>
           <br></br>
           <br></br>
           2. If you want to sell a stock whose price is <b>$10, </b>you can set a limit order to buy the stock if it reaches <b>$12 or higher.</b>
              <img id="icons" src={stopSign} alt="stop sign" />
            </div>
          </div>
          <Investing2Quiz8 />
          <div className="section">
            <b>Short-Selling</b>

            <div id="info">
              Short selling is when you sell an asset you don't already own with
              the intention of <b>buying it back later.</b>
              <br></br>
              <br></br>
              This is commonly done when an investor believes that the value of
              a stock will <b>drop.</b>
              <img id="icons" src={forSaleSign} alt="for sale sign" />
            </div>
          </div>
          <div className="section">
            <b>How to Short-Sell</b>

            <div id="info">
              If you <b>predict </b>that the price of a stock that you own is
              about to drop, you can sell the stock at the current market value
              of, for instance, <b>$80/share.</b>
              <br></br>
              <br></br>
              Then the price drops to <b>$65/share, </b>so you buy it back at
              that price, having made a <b>$15 profit </b>(excluding fees).
              <img id="icons" src={forSaleSign} alt="for sale sign" />
              <Investing2Quiz9 />
             
              <div className="section">
            <b>Great Job!</b>
            <br></br>
              <br></br>
              <img id="icons" src={creditAndCoins} alt="credit cards and coins" />
              </div>
              <br></br>
              <br></br>
             With this new knowledge, you can confidently hit the stock market!
            </div>
          </div>

          <Link to="/investing2Map">
            <button id="finish" type="button">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
