import React, { useState, useEffect } from 'react';
import '../styles/Pathways.css';

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

    let initialInvestment = parseInt(document.querySelector('#initialInvestmentInput').value);
    if (initialInvestment === '') return;

    let annualAdditions = parseInt(document.querySelector('#annualAdditionsInput').value);
    let yrsToGrow = parseInt(document.querySelector('#yrsToGrowInput').value);
    
    let interestRate = 0.08;
    
    let newValueWith = withCompounding();
    
    let newValueWithout = withoutCompounding();
    
    function withCompounding() {
      let currentBalance = initialInvestment;
      let i = 0;
      
      while (i <yrsToGrow) {
      
        let interestAccrued = (currentBalance + annualAdditions) * interestRate;
        
        currentBalance = currentBalance + interestAccrued +annualAdditions;
        i++;
      }
      return Math.round(currentBalance * 100) /100;
    }

    function withoutCompounding() {


      let fvInitialInv = initialInvestment * (1 + interestRate*yrsToGrow)
      let fvAnnualContributions = 0
      
      let i = 0

      while (i<yrsToGrow) {
        let ytgRemaining = yrsToGrow -i
        let totalAnnualWithInt =  annualAdditions * (1 + interestRate * ytgRemaining);
        fvAnnualContributions += totalAnnualWithInt 
        i++
      }
      return (Math.round((fvAnnualContributions + fvInitialInv) * 100) /100) 
    }

    setnewValueWith('$' + newValueWith);
    setnewValueWithout('$' + newValueWithout);
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
              <label>Initial investment:&nbsp;&nbsp; </label>
              <input type="text" id="initialInvestmentInput" placeholder="$0" />
            </li>
            <li>
              <label>Annual additions: </label>
              <input type="text" id="annualAdditionsInput" placeholder="$0" />
            </li>
            <li>
              <label>Years to grow: </label>
              <input type="text" id="yrsToGrowInput" placeholder="0" />
            </li>
            <div id="button-holder">
              <button id="button2" onClick={calculate}>
                Go
              </button>
            </div>
            <li>
              <label id="result1">
                With Compounding:
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
              <label id="result2">
                No Compounding:
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
