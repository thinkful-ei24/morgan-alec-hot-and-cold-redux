import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
  const { guessCount } = props;
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback guessCount={guessCount} />
      <GuessForm />
    </section>
  );
}
