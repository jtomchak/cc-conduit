import React from "react";
import { render } from "react-dom";

//the parameters passed in would be props
const Counter = ({ count, onIncrement, onDecrement, onReset }) => {
  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.count}
        </h1>
        <button onClick={this.props.onIncrement}>+</button>
        <button onClick={this.props.onReset}>Reset</button>
        <button onClick={this.props.onDecrement}>-</button>
      </div>
    );
  }
}

render(<Counter />, document.getElementById("app"));
