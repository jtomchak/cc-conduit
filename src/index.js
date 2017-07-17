import React from "react";
import { render } from "react-dom";
import JtButton from "./JtButton";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }

  onIncrement = () => {
    this.setState((prevState, props) => {
      return { currentCount: prevState.currentCount + 1 };
    });
  };

  onDecrement = () => {
    this.setState((prevState, props) => {
      return { currentCount: prevState.currentCount - 1 };
    });
  };

  onReset = () => {
    this.setState((prevState, props) => {
      return { currentCount: 0 };
    });
  };

  render() {
    return (
      <div>
        <h1 style={counterStyle}>
          {this.state.currentCount}
        </h1>
        <div style={{ textAlign: "center" }}>
          <JtButton title="+" onClick={this.onIncrement} />
          <JtButton title="Reset" onClick={this.onReset} />
          <JtButton title="-" onClick={this.onDecrement} />
        </div>
      </div>
    );
  }
}
const counterStyle = {
  fontSize: 32,
  textAlign: "center"
};

render(<Counter />, document.getElementById("app"));
