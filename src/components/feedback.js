import React from 'react';
import { connect } from 'react-redux';
import './feedback.css';

export class Feedback extends React.Component {
  /** 
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message 
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
 
 get feedback() {
   if (this.props.guesses.length) {
     const difference = Math.abs(this.props.guesses[this.props.guesses.length - 1] - this.props.correctAnswer);
     if (difference >= 50) {
       return 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        return 'You\'re Cold...';
      } else if (difference >= 10) {
        return 'You\'re Warm.';
      } else if (difference >= 1) {
        return 'You\'re Hot!';
      } else {
        return 'You got it!';
      }
    }
    else return 'Make your guess!';
  }
  
  render() {
    const key = this.props.guessCount;
    let guessAgain;
    if (key !== 0) {
      guessAgain = <span className="visuallyhidden">Guess again!</span>;
    }
    return (
      <h2 
        key={key}
        id="feedback"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
      >
        {this.feedback} {guessAgain}
      </h2>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Feedback); 