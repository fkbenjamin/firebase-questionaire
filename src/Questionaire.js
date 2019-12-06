import React from 'react';

import Question from './Question.js';
import UserBar from './UserBar.js';


class Questionaire extends React.Component {
  constructor(props) {
      super(props);
      this.state = {active: 0,
         questions:[
                       {text: 'Wie cool?', score: 5},
                       {text: 'Wie smart?',score: 1},
                       {text: 'Wie nice?', score: 5},
                       {text: 'Wie funny?', score: 5},
                       {text: 'Wie sexy?', score: 5},
                   ] }
  }
  render() {
    return(
    <div>
      <div>
        <UserBar/>
      </div>
      {this.state.questions.map((question, key) =>
        <div>
          <Question number={key} first={key===0} last={key===this.state.questions.length - 1} score={question.score} text={question.text} hidden={key !== this.state.active} previousQuestion={this.previousQuestion} nextQuestion={this.nextQuestion} submitQuestionaire={this.submitQuestionaire} updateScore={this.updateScore}/>
        </div>
      )}
    </div>
  )
  }

  nextQuestion = () => {
    this.setState({
      active: this.state.active + 1
    })
  }

  previousQuestion = () => {
    this.setState({
      active: this.state.active - 1
    })
  }

  submitQuestionaire = () => {
    console.log("TODO")
    console.log("Submitting Questionaire",this.state.questions)
  }

  updateScore = (key, score) => {
    var questions = this.state.questions
    questions[key].score = score
    this.setState({questions: questions})
  }

}

export default Questionaire;
