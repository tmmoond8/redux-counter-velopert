import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
  return (
    <div
      className="Counter"
      onClick={onIncrement}
      onContextMenu={(e) => {
        e.preventDefault();
        onDecrement();
      }}
      onDoubleClick={onSetColor}
      style={{'backgroundColor': color}}
      >
      {number}
    </div>
  );
};

Counter.propTypes = {
  number: PropTypes.number,
  color: PropTypes.string,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onSetColor: PropTypes.func
};

Counter.defaultProps = {
  number: 0,
  color: 'black',
  onIncrement: () => console.wern('onIncrement not defined'),
  onDecrement: () => console.wern('onDecrement not defined'),
  onSetColor: () => console.wern('onSetColor not defined')
}

export default Counter;