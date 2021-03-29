import React, { useEffect } from "react";
import { Link } from "@reach/router";
import CreditMythQuestion from "../Quizzes/CreditMythQuestion";
import CreditMythQuestion2 from "../Quizzes/CreditMythQuestion2";
import CreditMythQuestion3 from "../Quizzes/CreditMythQuestion3"
import CreditMythQuestion4 from "../Quizzes/CreditMythQuestion4"
import CreditMythQuestion5 from "../Quizzes/CreditMythQuestion5"
import CreditMythQuestion6 from "../Quizzes/CreditMythQuestion6"
import CreditMythQuestion7 from "../Quizzes/CreditMythQuestion7"
import CreditMythQuestion8 from "../Quizzes/CreditMythQuestion8"
export default function CreditMyths(props) {
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
        <b>Credit Myths</b>

        <div id="info">
        
            Test your knowledge! Can you decipher the truth from myths about
            credit?{" "}
       
        </div>

        <CreditMythQuestion />
        <CreditMythQuestion2 />
        <CreditMythQuestion3 />
        <CreditMythQuestion4 />
        <CreditMythQuestion5 />
        <CreditMythQuestion6 />
        <CreditMythQuestion7 />
        <CreditMythQuestion8 />
      </div>
      
    </div>
  );
}
