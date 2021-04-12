import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz10 from "../Investing2Quizzes/Investing2Quiz10";
import Investing2Quiz11 from "../Investing2Quizzes/Investing2Quiz11"
import Investing2Quiz12 from "../Investing2Quizzes/Investing2Quiz12"
import Investing2Quiz13 from "../Investing2Quizzes/Investing2Quiz13"
import pinkPieChart from "../imgBuildCredit/pinkPieChart.png";
import bankAndPerson from "../imgInvest2/bankAndPerson.png"
import clipBoardAndPen from "../imgInvest2/clipBoardAndPen.png"
import loot from "../imgInvest2/loot.png"
import peopleWithTalkBubbles from "../imgInvest2/peopleWithTalkBubbles.png"
import moneyBag from "../imgInvest2/moneyBag.png"
import passingCash from "../imgInvest2/passingCash.png"


export default function WhereToInvest(props) {
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
        <b>Where to Invest?</b>

        <div id="info">
          <b>
            Financial advisors or investment brokers? Which one is right for
            you?
          </b>

          <div className="section">
            <b>Investment Broker </b>

            <div id="info">
              A broker is an individual or a firm who act as a{" "}
              <b>middle man between investors and an exchange.</b>
              <img id="icons" src={bankAndPerson} alt="bank and person" />
              In order to trade securities, you have to be a{" "}
              <b>member of an exchange. </b>To access the exchange, you can go
              through a broker.
            </div>
          </div>
            <Investing2Quiz10 />
          <div className="section">
            <b>Inventory of Shares</b>

            <div id="info">
              Some brokers even maintain an{" "}
              <b>inventory of shares on their own </b>which they then provide to
              their customers.
              <img id="icons" src={clipBoardAndPen} alt="clipboard and pen" />
            </div>
          </div>
          <div className="section">
            <b>Broker Costs</b>

            <div id="info">
              In the past, brokers were only used by those who could afford it.
              Today, there are <b>several online brokers </b>that allow
              investors to trade at a <b>lower cost.</b>
              <img id="icons" src={loot} alt="money" />
              All brokers have <b>different fees </b>so it is important to{" "}
              <b>do your research </b>before choosing which one to go with.
            </div>
          </div>
          <div className="section">
            <b>Financial Advisor</b>

            <div id="info">
              A financial advisor can be used to handle <b>all aspects </b>of
              someone's finances.
              <br></br>
              <br></br>
              From executing trades, to setting budgets, to implementing tax
              strategies, they will do whatever it takes for their clients to{" "}
              <b>reach their goals.</b>
              <img id="icons" src={peopleWithTalkBubbles} alt="people with talk bubbles" />
            </div>
          </div>
          <div className="section">
            <b>FInancial Advisor Cost</b>

            <div id="info">
              Because financial advisors probide several services, they are quite <b>expensive </b>and might not be realistic for a college student or recent graduate.
              <img id="icons" src={moneyBag} alt="bag of money" />
            </div>
            <Investing2Quiz11 />
            <Investing2Quiz12 />
            <Investing2Quiz13 />
            <div className="section">
            <b>Great Job!</b>
            <img id="icons" src={passingCash} alt="passing cash" />
            </div>
            Another Pathway complete. Let's start investing!
          </div>

          <Link to="/buildingCreditMap">
            <button id="finish" type="button">
              Finish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
