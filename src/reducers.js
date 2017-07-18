import { INCREMENT_COUNTER } from "./actions";

const DEFAULT_STATE = {
  counter: 0
};

// new reducer above rootReducer
const incrementCounter = (state, action) => {
  return Object.assign({}, state, { counter: state.counter + 1 });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return incrementCounter(state, action);
    default:
      return state;
  }
};

export default rootReducer;
