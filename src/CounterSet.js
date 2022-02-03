import React from "react";
import { connect } from "react-redux";
import * as action from "./action";
import "./styles.css";

class CounterSet extends React.Component {
  render() {
    return (
      <div className="CounterSet">
        {this.props.countFromStore}
        <button onClick={this.props.incrementHandler}>+</button>
        <button onClick={this.props.decrementHandler}>-</button>
        <button onClick={this.props.oddHandler}>Odd</button>
        <button onClick={this.props.asyncHandler}>Async</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  countFromStore: state.counterReducer.counterValue
});

const mapDispatchToProps = (dispatch) => ({
  incrementHandler: () => dispatch(action.incAction()),
  decrementHandler: () => dispatch(action.decAction()),
  oddHandler: () => dispatch(action.oddAction()),
  asyncHandler: () => setTimeout(() => dispatch(action.asyncAction()), 1000)
});

const ConnectedCounterSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSet);

export { ConnectedCounterSet as default, CounterSet };
