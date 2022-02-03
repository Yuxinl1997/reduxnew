import React from "react";
import { connect } from "react-redux";
import * as action from "./action";
import "./styles.css";

class TodoList extends React.Component {
  handlerChange = () => {
    this.props.input && this.props.addItem(this.props.input);
  };
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.props.changeInput(e.target.value)}
          value={this.props.input}
        />
        <button onClick={this.handlerChange}>Add</button>
        {this.props.list.map((item, index) => {
          return (
            <div key={index}>
              <li>{item}</li>{" "}
              <button onClick={() => this.props.deleteItem(index)}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  input: state.todolistReducer.input,
  list: state.todolistReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  changeInput: (input) => dispatch(action.changeInput(input)),
  addItem: (input) => {
    console.log(input);
    dispatch(action.addItem(input));
  },
  deleteItem: (index) => dispatch(action.deleteItem(index))
});

const ConnectedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { ConnectedTodoList as default, TodoList };
