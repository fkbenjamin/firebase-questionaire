import React from 'react';

import Questions from './Questions.js';
import UserBar from './UserBar.js';
import ReactCodeInput from 'react-verification-code-input';
import Results from './Results';



class Questionaire extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        pin: null,
        showResults: false
         }
  }
  render() {
    if(this.state.showResults){
      return(
        <div>
          <div>
            <UserBar showResults={this.showResults}/>
          </div>
          <Results/>
        </div>

      )
    } else {
        return(
          <div>
            <div>
              <UserBar showResults={this.showResults}/>
            </div>
              {this.state.pin === null
                ? <div className="PinCode">
                    <h2 className="Heading">Enter Identifier</h2>
                    <ReactCodeInput
                      type="text"
                      autoFocus

                      onChange={this.handleChange}
                    />
                  </div>
                : <Questions pin={this.state.pin}/>}
          </div>
        )
    }
}

  handleChange = vals => {
    if (vals.length === 6) {
      console.log('Code entered:', vals);
      this.setState({pin: vals})
    }
  };

  showResults = () => {
    this.setState({showResults: true})
  };

}

export default Questionaire;
