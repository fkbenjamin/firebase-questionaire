import React from 'react';
import fire from './fire';
import Signup from './Signup.js';
import Login from './Login.js';
import Logout from './Logout.js';
import AppBar from '@material-ui/core/AppBar';



class UserBar extends React.Component {

  constructor(props) {
      super(props);
      const auth = fire.auth();
      this.state = {user: null};
      auth.onAuthStateChanged(user => {
        console.log(user)
        this.setState({user: user})
      });
  }

  render() {

    return (
      <div>
        <AppBar className="UserBar" position="static">
          <div className="menuButton">
          {this.state.user !== null
            ? <Logout/>
            : <div><Login/><Signup/></div>
          }
          </div>
        </AppBar>
      </div>
      )
  }
}
export default UserBar;
