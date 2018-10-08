import React from 'react';
import { connect } from 'react-redux';
import './feedback.css';

class Feedback extends React.Component {
  /**
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */

  render() {
    const key = this.props.guesses.length;
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
        {this.props.feedback} {guessAgain}
      </h2>
    );
  }
}

const mapStateToProps = state => ({
  guesses: state.guesses,
  correctAnswer: state.correctAnswer,
  feedback: state.feedback
});

export default connect(mapStateToProps)(Feedback);
