import React, { useState } from "react";
import { Link } from "@reach/router";
import "../styles/Pathways.css";
import whale from "../imgRiskProfile/whale.png";
import koala from "../imgRiskProfile/koala.png";
import lion from "../imgRiskProfile/lion.png";
import rhino from "../imgRiskProfile/rhino.png";
import deer from "../imgRiskProfile/deer.png";
import risk from "../imgRiskProfile/risk.png";

export default function RiskQuestion() {
  const questions = [
    {
      questionText: "Age?",
      answerOptions: [
        { answerText: "a) Under 20", points: 3 },
        { answerText: "b) 20-30", points: 2 },
        { answerText: "c) 30+", points: 1 },
      ],
    },
    {
      questionText: "Initially, how much do you plan to invest?",
      answerOptions: [
        { answerText: "a) Spare change only", points: 5 },
        { answerText: "b) Less than 30% of my money", points: 4 },
        { answerText: "d) Up to 75% of my money", points: 2 },
        { answerText: "e) Almost all or all my money", points: 1 },
      ],
    },
    {
      questionText: "When do you need access to your investments?",
      answerOptions: [
        { answerText: "a) Within 2 years", points: 1 },
        { answerText: "b) Not for 3-5 years", points: 2 },
        { answerText: "c) Not for 6-10 years", points: 3 },
        { answerText: "d) Not for 11-20 years", points: 4 },
        { answerText: "e) Not for 21+ years", points: 5 },
      ],
    },
    {
      questionText:
        "How confident are you on a scale of 1-5 in your ability to invest?",
      answerOptions: [
        { answerText: "1) Not at all Confident", points: 1 },
        { answerText: "2) A little confident", points: 2 },
        { answerText: "3) Somewhat Confident", points: 3 },
        { answerText: "4) Confident", points: 4 },
        { answerText: "5) Very Confident", points: 5 },
      ],
    },
    {
      questionText:
        "Given these best- and worst-case returns, which would you prefer?",
      answerOptions: [
        {
          answerText: "a) $100 gain best case and $0 loss worst case",
          points: 1,
        },
        {
          answerText: "b) $500 gain best case and $100 loss worst case",
          points: 2,
        },
        {
          answerText: "c) $1,000 gain best case and $350 loss worst case",
          points: 3,
        },
        {
          answerText: "d) $10,000 gain best case and $5,000 loss worst case",
          points: 4,
        },
      ],
    },
    {
      questionText:
        "If you unexpectedly receive $100,000 with the stipulation that you had to put it in one place, what would you do?",
      answerOptions: [
        { answerText: "a) Deposit it into your checking account", points: 1 },
        {
          answerText: "b) Invest it in safe bonds or bond mutual funds",
          points: 2,
        },
        { answerText: "c) Invest half in bonds and half in stocks", points: 3 },
        { answerText: "d) Invest it all in stocks", points: 4 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [profile, setProfile] = useState([]);
  const whaleType = {
    name: "Conservative",
    description:
      "You have a very short time horizon and you do not like taking risks. You prefer to have a guaranteed gain instead of the possibility of a loss.",
    percent: "0% Stocks, 100% Bonds",
    icon: <img id="icons" src={whale} alt="cards" />,
  };

  const koalaType = {
    name: "Moderately Conservative",
    description:
      "Your time horizon is on the shorter side and you like playing it safe rather than risking a loss. ",
    percent: "30% Stocks, 70% Bonds",
    icon: <img id="icons" src={koala} alt="cards" />,
  };

  const deerType = {
    name: "Conservative",
    description: 
    "You have a shorter time horizon but want to see some growth.",
    percent: "60% Stocks, 40% Bonds",
    icon:  <img id="icons" src={deer} alt="cards" />,
  }

  const rhinoType = {
    name: "Moderately Aggressive",
    description: "You are young and have a long time horizon so you can afford to take a little bit more risk.",
    percent: "80% Stocks, 20% Bonds",
    icon:  <img id="icons" src={rhino} alt="cards" />,

  }

  const lionType = {
    name: "Aggressive",
    description: "You are yound with a long time horizon. You are confident in your investing ability and you like taking risks.",
    percent: "100% Stocks, 0% Bonds",
    icon: <img id="icons" src={lion} alt="cards" />,

  }
  const handleAnswerOptionClick = (points) => {
    if (points === 1) {
      setScore(score + 1);
    }

    if (points === 2) {
      setScore(score + 2);
    }

    if (points === 3) {
      setScore(score + 3);
    }

    if (points === 4) {
      setScore(score + 4);
    }

    if (points === 5) {
      setScore(score + 5);
    }
    console.log(score, "points");
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else if (score <= 8) {
      console.log(whaleType, "whale");
      setShowScore(true);
      setProfile([
        whaleType.name,
        whaleType.description,
        whaleType.percent,
        whaleType.icon,
      ]);
    } else if (score >= 9 && score <= 13) {
      setShowScore(true);
      setProfile([
        koalaType.name,
        koalaType.description,
        koalaType.percent,
        koalaType.icon,
      ]);
    } else if (score >= 14 && score <= 18) {
      setShowScore(true);
      setProfile([
        deerType.name,
        deerType.description,
        deerType.percent,
        deerType.icon,
      ]);
    } else if (score >= 19 && score <= 23 ) {
      setShowScore(true)
      setProfile([
        rhinoType.name,
        rhinoType.description,
        rhinoType.percent,
        rhinoType.icon,
      ])
    } else if (score >= 24 && score <= 26 ) {
      setShowScore(true)
      setProfile([
        lionType.name,
        lionType.description,
        lionType.percent,
        lionType.icon,
      ])
    }
  };
  return (
    <div id="info">
      {showScore ? (
        <div>
        <div id = "riskType0">{profile[0]}</div>
        <br></br>
        <div>{profile[1]}</div>
        <br></br>
        You would benefit from investing in the folloing asset allocation: 
        <br></br>
        <br></br>
        <div id = "riskType0"> <b>{profile[2]}</b></div>
        <div>{profile[3]}</div>
       
        <div className="section"> <b>Great Job!</b> </div>
        <img id="icons" src={risk} alt="risk" />
        <br></br>
       <div id="riskType0"> <b>Risk Profile</b>
        </div>
        <p id = 'info'>
        Now that you have a better understanding of your risk profile, you can be more confident in your investment decisions!
        </p>
        <Link to="/pathwaysHome">
        <button id="finish" type="button">
          Finish
        </button>
      </Link>
       </div>
      ) : (
        <>
          <div id="question">{questions[currentQuestion].questionText}</div>
          <div id="answer2">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="quizButton"
                onClick={() => handleAnswerOptionClick(answerOption.points)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
