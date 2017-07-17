import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import JtButton from "./JtButton";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.match.path;
    this.state = {
      currentCount: 0,
      title: ""
    };
  }

  fancyTitle = () => {
    return this.title.substring(1);
  };

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
        <h1>
          {this.fancyTitle()}
        </h1>
        <h2 style={counterStyle}>
          {this.state.currentCount}
        </h2>
        <div style={{ textAlign: "center" }}>
          <JtButton title="+" onClick={this.onIncrement} />
          <JtButton title="Reset" onClick={this.onReset} />
          <JtButton title="-" onClick={this.onDecrement} />
        </div>
        <Link to="/firstCounter">Number 1</Link>
        <br />
        <Link to="/secondCounter">Number Dos</Link>
      </div>
    );
  }
}
const counterStyle = {
  fontSize: 32,
  textAlign: "center"
};

export default Counter;
