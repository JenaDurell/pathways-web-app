import React from 'react';
import '../styles/Pathways.css';
import ConfidenceQuestion from '../Quizzes/ConfidenceQuestion';

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
      <div>
        <ConfidenceQuestion />

        <div id="confidenceSubText">
          We will help you grow your confidence by providing simple tasks to
          complete on a regular basis.
        </div>
      </div>
    );
  }
}
export default ConfidenceLevel;
