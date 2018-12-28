// The state passed to a reducer function is just the state it is
// responsible for / manipulates.
export default function(state = null, action) {
  console.log('Action received', action);

  return state;
}
