import React, { useEffect } from 'react';
import '../styles/Pathways.css';
import '../styles/factsAndWords.css'
import logo from '../imagesMap/logo.png'
import QuizQuestionDisplay from '../DailyFactsAndWordsAndQuizzes/QuizQuestionDisplay';

export default function QuizOfTheDay(props) {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    return (   

        <div id = 'display'>
        <div className="facts-header">
        <img id='icons' src={logo} alt="Finsiteful Logo" />
        <div className="facts">

        Today's Quiz
        </div>
        <div id="info">
         
          <QuizQuestionDisplay />
          <br></br>
          <br></br>
          </div>
          </div>
          </div>
    )}