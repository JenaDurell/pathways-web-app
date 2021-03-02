import React from 'react';
import '../styles/Pathways.css';
import ConfidenceQuestion from '../Quizzes/SoloConfidenceQuestion';

class ConfidenceLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        uid: '',
      };
  }
  componentDidMount() {
    let search = window.location.search;
    let params = new URLSearchParams(search);
    this.uid = params.get('uid');
    console.log(this.uid);
  }
  render() {
    return (
      <div id = 'condifence'>
        <ConfidenceQuestion />

        <div id="confidenceBottom">
         FinSiteful helps you grow your skills and your confidence!
        </div>
      </div>
    );
  }
}
export default ConfidenceLevel;
