import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({index, number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
			className="Counter"
			index={index}
      onClick={ () => onIncrement(index)}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement(index);
      }}
      onDoubleClick={ () => onSetColor(index)}
      style={{'backgroundColor': color}}
      >
      {number}
    </div>
  );
};

Counter.propTypes = {
	index: PropTypes.number,
  number: PropTypes.number,
  color: PropTypes.string,
	onIncrement: PropTypes.func,
	onDecrement: PropTypes.func,
	onSetColor: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
	color: 'black',
	index: 1,
	onIncrement: () => console.warn('onIncrement not defined'),
	onDecrement: () => console.warn('onDecrement not defined'),
	onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;