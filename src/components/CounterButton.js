import React from "react";

const CounterButton = props => {
  return (
    <button style={buttonStyle} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

const buttonStyle = {
  backgroundColor: "#4CAF50" /* Green */,
  borderWidth: 0,
  color: "white",
  paddingTop: 16,
  paddingBottom: 16,
  paddingRight: 32,
  paddingLeft: 32,
  fontSize: 16
};

export default CounterButton;
