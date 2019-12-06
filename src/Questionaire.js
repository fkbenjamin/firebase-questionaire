import React from 'react';

import Questions from './Questions.js';
import UserBar from './UserBar.js';
import ReactCodeInput from 'react-verification-code-input';



class Questionaire extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        active: 0,
        pin: null,
         }
  }
  render() {
    return(
    <div>
      <div>
        <UserBar/>
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

  handleChange = vals => {
    if (vals.length === 6) {
      console.log('Code entered:', vals);
      this.setState({pin: vals})
    }
  };



}

export default Questionaire;
