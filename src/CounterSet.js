import React from "react";
import { connect } from "react-redux";
import { incAction, decAction, oddAction, asyncAction } from "./action";
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
  incrementHandler: () => dispatch(incAction()),
  decrementHandler: () => dispatch(decAction()),
  oddHandler: () => dispatch(oddAction()),
  asyncHandler: () => setTimeout(() => dispatch(asyncAction()), 1000)
});

const ConnectedCounterSet = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterSet);

export { ConnectedCounterSet as default, CounterSet };
