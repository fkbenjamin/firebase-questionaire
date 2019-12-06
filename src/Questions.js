import React from 'react';
import Question from './Question.js';
import db from './DB.js'


class Questions extends React.Component {
  constructor(props) {
      super(props);
      this.state = {active: 0,
         questions:[] }
      db.collection('questions').get().then((q) => {
         q.docs.forEach(doc => {
           var data = doc.data();
           data.score = 5;
           this.setState({
             questions: [...this.state.questions, data]
           })
         })
       })
  }
  render() {
    return(
      <div>
        {this.state.questions.map((question, key) =>
          <div>
            <Question number={key} first={key===0} last={key===this.state.questions.length - 1} score={question.score} text={question.text} hidden={key !== this.state.active} previousQuestion={this.previousQuestion} nextQuestion={this.nextQuestion} submitQuestionaire={this.submitQuestionaire} updateScore={this.updateScore}/>
          </div>
        )}
      </div>
    )};

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
      console.log("Submitting Questionaire",this.props.pin,this.state.questions)
    }

    updateScore = (key, score) => {
      var questions = this.state.questions
      questions[key].score = score
      this.setState({questions: questions})
    }
  }

  export default Questions;
