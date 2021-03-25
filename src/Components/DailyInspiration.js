import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import '../styles/factsAndWords.css'
import logo from '../imagesMap/logo.png'
import InspirationDisplay from '../DailyFactsAndWordsAndQuizzes/InspirationDisplay';

export default function DailyInspiration(props) {
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

         Daily Inspiration
        </div>
        <div id="info">
         
          <InspirationDisplay />
          <br></br>
          <br></br>
          </div>
          </div>
          </div>
    )}