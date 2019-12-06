import React from 'react';
import Button from '@material-ui/core/Button';

class MyResults extends React.Component {

  showResults = () => {
    this.props.showResults()
}

  constructor(props) {
      super(props);
  }
  render() {
    return (
      <div>
        <Button className="menuButton" color="inherit" onClick={this.showResults}>Meine Ergebnisse</Button>
      </div>
      )
  }
}
export default MyResults;
