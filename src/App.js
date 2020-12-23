import React from "react";
import "./styles/styles.css";
import EmergencyFundInfo from "./Components/EmergencyFundInfo";
import EmergencyFundSize from "./Components/EmergencyFundSize";
import BuildingEmergencyFund from "./Components/BuildingEmergencyFund";
import WhatIsInvesting from "./Components/WhatIsInvesting";
import WhyInvest from "./Components/WhyInvest"

export default function App() {
    return (
        <div>
         <EmergencyFundInfo />
         <EmergencyFundSize />
         <BuildingEmergencyFund />
         <WhatIsInvesting />
         <WhyInvest />

          
        
      </div> 
  
    )
  }