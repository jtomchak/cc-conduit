import React from "react";
import { render } from "react-dom";

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

render(<Counter />, document.getElementById("app"));
