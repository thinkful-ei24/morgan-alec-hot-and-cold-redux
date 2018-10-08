import React from 'react';

export default function AuralStatus(props) {
  // generateAuralUpdate() {
  //   const { guesses, feedback } = this.state;
  //
  //   // If there's not exactly 1 guess, we want to
  //   // pluralize the nouns in this aural update.
  //   const pluralize = guesses.length !== 1;
  //
  //   let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
  //
  //   if (guesses.length > 0) {
  //     auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
  //   }
  //
  //
  //   this.setState({ auralStatus });
  // }


  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}
