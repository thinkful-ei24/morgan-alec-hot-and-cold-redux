import React from 'react';

import './guess-form.css';
import {makeGuess, setFeedBack} from '../actions';
import {connect} from 'react-redux'

class GuessForm extends React.Component {
  onSubmit(event) {
      event.preventDefault();
    let guess = parseInt(this.input.value, 10);
    if(!isNaN(guess)){
    this.props.dispatch(makeGuess(guess))
  } else {
    return this.props.dispatch(setFeedBack('Must be a valid number'));
  }
    this.input.value = '';
    this.input.focus();

    if (this.props.guesses.length) {
      const difference = Math.abs(this.props.guesses[this.props.guesses.length - 1] - this.props.correctAnswer);
      if (difference >= 50) {
        this.props.dispatch(setFeedBack('You\'re Ice Cold...'));
       } else if (difference >= 30) {
        this.props.dispatch(setFeedBack('You\'re Cold...'));
       } else if (difference >= 10) {
          this.props.dispatch(setFeedBack('You\'re Warm...'));
       } else if (difference >= 1) {
         this.props.dispatch(setFeedBack('You\'re Hot!'));
       } else {
         this.props.dispatch(setFeedBack('You got it!'));
       }
     }
  }
  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => ({
  guesses: state.guesses,
  correctAnswer: state.correctAnswer
});
export default connect(mapStateToProps)(GuessForm);
