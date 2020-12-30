import React, { useState, useEffect } from 'react';
import '../styles/Pathways.css';
import { Router } from '@reach/router';

export default function InflationCalc() {
  const [newValue, setnewValue] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#result').value = '';
  }, []);

  useEffect(() => {
    if (clear) document.querySelector('#result').value = '';
  });

  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);

    let initialAmt = document.querySelector('#initialAmt').value;
    if (initialAmt === '') return;
    
    let initialYear = document.querySelector('#initialYear').value;
   
    let finalYear = document.querySelector('#finalYear').value;
  
    let yearNum = finalYear - initialYear;
   
    let newValue = (Math.round((initialAmt * 0.978 ** yearNum)*100)/100);
 
    setnewValue(newValue);
  };

  const Clear = (e) => {
    e.preventDefault();
    
    document.querySelector('form').reset();
    setClear(true);
    setnewValue(0);
  };

  return (
    <div className="InflationCalc">
      <div className="info">
        Input values below to see the effect of inflation:
      </div>
      <div>
        <form id="calc">
          <ul className="form">
            <li>
              <label for="initialAmt">Initial amount: &nbsp; &nbsp;   </label>
              <input type="text" id="initialAmt" placeholder="$0.00" />
            </li>
            <li>
              <label for="initialYear">Initial Year:     </label>
              <input type="text" id="initialYear" placeholder="2021" />
            </li>
            <li>
              <label for="finalYear">Final year:         </label>
              <input type="text" id="finalYear" placeholder="2030" />
            </li>
            <div id="button-holder">
              <button id="button2" onClick={calculate}>
                Go
              </button>
              
            </div>
            <li className = 'newVal'>
            <input type="text" id="result" value={newValue} readOnly placeholder="$0.00" />
            <label for="result" id="result">
              New Value
            </label>
            </li>
            <button id="button2" onClick={Clear}>
                Reset
              </button>
          </ul>
        </form>
      </div>
    </div>
  );
}
