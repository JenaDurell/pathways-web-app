import React from "react";
import "./styles/styles.css";
import Quiz from "./Components/Quiz";
import EmergencyFundInfo from "./Components/EmergencyFundInfo";
import EmergencyFundSize from "./Components/EmergencyFundSize";
import BuildingEmergencyFund from "./Components/BuildingEmergencyFund"

export default function App() {
    return (
        <div>
         <EmergencyFundInfo />
         <EmergencyFundSize />
         <BuildingEmergencyFund />
          {/* <Quiz /> */}
        
      </div> 
  
    )
  }