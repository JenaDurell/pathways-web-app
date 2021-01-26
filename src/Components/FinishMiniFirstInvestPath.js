import React, { useEffect } from 'react';
import { Link } from '@reach/router';

function FinishMiniFirstInvestPath() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  return (
      <div>
      <Link to='/firstInvestingMap'>
      <button id = 'finish' type="button" >Finish</button>
      </Link>
      </div>
  );
}

export default FinishMiniFirstInvestPath;