import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import fire from './fire';


class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {password: '',
                    email: '',
                    open: false
                  }
  }
  handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({open:false});
  };

  changeMail = (event) => {
     this.setState({email: event.target.value});
   };

  changePassword = (event) => {
    this.setState({password: event.target.value});
  };

  login = () => {
    const auth = fire.auth();
    auth.signInWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
      console.log("Logged in!", cred);
      this.handleClose();
      this.setState({
                    password: '',
                    email: ''
                  });
    })
  };

render() {
  return (
    <div>
      <Button className="menuButton" color="inherit" onClick={this.handleClickOpen}>
        Login
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte logge dich jetzt ein
          </DialogContentText>
          <TextField
            autoFocus
            required
            label="Email Address"
            type="email"
            value={this.state.email || ''}
            onChange={this.changeMail}
            fullWidth
          />
          <TextField
            required
            label="Password"
            type="password"
            value={this.state.password || ''}
            onChange={this.changePassword}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Abbrechen
          </Button>
          <Button onClick={this.login} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
export default Login;
