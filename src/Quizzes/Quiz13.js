import React from 'react';

// import Answer from './Answer';

class Quiz13 extends React.Component {
  constructor(props) {
    super(props);

    var dataSet = [
      {
        question: 'Is the stock market accessible to anyone?',
        answers: [
          'a) No, only those with at least $100K',
          'b) No, only those who work in finance',
          'c) Yes!',
          "d) You can't deal in private equity if you've had certain felony convictions.",
        ],
        correct: 2,
      },
      {
        question: 'Who is Steve Jobs?',
        answers: [
          'CEO of Microsoft',
          'Barber in NY',
          'Movie Star',
          'CEO of Apple',
        ],
        correct: 3,
      },
    ];

    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      incorrect: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  } // end constructor

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current == 9) {
      this.setState({ current: 0 });
      this.setState({ incorrect: 0 });
      this.setState({ correct: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    return (
      <div>
        {/* <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        /> */}
        <QuizArea
          handleClick={this.handleClick}
          dataSet={this.state.dataSet[this.state.current]}
        />
      </div>
    );
  }
}

function Question(props) {
  
  return <div id = 'question'>{props.dataSet.question}</div>;
}

function Answer(props) {

  return (
    <div>
      <button id = 'info' onClick={() => props.handleClick(props.choice)}>
        {props.answer}
      </button>
    </div>
  );
}

function AnswerList(props) {
  var answers = [];
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(
      <Answer
        choice={i}
        handleClick={props.handleClick}
        answer={props.dataSet.answers[i]}
      />
    );
  }
  return <div>{answers}</div>;
}

function QuizArea(props) {
  var style = {
    display: 'block',
    boxSizing: 'border-box',
  };
  return (
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
}

// function TotalCorrect(props) {
//   var style = {

//     width: '30vw',

//   };
//   return <div style={style}>Correct: {props.correct}</div>;
// }

// function TotalIncorrect(props) {
//   var style = {

//     width: '30vw',

//   };
//   return <div style={style}>Incorrect: {props.incorrect}</div>;
// }

// function ScoreArea(props) {
//   var style = {
//     width: '80vw',
//     fontsize: '3vh',
//     display: 'block',
//     padding: '2em',
//   };
//   return (
//     <div style={style}>
//       <TotalCorrect correct={props.correct} />
//       <TotalIncorrect incorrect={props.incorrect} />
//     </div>
//   );
// }

export default Quiz13;

// class Quiz extends Component {
//   state = {
//     dataQuestion: [],
//   };

//   setStatefunction = () => {
//     //  use reactjs setState
//     this.setState({
//       dataQuestion: quizData,
//     });
//   };

//   componentDidMount() {
//     this.setStatefunction();
//   }

//   render() {
//     return (
//       <div>
//         {this.state.dataQuestion.map((data) => {
//           return (
//             <div key className="question">
//               <h2> {data.quiz}</h2>
//               <Answer
//                 key={data.id}
//                 answer={data.findAnswer}
//                 rightAnswer={data.rightAnswer}
//                 rightAnswerText={data.findAnswer[data.rightAnswer]}
//               />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

// export default Quiz;
