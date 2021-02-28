import React from 'react';
import '../styles/Pathways.css';
import KnowledgeQuestion from '../Quizzes/KnowledgeQuestion';

class KnowledgeLevel extends React.Component {
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
        <KnowledgeQuestion />

        <div id="confidenceBottom">
         FinSiteful helps you grow your knowledge!
        </div>
      </div>
    );
  }
}
export default KnowledgeLevel;
