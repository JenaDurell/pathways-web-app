import React from 'react';
import '../styles/Pathways.css';
import { Router } from '@reach/router'
import boat from '../images/boat.png';
import planeCarHospital from "../images/planeCarHospital.png";
import bowling from '../images/bowling.png';
import graduate from "../images/graduate.png";
import creditAndCoin from '../images/creditAndCoin.png';
import BuildingEmergencyFund from './BuildingEmergencyFund';

export default function EmergencyFundSize(props) {
    return (
        <div className = "title-page-header">
            <b>Emergency Fund Size</b>
            
            <div className ="section">
                <b>How big does your emergency fund need to be?</b>
                
            </div>
            <div id = "info">
            For working adults, the general recommendation is to have an emergency fund that can cover <b>3-6 months</b> worth of expenses.
            <br></br>
            <br></br>
            This will keep the individual financially afloat in the case of an unexpected job loss or another major emergency.

            <img id="icons" src={boat} alt="boat" />

            However, most college students do not need this large of an emergency fund.
            </div>
            <div className = "section">
                <b>For Students...</b>
            </div>
            <div id = "info">
                Building an emergency fund of <b>$1,000 is great!</b>
                <br></br>
                <br></br>
                That will cover the cost of most emergencies, such as car trouble, last minute plane tickets, or a visit to urgent care.

                <img id="icons" src={planeCarHospital} alt="planeCarHospital" />

                However, the emergency fund amount should <b>vary depending on the person.</b>
                <br></br>
                <br></br>
                If you <b>own a car</b> or if you live far away from family and need to pay for <b>travel, </b> then you should also keep more in your emergecy fund.

                <img id="icons" src={graduate} alt="graduate" />
            </div>
            <div className = "section">
                <b>Stats</b>
            </div>
            <div id = "info">
               A recent study found that:
               <br></br>
               <br></br>
               <b>- 28%</b> of all Americans have no emergency savings whatsoever.
               <br></br>
               <br></br>
               <b>- 25%</b> dont have enough to cover 3 months of expenses.
               <br></br>
               <br></br>
               - Only <b>41%</b> of Americans can pay off a $1,000 emergency.

               <img id="icons" src={bowling} alt="bowling" />
               It is not easy to keep an emergency fund. But, you can do it, even if you start with a little bit at a time.
               <br></br>
               <br></br>

               <img id = 'icons' src = {creditAndCoin} alt = 'creditAndCoin'/>
            </div>
            
            <BuildingEmergencyFund />
        </div>
    )
}