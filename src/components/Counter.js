import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { incrementCounter } from "../actionCreators";
import CounterButton from "./CounterButton";

class Counter extends React.Component {
  constructor(props) {
    console.log(props);

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
          {this.props.counter}
        </h2>
        <div style={{ textAlign: "center" }}>
          <CounterButton
            title="+"
            passedAction={this.props.handleOnIncrement}
          />
          <CounterButton title="Reset" passedAction={this.onReset} />
          <CounterButton title="-" passedAction={this.onDecrement} />
        </div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/countera">Counter A</Link>
        <br />
        <Link to="/counterb">Counter B</Link>
      </div>
    );
  }
}
const counterStyle = {
  fontSize: 32,
  textAlign: "center"
};

const mapStateToProps = state => ({
  counter: state.counter
});
const mapDispatchToProps = dispatch => ({
  handleOnIncrement() {
    dispatch(incrementCounter());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
