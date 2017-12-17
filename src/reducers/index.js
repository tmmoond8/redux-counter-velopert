import * as types from '../actions/ActionTypes';

// 초기 상태를 정의
const initialState = {
	counters: [
		{
			color: 'black',
			number: 0
		}
	]
}

function counter(state = initialState, action) {
	// 레퍼런스 생성
	const { counters } = state;

	switch(action.type) {
		// 카운터를 새로 추가
		case types.CREATE_COUNTER:
		console.log('create counter');
			return {
				counters: [
					...counters,
					{
						color: action.color,
						number: 0
					}
				]
			};
		case types.REMOVE_COUNTER:
		console.log('remove counter');
			return {
				counters: counters.slice(0, counters.length - 1)
			};
		case types.INCREMENT:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						number: counters[action.index].number + 1
					},
					...counters.slice(action.index + 1, counters.length)
				]
			};
		
		case types.DECREMENT:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						number: counters[action.index].number - 1
					},
					...counters.slice(action.index + 1, counters.length)
				]
			};

		
		case types.SET_COLOR:
			return {
				counters: [
					...counters.slice(0, action.index),
					{
						...counters[action.index],
						color: action.color
					},
					...counters.slice(action.index + 1, counters.length)
				]
			};
		default:
			return state;
	}
};

export default counter