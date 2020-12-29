import React, { useState, useEffect } from 'react';
import '../styles/Pathways.css';
import { Router } from '@reach/router';

export default function CompoundInterestCalc() {
  const [newValueWith, setnewValueWith] = useState(0);
  const [newValueWithout, setnewValueWithout] = useState(0);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.querySelector('#result1').value = '';
    document.querySelector('#result2').value = '';
  }, []);

  useEffect(() => {
    if (clear) document.querySelector('#result1').value = '';
    document.querySelector('#result2').value = '';
  });

  const calculate = (e) => {
    e.preventDefault();
    if (clear) setClear(false);

    let initialInvestment = document.querySelector('#initialInvestment').value;
    if (initialInvestment === '') return;

    let annualAdditions = document.querySelector('#annualAdditions').value;

    let yrsToGrow = document.querySelector('#yrsToGrow').value;

    let k = 0;

    let sumArrayWith = annualAdditions * Math.pow(1.08, yrsToGrow - k);
    console.log('mathpow thing', Math.pow(1.08, yrsToGrow - k));
    console.log('sumarraywith', sumArrayWith);

    
      while (k <= yrsToGrow) {
        sumArrayWith += k
        console.log('in the while loop', sumArrayWith)
        k++;
      }
      console.log('while result', sumArrayWith);
      

    //need to get summation of sumArrayWith

    let newValueWith = initialInvestment * 1.08 ** yrsToGrow;
    console.log('newValWith', newValueWith);

    console.log('addition for fun', sumArrayWith + newValueWith);

    let sumArrayWithout = annualAdditions * (1 + 0.08 * (yrsToGrow - k));
    console.log('sumarraywithout', sumArrayWithout);

    let newValueWithout = initialInvestment * (1 + 0.08 * yrsToGrow);
    console.log('newValWithOut', newValueWithout);

    console.log('more math', sumArrayWithout + newValueWithout);

    setnewValueWith(newValueWith);
    setnewValueWithout(newValueWithout);
  };

  const Clear = (e) => {
    e.preventDefault();

    document.querySelector('form').reset();
    setClear(true);
    setnewValueWith(0);
    setnewValueWithout(0);
  };

  return (
    <div className="InflationCalc">
      <div>
        <form id="calc">
          <ul className="form">
            <li>
              <label for="initialInvestment">Initial investment: </label>
              <input type="text" id="initialInvestment" placeholder="$1000" />
            </li>
            <li>
              <label for="annualAdditions">Annual additions: </label>
              <input type="text" id="annualAdditions" placeholder="$100" />
            </li>
            <li>
              <label for="yrsToGrow">Years to grow: </label>
              <input type="text" id="yrsToGrow" placeholder="10" />
            </li>
            <div id="button-holder">
              <button id="button2" onClick={calculate}>
                Go
              </button>
            </div>
            <li>
              <label for="result" id="result1">
                No Compounding:
              </label>
              <input
                type="text"
                id="result1"
                value={newValueWith}
                readOnly
                placeholder="$0.00"
              />
            </li>
            <li>
              <label for="result" id="result2">
                With Compounding:
              </label>
              <input
                type="text"
                id="result2"
                value={newValueWithout}
                readOnly
                placeholder="$0.00"
              />
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
