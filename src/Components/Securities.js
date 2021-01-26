import React from 'react';
import '../styles/Pathways.css';
import Quiz9 from '../Quizzes/Quiz9'
import Quiz10 from '../Quizzes/Quiz10'
import Quiz11 from '../Quizzes/Quiz11'
import Quiz12 from '../Quizzes/Quiz12'
import pie from '../imagesInvesting/pie.png';
import lootSack from '../imagesInvesting/lootSack.png';
import coinHand from '../imagesInvesting/coinHand.png';
import yikes from '../imagesInvesting/yikes.png';
import bond from '../imagesInvesting/bond.png';
import { Link } from '@reach/router';


export default function Securities(props) {
  return (
    <div className="title-page-header">
      <div className="section">
        <b>Securities</b>
      </div>
      <div id="info">
        Blindly investing is not a good idea. By understanding the different
        types of securities to invest in, you can make more confident decisions
        of where to put your money.
        <br></br>
        <br></br>
        Securities are <b>tradable financial assets </b>that hold monetary
        value. All securities must follow the regualtions of{' '}
        <b> federal and state laws.</b>
        <br></br>
        <br></br>
        The <b>Securities Act of 1933 </b>is a federal law that requires that
        all securities sold to the public be registered with the SEC (Securities
        and Exchange Commission), and that complete information about the seller
        and the security be made available to the investor.
      </div>

      <div className="section">
        <b>Stocks</b>
      </div>
      <div id="info">
        A stock is a type of security that represents{' '}
        <b>ownership of a fraction of a company.</b> By purchasing a stock of a
        company, as the company succeeds and grows, the value of your stock
        grows with it.
        <img id="icons" src={pie} alt="pie" />
        Investors can then <b>sell their stock at a greater price</b> than they
        bought it for, thus making a profit.
      </div>

      <div className="section">
        <b>Stock Example</b>
      </div>
      <div id="info">
        Assume Molly bought <b>5</b> shares of Apple for <b>$1</b> each. One
        year later, Apple then came out with the iPhone and their stock prices
        skyrocketed to <b>$500.</b>
        <br></br>
        <br></br>
        Molly then sold her shares and received <b>$2500.</b> In just{' '}
        <b>one year,</b> she turned $5 into $2500.

        <img id="icons" src={lootSack} alt="lootsack" />

        This is an extreme example, but you get the point.
      </div>
      <div className="section">
        <b>Why do companies sell stock?</b>
      </div>
      <div id="info">
        You might be asking yourself, why do companies sell part of their
        ownership? They do this to <b>raise money.</b>

        <img id="icons" src={coinHand} alt="coinHand" />

        By selling their stock, the company can afford various initiatives such as <b>opening a new branch, </b> or <b>paying off a debt.</b>
<br></br>
<br></br>
        <Quiz9 />
        <br></br>
        <Quiz10 />
        <br></br>
        
      </div>
      <div className="section">
        <b>Stocks = High Risk</b>
      </div>
      <div id="info">
        Now, investing in stocks is a great way to make a lot of money, but it
        comes with a great deal of <b>risk.</b>
        <br></br>
        <br></br>
        If a company starts to do <b>poorly, </b>their stock price will{' '}
        <b>go down.</b> If that same company starts doing <b>well</b> again, its
        stock price will <b>go back up.</b>
        <img id="icons" src={yikes} alt="yikes" />
        <br></br>
        Investing in stocks is therefore <b>not a guaranteed win.</b> But don't
        let this scare you away from stocks because as mentioned, the average
        annual stock market return after inflation is about <b>8%.</b>
      </div>

      <div className="section">
        <b>Bonds</b>
      </div>
      <div id="info">
        Another type of security are <b>bonds.</b> If a corporation needs funds
        to grow their business or a government needs funds to build roads, they
        can <b>raise these funds by issuing bonds.</b>
        <br></br>
        <br></br>
        By purchasing bonds, an investor <b>lends their money</b> to the
        corporation or government for a certain <b>period of time.</b>
        <img id="icons" src={bond} alt="bond" />
        Not only does the government have to pay back the{' '}
        <b>initial amount, </b>they also have to pay <b>interest.</b> By
        receiving the interest, the investor makes a <b>profitable return.</b>
      </div>

      <div className="section">
        <b>Bonds = Low Risk</b>
      </div>
      <div id="info">
        Investors buy bonds because they provide a <b>predictable return</b> via
        a steady stream of income from interest payments. Purchasing bonds is
        therefore considered a <b>low risk investment.</b>
        <br></br>
        <br></br>
        But lower risk investments also have <b>lower returns.</b> Historically,
        the average return from bond investments are lower than the average
        return of the stock market.
        <br></br>
        <br></br>
        <Quiz11 />
        <br></br>
        <Quiz12 />
        <br></br>
        
        Understanding what you can invest in will give you a leg up when making
        investment decisions.
      </div>
      <Link to="/firstInvestingMap">
        <button id="finish" type="button">
          Finish
        </button>
      </Link>  
    </div>
  );
}
