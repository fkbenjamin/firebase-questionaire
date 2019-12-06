import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import fire from './fire';


class Signup extends React.Component {
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

  register = () => {
    const auth = fire.auth();
    auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(cred => {
      console.log("Auth", cred.user);
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
        Signup
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Registrierung</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bitte registriere dich jetzt
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
          <Button onClick={this.register} color="primary">
            Registrieren
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
export default Signup;
