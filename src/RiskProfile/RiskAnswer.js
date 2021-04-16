import React, { Component, useState, useReducer } from "react";

const ONE = 1;
const TWO = 2;
const THREE = 3;
const FOUR = 4;
const FIVE = 5;

const reducer = (state, action) => {
  //state === {score: number}
  //action === {type: 'add_one' || 'add_two' || 'add_three' || 'add_four' || 'add_five', payload: 1 || 2 || 3 || 4 || 5}

  switch (action.type) {
    case "add_one":
      return { ...state, score: state.score + action.payload };
    case "add_two":
      return { ...state, score: state.score + action.payload };
    case "add_three":
      return { ...state, score: state.score + action.payload };
    case "add_four":
      return { ...state, score: state.score + action.payload };
    case "add_five":
      return { ...state, score: state.score + action.payload };
    default:
      return state;
  }
};

const RiskAnswerScorer = (props) => {
  const [state, dispatch] = useReducer(reducer, { score: 0 });
  const { score } = state;
  const ans = "";


  if (
    ans === props.one ||
    props.one2 ||
    props.one3 ||
    props.one4 ||
    props.one5
  ) {

    console.log(ans, {score})
    return dispatch({ type: "add_one", payload: ONE });
  } else if (
    ans === props.two ||
    props.two2 ||
    props.two3 ||
    props.two4 ||
    props.two5
  ) {
    return dispatch({ type: "add_two", payload: TWO });
  } else if (
    ans === props.three ||
    props.three2 ||
    props.three3 ||
    props.three4 ||
    props.three5
  ) {
    return dispatch({ type: "add_three", payload: THREE });
  } else if (
    ans === props.four ||
    props.four2 ||
    props.four3 ||
    props.four4 ||
    props.four5
  ) {
    return dispatch({ type: "add_four", payload: FOUR });
  } else if (
    ans === props.five ||
    props.five2 ||
    props.five3 ||
    props.five4 ||
    props.five5
  ) {
    return dispatch({ type: "add_five", payload: FIVE });
  }
};

const RiskAnswer = (props) => {
  console.log(props)
  const [score, setScore] = useState(0)
  return (
    <div id="answer2">
         {props.answers.map((ans, index) => {
          if (props.guess===false) {
            return (
              <button
              className="quizButton"
              onClick={() => RiskAnswerScorer(ans)}
              key={index}
              >
                {ans}
              </button>
            );
          } else {
            if (ans === props.one || props.one2 || props.one3) {
             
              return (
                <button className="correct" key={index}>
                  {ans}
                </button>
              );
            } else if (
              props.selectedAnswer === ans &&
              props.correctAnswer !== ans
            ) {
              <button className="incorrect" key={index}>
                {ans}
              </button>;

              return (
                <button className="incorrect" key={index}>
                  {ans}
                </button>
              );
            } else {
              return (
                <button className="quizButton" key={index}>
                  {ans}
                </button>
              );
            }
          }
        })}
        <br></br>
        {props.guess ? null : (
          <div>
            {" "}
            Thanks for answering! Click back to return to the home page.{" "}
          </div>
        )}
      </div>
    );
  }

export default RiskAnswer;

// class RiskAnswer extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//     answers: this.props.answers,
//     guess: true,
//     selectedAnswer: "",
//     score: 0,
//     one: this.props.one,
//     two: this.props.two,
//     three: this.props.three,
//     one2: this.props.one2,
//     two2: this.props.two2,
//     three2: this.props.three2,
//     four2: this.props.four2,
//     five2: this.props.five2,
//     one3: this.props.one3,
//     two3: this.props.two3,
//     three3: this.props.three3,
//     four3: this.props.four3,
//     five3: this.props.five3,
//     one4: this.props.one4,
//     two4: this.props.two4,
//     three4: this.props.three4,
//     four4: this.props.four4,
//     five4: this.props.five4,
//     one5: this.props.one5,
//     two5: this.props.two5,
//     three5: this.props.three5,
//     four5: this.props.four5,
//     one6: this.props.one6,
//     two6: this.props.two6,
//     three6: this.props.three6,
//     four6: this.props.four6,
//   };
// }
// onAnswer = (ans) => {
//   this.setState({
//     guess: false,
//     selectedAnswer: ans,
//   });
// };
// render() {
//   return (
//     <div id="answer2">
//         {this.state.answers.map((ans, index) => {
//           if (this.state.guess) {
//             return (
//               <button
//               className="quizButton"
//               onClick={() => this.onAnswer(ans)}
//               key={index}
//               >
//                 {ans}
//               </button>
//             );
//           } else {
//             if (ans === this.state.one || this.state.one2 || this.state.one3) {
//               this.setState({
//                 score: this.state.score +1
//               })
//               return (
//                 <button className="correct" key={index}>
//                   {ans}
//                 </button>
//               );
//             } else if (
//               this.state.selectedAnswer === ans &&
//               this.state.correctAnswer !== ans
//             ) {
//               <button className="incorrect" key={index}>
//                 {ans}
//               </button>;

//               return (
//                 <button className="incorrect" key={index}>
//                   {ans}
//                 </button>
//               );
//             } else {
//               return (
//                 <button className="quizButton" key={index}>
//                   {ans}
//                 </button>
//               );
//             }
//           }
//         })}
//         <br></br>
//         {this.state.guess ? null : (
//           <div>
//             {" "}
//             Thanks for answering! Click back to return to the home page.{" "}
//           </div>
//         )}
//       </div>
//     );
//   }
// }
