import React, { useEffect } from "react";
// import "../styles/Pathways.css";
import "../styles/factsAndWords.css";
import logo from "../imagesMap/logo.png";
import WordDisplay from "../DailyFactsAndWordsAndQuizzes/WordDisplay";

export default function WordOfTheDay(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="display">
      <div id= 'logo-wrap'>
        <img id="logo" src={logo} alt="Finsiteful Logo" />
        </div>
        <div className="word-of-the-day">Word of the Day</div>
        <div id="info">
          <WordDisplay />
          <br></br>
          <br></br>
        </div>
      </div>
   
  );
}
