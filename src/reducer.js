import { RESTART_GAME, SHOW_TOOLTIP, MAKE_GUESS } from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default (state = initialState, action) => {
  switch(action.type) {
    // case RESTART_GAME:
    //   return {
    //   };
    // case SHOW_TOOLTIP:
    //   return {}
    case MAKE_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    default:
      return state;
  }
};