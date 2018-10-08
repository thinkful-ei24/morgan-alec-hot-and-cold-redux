import { RESTART_GAME, SHOW_TOOLTIP, MAKE_GUESS, SET_FEEDBACK} from './actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default (state = initialState, action) => {
  switch(action.type) {
    case RESTART_GAME:
      return {
        ...initialState,
        correctAnswer: Math.floor(Math.random() * 100) + 1
      };
    // case SHOW_TOOLTIP:
    //   return {}
    case MAKE_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    case SET_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback
      };
    default:
      return state;
  }
};
