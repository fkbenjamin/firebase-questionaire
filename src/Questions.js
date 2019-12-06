import React from 'react';
import Question from './Question.js';
import db from './DB.js'
import fire from './fire.js'


class Questions extends React.Component {
  constructor(props) {
      super(props);
      this.state = {active: 0,
         questions:[],
         user: "",
        notSubmitted: true}
      db.collection('questions').get().then((q) => {
         q.docs.forEach(doc => {
           var data = doc.data();
           data.score = 5;
           this.setState({
             questions: [...this.state.questions, data]
           })
         })
       })
       const auth = fire.auth();
       auth.onAuthStateChanged(user => {
         console.log(user)
         this.setState({user: user})
       });
  }
  render() {
    if(this.state.notSubmitted){
    return(
      <div>
        {this.state.questions.map((question, key) =>
          <div>
            <Question number={key} first={key===0} last={key===this.state.questions.length - 1} score={question.score} text={question.text} hidden={key !== this.state.active} previousQuestion={this.previousQuestion} nextQuestion={this.nextQuestion} submitQuestionaire={this.submitQuestionaire} updateScore={this.updateScore}/>
          </div>
        )}
      </div>
    )} else {
      return(
        <h2 className="Heading">Fragebogen abgeschickt.</h2>
    )}
    };

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
      var sender_id = "";

        if (this.state.user !== null) {
          // User is signed in.
          sender_id = this.state.user.uid.slice(7,12)
        } else {
          // No user is signed in.
          sender_id = "ANONYM"
        }
        console.log("Submitting Questionaire",this.props.pin,this.state.questions);
        console.log("CurrentUser", sender_id);
        db.collection('submissions').add({
          sender_id: sender_id,
          receiver_id: this.props.pin,
          questions: this.state.questions
        }).then(res => {
          console.log("Submitted", res)
          this.setState({notSubmitted: false})
        });
    }

    updateScore = (key, score) => {
      var questions = this.state.questions
      questions[key].score = score
      this.setState({questions: questions})
    }
  }

  export default Questions;
