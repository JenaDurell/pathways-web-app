import React, { Component } from 'react';
import './styles/styles.css';
import { Router } from '@reach/router';
import EmergencyFundInfo from './Components/EmergencyFundInfo';
import EmergencyFundSize from './Components/EmergencyFundSize';
import BuildingEmergencyFund from './Components/BuildingEmergencyFund';
import WhatIsInvesting from './Components/WhatIsInvesting';
import WhyInvest from './Components/WhyInvest';
import InvestingEarly from './Components/InvestingEarly';
import Securities from './Components/Securities';
import StockMarket from './Components/StockMarket';
import PathwaysHome from './Components/PathwaysHome';
import EmergencyFundMap from './Components/EmergencyFundMap';
import FirstInvestingMap from './Components/FirstInvestingMap';
import ConfidenceLevel from './Components/ConfidenceLevel';
import KnowledgeLevel from './Components/KnowledgeLevel'
import SoloConfidence from './Components/SoloConfidence'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: '',
    };
  }

  componentDidMount() {
    // console.log(this.props.location)

    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.uid = params.get('uid');
  }

  render() {
    return (
      <div>
        <Router>
          <PathwaysHome path="/pathwaysHome" />
          <EmergencyFundMap path="/emergencyFundMap" />
          <FirstInvestingMap path="/firstInvestingMap" />
          <EmergencyFundInfo path="/emergencyFundInfo" />
          <EmergencyFundSize path="/emergencyFundSize" />
          <BuildingEmergencyFund path="/buildingEmergencyFund" />
          <WhatIsInvesting path="/whatIsInvesting" />
          <WhyInvest path="/whyInvest" />
          <InvestingEarly path="/investingEarly" />
          <Securities path="/securities" />
          <StockMarket path="/stockMarket" />
          <ConfidenceLevel path="/confidenceLevel" />
          <KnowledgeLevel path = '/knowledgeLevel' />
          <SoloConfidence path = '/soloConfidence' />
        </Router>
      </div>
    );
  }
}
