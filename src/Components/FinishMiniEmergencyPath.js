import React, { useEffect } from 'react';
import { Link } from '@reach/router';

function FinishMiniEmergencyPath() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
  return (
      <div>
      <Link to='/emergencyFundMap'>
      <button id = 'finish' type="button" >Finish</button>
      </Link>
      </div>
  );
}

export default FinishMiniEmergencyPath;