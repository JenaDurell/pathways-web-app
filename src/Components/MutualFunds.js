import React, { useEffect } from "react";
import "../styles/Pathways.css";
import { Link } from "@reach/router";
import Investing2Quiz2 from "../Investing2Quizzes/Investing2Quiz2";
import Investing2Quiz3 from "../Investing2Quizzes/Investing2Quiz3"
import Investing2Quiz4 from "../Investing2Quizzes/Investing2Quiz4"
import pieChartBarGraph from "../imgInvest2/pieChartBarGraph.png"
import barChartOnStand from "../imgInvest2/barChartOnStand.png"
import pigAndSafe from "../imgInvest2/pigAndSafe.png"
import bank from "../imgInvest2/bank.png"
import calc from "../imgInvest2/calc.png"
import peopleAroundGlobe from "../imgInvest2/peopleAroundGlobe.png"
import noDollerSign from "../imgInvest2/noDollerSign.png"
import certificate from "../imgInvest2/certificate.png"

export default function MutualFunds(props) {
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
        <b>Mutual Funds</b>

        <div id="info">
          <b>
            Want access to professionally managed funds? Get started to learn
            more about how you can do so with mutual funds.
          </b>

          <div id="info">
            A mutual fund is made up of a{" "}
            <b>pool of money collected from many different investors.</b> This
            pool of money is <b>managed professionally</b> and can be invested
            in stocks, bonds, or any other security in an attempt to make a
            financial gain.
            <br></br>
            <br></br>
            This allows individual investors access to professionally managed
            funds without spending a lot of money.
            <img id="icons" src={pieChartBarGraph} alt="pie chart and bar graph" />
          </div>
        </div>

        <div className="section">
          <b>Fund Performance </b>

          <div id="info">
            By investing in a mutual fund, you invest in the{" "}
            <b>performance of the fund as a whole.</b> As the value of the fund
            goes up, so does your investment.
            <br></br>
            <br></br>
            This means that even if a few of the securities within the mutual
            fund are tanking, the other securities could be doing well, which
            allows for the fund to do well as a whole.
            <br></br>
            <br></br>
            <img id="icons" src={barChartOnStand} alt="pink pie chart" />
          </div>
        </div>
        <div className="section">
          <b>Low Risk</b>

          <div id="info">
            The average mutual fund holds over <b>100 </b>securities which
            greatly reduces the risk from investing in it.
            <br></br>
            <img id="icons" src={pigAndSafe} alt="pink pie chart" />
            <Investing2Quiz2 />
          </div>
        </div>
        <div className="section">
          <b>How to Invest in Mutual Funds</b>

          <div id="info">
            Investing in a mutual fund can be done either through a{" "}
            <b>retirement account </b>or through the{" "}
            <b>company that created the fund.</b>
            <br></br>
            <br></br>
            To purchase a share of a mutual fund, you must pay the mutual fund
            price, which is determined by taking the <b>average value </b>of all
            the securities being held.
            <img id="icons" src={bank} alt="bank" />
          </div>
        </div>
        <div className="section">
          <b>Example</b>

          <div id="info">
            If there are <b>100 </b>securities and their total market capitalization is <b>$500,</b> then the <b>price of a share </b>of the fund would be <b>$5.</b>
            <img id="icons" src={calc} alt="calculator" />
          </div>
          <Investing2Quiz3 />
        </div>
        <div className="section">
          <b>Advantages</b>

          <div id="info">
            Mutual funds are easily <b>accessible as anyone </b>can invest in them.
            <img id="icons" src={peopleAroundGlobe} alt="people around globe" />
            Being <b>professionally managed</b> is also a great advantage as the performance is being tracked on a daily basis.
          </div>
        </div>
        <div className="section">
          <b>Disadvantages</b>

          <div id="info">
            Disadvantages include <b>high fees </b>compared to investing on your own or through a broker, difficulty in <b>comparing funds, </b>and <b>lack of transparency </b>of the holdings of the fund.
            <img id="icons" src={noDollerSign} alt="no doller sign" />
            <Investing2Quiz4 />
            <br></br>
            <div className="section">
          <b>Great Job!</b>
          <br></br>
          <br></br>
          <img id="icons" src={certificate} alt="certificate" />
          <br></br>
          </div>
            Mutual Funds are incredibly comon and now you know why!
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
