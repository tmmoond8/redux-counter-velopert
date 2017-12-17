import React, { Component } from 'react';
import CounterListContainer from './containers/CounterListContainer';
import Buttons from './components/Buttons';
import { getRandomColor} from './utils/index';

import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
  
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
        <Buttons onCreate={onCreate} onRemove={onRemove}/>
        <CounterListContainer/>
      </div>
    );
  }
}
const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch(actions.createCounter(getRandomColor())),
  onRemove: () => dispatch(actions.removeCounter())
})

export default connect(null, mapToDispatch)(App);