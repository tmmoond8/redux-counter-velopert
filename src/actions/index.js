import * as types from './ActionTypes';

export const createCounter = (color) => ({
	type: types.CREATE_COUNTER,
	color
});

export const removeCounter = () => ({
	type: types.REMOVE_COUNTER
});

export const increment = (index) => ({
	type: types.INCREMENT,
	index
});

export const decrement = (index) => ({
	type: types.DECREMENT,
	index
});

export const setColor = (index, color) => ({
	type: types.SET_COLOR,
	index,
	color
});