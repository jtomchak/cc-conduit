import React from "react";

const CounterButton = props => {
  return (
    <button style={style} onClick={props.passedAction}>
      {props.title}
    </button>
  );
};

const style = {
  backgroundColor: "#4CAF50" /* Green */,
  borderWidth: 0,
  color: "white",
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 32,
  paddingLeft: 32,
  fontSize: 28
};

export default CounterButton;
