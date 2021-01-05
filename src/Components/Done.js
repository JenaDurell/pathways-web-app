import React from 'react';

function Done() {

  function doneButton() {
    alert('Done!');
  }
  
  return (
      <div id = 'done-wrap'>
    <button id= 'done' onClick={doneButton}>
      Done!
    </button>
    </div>
  );
}

export default Done;