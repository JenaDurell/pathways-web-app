import React from 'react';
import { Link } from '@reach/router';
import '../styles/Pathways.css'
import EmergencyFundMap from './EmergencyFundMap'
import loveBucks from '../images/loveBucks.jpg';

function PathwaysLink() {
  return (
    <div>
      <div className="section">
        <b>Pathways</b>
      </div>

      <Link to='/emergencyFundMap'>
      <input id ="mapIcons" type="image" src={loveBucks} alt = 'loveBucks' />
      </Link>
      <Link to="/page3">
      <input id ="mapIcons" type="image" src={loveBucks} alt = 'loveBucks' />

      </Link>
    </div>
  );
}

export default PathwaysLink;
