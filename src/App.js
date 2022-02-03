import React from "react";
import "./styles.css";
import CounterSet from "./CounterSet";
import TodoList from "./TodoList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterSet />
        <TodoList />
      </div>
    );
  }
}
export default App;
