import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

// 초기 상태를 정의
const initialState = Map({
	counters: List([
		Map({
			color: 'black',
			number: 0
		}),
		Map({
			color: 'black',
			number: 0
		})
	])
})

function counter(state = initialState, action) {
	// 레퍼런스 생성
	const counters = state.get('counters');

	switch(action.type) {
		// 카운터를 새로 추가
		case types.CREATE_COUNTER:
			return state.set('counters', counters.push(
				Map({ color: action.color, number: 0})
			))
		case types.REMOVE_COUNTER:
			return state.set('counters', counters.pop());
		case types.INCREMENT:
			return state.set('counters', counters.update(
				action.index,
				(counter) => counter.set('number', counter.get('number') + 1)
			));
		case types.DECREMENT:
			return state.set('counters', counters.update(
				action.index,
				(counter) => counter.set('number', counter.get('number') - 1)
			));
		case types.SET_COLOR:
			return state.set('counters', counters.update(
				action.index,
				(counter) => counter.set('color', action.color)
			));
		default:
			return state;
	}
};

export default counter