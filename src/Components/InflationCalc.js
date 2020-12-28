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
    console.log('num', initialAmt);
    let initialYear = document.querySelector('#initialYear').value;
    console.log('now', initialYear);
    let finalYear = document.querySelector('#finalYear').value;
    console.log('future', finalYear);
    let yearNum = finalYear - initialYear;
    console.log('diff', yearNum);
    let lessValue = 0.024 * yearNum * initialAmt;
    console.log('lessVal', lessValue);
    let itClose = initialAmt - lessValue;
    console.log('how is it this different', itClose);
    let newValue = initialAmt * 0.978 ** yearNum;
    console.log('where is 107 even coming from', newValue);

    setnewValue(newValue);
  };

  const Clear = (e) => {
    e.preventDefault();
    console.log('sum:', newValue);
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
              <label for="initialAmt">Initial amount:     </label>
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
              <button id="button2" onClick={Clear}>
                Clear
              </button>
            </div>
            <li className = 'newVal'>
            <input type="text" id="result" value={newValue} readOnly placeholder="$0.00" />
            <label for="result" id="result">
              New Value
            </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}
