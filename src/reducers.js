import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "./actions";

const DEFAULT_STATE = {
  counter: 0
};

//new reducer for increment PURE!!
const incrementCounter = (state, action) => {
  return Object.assign({}, state, { counter: state.counter + 1 });
};

const decrementCounter = (state, action) => {
  return { ...state, counter: state.counter - 1 };
};

const resetCounter = (state, action) => {
  return { ...state, counter: 0 };
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return incrementCounter(state, action);
    case DECREMENT_COUNTER:
      return decrementCounter(state, action);
    case RESET_COUNTER:
      return resetCounter(state, action);
    default:
      return state;
  }
};

export default rootReducer;
