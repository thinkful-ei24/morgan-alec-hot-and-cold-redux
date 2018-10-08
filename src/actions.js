export const RESTART_GAME = 'RESTART_GAME';
export const MAKE_GUESS = 'MAKE_GUESS';
export const SHOW_TOOLTIP = 'SHOW_TOOLTIP';
export const SET_FEEDBACK = 'SET_FEEDBACK';

export const restartGame = () => ({
  type: RESTART_GAME
});

export const makeGuess = guess => ({
  type: MAKE_GUESS,
  guess
});

export const setFeedBack = feedback => ({
  type: SET_FEEDBACK,
  feedback
});

export const showTooltip = () => ({
  type: SHOW_TOOLTIP
});
