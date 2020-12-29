import React from 'react';
import { Router } from '@reach/router';
import '../styles/Pathways.css';

export default function Securities(props) {

    return (
        <div className="title-page-header">
      <div className="section">
        <b>Securities</b>
      </div>
      <div id="info">
        Blindly investing is not a good idea. By understanding the different types of securities to invest in, you can make more confident decisions of where to put your money.
        <br></br>
        <br></br>
        Securities are <b>tradable financial assets </b>that hold monetary value. All securities must follow the regualtions of <b> federal and state laws.</b>
        <br></br>
        <br></br>
        The <b>Securities Act of 1933 </b>is a federal law that requires that all securities sold to the public be registered with the SEC (Securities and Exchange Commission), and that complete information about the seller and the security be made available to the investor.
      </div>
      <div className = 'section'>
          <b>Stocks</b>
      </div>
      </div>
    )
}