import React from 'react';

import Questions from './Questions.js';
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
          <Questions/>
    </div>
  )
  }



}

export default Questionaire;
