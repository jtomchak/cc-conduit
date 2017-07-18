import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CounterButton from "./CounterButton";
import {
  incrementCounter,
  decrementCounter,
  resetCounter
} from "../actionCreators";

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
            onClick={this.props.handleOnIncrementCounter}
          />
          <CounterButton title="Reset" onClick={this.props.handleOnReset} />
          <CounterButton
            title="-"
            onClick={this.props.handleOnDecrementCounter}
          />
        </div>
        <Link to="/counterA">Counter A</Link>
        <br />
        <Link to="/counterB">Counter B</Link>
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
  handleOnIncrementCounter() {
    dispatch(incrementCounter());
  },
  handleOnDecrementCounter() {
    dispatch(decrementCounter());
  },
  handleOnReset() {
    dispatch(resetCounter());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
