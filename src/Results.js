import React from 'react';
import Button from '@material-ui/core/Button';
import fire from './fire.js'
import db from './DB.js';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class Results extends React.Component {
  constructor(props) {
      super(props);
      const auth = fire.auth();
      this.state = {submissions: []}
      auth.onAuthStateChanged(user => {
        console.log(user)
        this.setState({user: user.uid.slice(0,6)})
        db.collection('submissions').where('receiver_id', '==',this.state.user).get().then((q) => {
          q.docs.forEach(doc => {
            var data = doc.data();
            console.log("Found some", data)
            this.setState({
              submissions: [...this.state.submissions, data]
            })
          })
         })
      })
  }
  render() {
    return (
      <div>
        {this.state.submissions.map((submission, key) =>
          <div>
          <div>{submission.sender_id}</div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
        <TableBody>
          {submission.questions.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.text}
              </TableCell>
              <TableCell align="right">{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
        )}
      </div>
      )
  }
}
export default Results;
