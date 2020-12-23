import React from 'react';
import '../styles/Pathways.css';
import pig from '../imagesInvesting/pig.png';
import moneyDown from '../imagesInvesting/moneyDown.png';


export default function WhyInvest(props) {
    return ( 
        <div className = 'title-page-header'>
        <div className = 'section'>
            <b>Why Invest?</b>
        </div>
        <div id='info'>
            Not only is it beneficial to invest, but you are actually hurting yourself by not investing. Here's why...
            <br></br>
            <br></br>
            Investing is incredibly important because it allows you to <b>increase your wealth</b> over time. Not only that, but by not investing, you actually <b>lost money!</b> Wait, what? How does that happen?

            <img id='icons' src = {pig} alt = "pig" />
            Well, cash or money that you store in a non-interest account <b>depreciates</b> over time due to <b>inflation.</b>
        </div>
        <div className = 'section'>
            <b>Inflation</b>
        </div>
        <div id='info'>
            Inflation is a rise of the prices of goods and services which leads to a <b>decrease in purchasing power.</b> Since 1990, the inflation rate has been on average <b>2.4%.</b>
            <br></br>
            <br></br>
            This means that the purchasing power of money decreases by <b>2.4%</b> per year.

            <img id='icons' src = {moneyDown} alt = "moneyDown" />
        </div>
        <div className="section">
            <b>Inflation Example</b>
        </div>
        <div id="info">
            Assuming the value of money decreases by <b>2.4%</b> every year, every <b>$100</b> bill that you might have in your wallet this year will only be worth <b>$78.89</b> in 10 years.
            <br></br>
            <br></br>
        </div>
        </div>
    )}