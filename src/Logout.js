import React from 'react';
import Button from '@material-ui/core/Button';
import fire from './fire';

class Logout extends React.Component {

  logout = () => {
    const auth = fire.auth();
    auth.signOut().then(() => {
      console.log("logged out");
  })
}

  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <Button className="menuButton" color="secondary" onClick={this.logout}>Logout</Button>
      </div>
      )
  }
}
export default Logout;
