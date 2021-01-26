import React, { useEffect } from 'react';
import { Link } from '@reach/router';

function FinishInvesting() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
      <div>
      <Link to='/pathwaysHome'>
      <button id = 'finish' type="button" >Finish</button>
      </Link>
      </div>
  );
}

export default FinishInvesting;