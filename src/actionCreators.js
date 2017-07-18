import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "./actions";

//
export function incrementCounter() {
  return { type: INCREMENT_COUNTER, payload: {} };
}

export function decrementCounter() {
  return { type: DECREMENT_COUNTER, payload: {} };
}

export function resetCounter() {
  return { type: RESET_COUNTER, payload: {} };
}
