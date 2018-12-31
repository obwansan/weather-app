import { FETCH_WEATHER } from '../actions/index';

// The state passed to a reducer function is just the state it is
// responsible for / manipulates.
// 
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state ]; // ES6 syntax. Concats state array after action.payload.data
  }
  return state;
}
