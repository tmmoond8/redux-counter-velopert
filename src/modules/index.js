import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// Action type
const CREATE_COUNTER = 'counter/CREATE';
const REMOVE_COUNTER = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

export const createCounter = createAction(CREATE_COUNTER);  // color
export const removeCounter = createAction(REMOVE_COUNTER);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR);  // index, color

const initialState = Map({
  counters: List([
    Map({
      color: 'black',
      number: 0
    })
  ])
});

export default handleActions({
  [CREATE_COUNTER]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.push(
      Map({
        color: action.payload,
        number: 0
      })
    ))
  },
  [REMOVE_COUNTER]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.pop())
  },
  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number') + 1)
    ));
  },
  [DECREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      (counter) => counter.set('number', counter.get('number') - 1)
    ));
  },
  [SET_COLOR]: (state, action) => {
    console.dir(action);
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload.index,
      (counter) => counter.set('color', action.payload.color)
    ));
  },
}, initialState);