import Counter from '../components/Counter';
import * as actions from '../actions/index';
import { connect  } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props 로 연결해준다.
const mapStateToProps = (state) => ({
	number: state.numberData.number,
	color: state.colorData.color
});

const mapDispatchToProps = (dispatch) => ({
	onIncrement: () => dispatch(actions.increment()),
	onSetColor: () => dispatch(actions.setColor(getRandomColor()))
});

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;