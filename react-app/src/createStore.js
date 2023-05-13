import { createStore } from 'redux';
const reducer = (state, action) => {
  console.log("WORKING");
  return state;
}
const store = createStore(reducer)
store.subscribe(() => {
    console.log('current state', store.getState());
  });