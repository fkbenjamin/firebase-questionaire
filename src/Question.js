import React from 'react';

//Material UI SLider Components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const useStyles = makeStyles(theme => ({
  root: {
    width: 100,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

class Question extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        question: `${this.props.text}`,
        slider: this.props.score
    }
  }
  render() {
    if (!this.props.hidden) {
      return (
        <div className="Question">
          <Typography className="QuestionBox" id="discrete-slider-small-steps" gutterBottom>
              <div className="QuestionText">{this.state.question}</div>
          </Typography>
          <Slider
            className="Slider"
            defaultValue={this.props.score}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={10}
            valueLabelDisplay="on"
            value={this.state.slider}
            onChange={this.handleSlider}
          />
          <Grid className="Jumper">
             <ButtonGroup fullWidth aria-label="full width outlined button group">
                {this.props.first
                  ? <Button disabled variant="contained" color="primary" onClick={this.props.previousQuestion}>Vorherige Frage</Button>
                  : <Button variant="contained" color="primary" onClick={this.props.previousQuestion}>Vorherige Frage</Button>
                }
                {this.props.last
                  ? <Button disabled variant="contained" color="primary" onClick={this.props.nextQuestion}>Nächste Frage</Button>
                  : <Button variant="contained" color="primary" onClick={this.props.nextQuestion}>Nächste Frage</Button>
                }
             </ButtonGroup>
         </Grid>
         {this.props.last
           ? <div className="Submit"><Button variant="contained" color="primary" onClick={this.props.submitQuestionaire}>Fragebogen abschicken</Button></div>
           : <div/>
         }
        </div>
      )
    } else {
      return (<div></div>)
    }

   }

   handleSlider = (event, value) => {
    this.props.updateScore(this.props.number, value)
    this.setState({slider: value});
  };
}
export default Question;
