
##Changing to class component
* notice the inline style and the declared style object
* constructor adding local state
* but now how do we change or update it ?
* good question
* react dev tools chrome
* redux dev tools
* 
```javascript
import React from "react";
import { render } from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCount: 0
    };
  }
  render() {
    return (
      <div>
        <h1 style={style.counterStyle}>
          {this.state.currentCount}
        </h1>
        <div style={{ textAlign: "center" }}>
          <button style={style.buttonStyle} onClick={this.onIncrement}>
            +
          </button>
          <button style={style.buttonStyle} onClick={this.onReset}>
            Reset
          </button>
          <button style={style.buttonStyle} onClick={this.onDecrement}>
            -
          </button>
        </div>
      </div>
    );
  }
}
const style = {
  buttonStyle: {
    backgroundColor: "#4CAF50" /* Green */,
    borderWidth: "0",
    color: "white",
    paddingTop: "16",
    paddingBottom: "16",
    paddingRight: "32",
    paddingLeft: "32",
    fontSize: "16"
  },
  counterStyle: {
    fontSize: "32",
    textAlign: "center"
  }
};

render(<Counter />, document.getElementById("app"));

```

##class methods
```javascript
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
  ```
  * this.setState takes prevState and props
  and will always return an object that reflects 'state' of that class
  * how rad is that !?!?!??!?!? right ?
  * now we can refactor out the button into our own custom button
```javascript
import React from "react";

const JtButton = props => {
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

export default JtButton;
```


