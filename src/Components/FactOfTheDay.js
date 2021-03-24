import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import '../styles/factsAndWords.css'
import logo from '../imagesMap/logo.png'
import FactDisplay from '../DailyFactsAndWordsAndQuizzes/FactDisplay';

export default function FactOfTheDay(props) {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (   

        <div id = 'display'>
        <div className="facts-header">
        <div id= 'logo-wrap'>
        <img id='logo' src={logo} alt="Finsiteful Logo" />
       </div>
        <div className="facts">

         Fact of the Day
        </div>
        <div id="info">
         
          <FactDisplay />
          <br></br>
          <br></br>
          </div>
          </div>
          </div>
    )}