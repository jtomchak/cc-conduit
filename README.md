
##Changing to class component
* notice the inline style and the declared style object
* constructor adding local state
* but now how do we change or update it ?
* good question
* react dev tools chrome
* redux dev tools

You can convert a functional component to a class in five steps:
1. Create an ES6 class with the same name that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration. 
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


##Routing
* let's create a router
* bc we all love routing
* move our stuff around a bit for clarity
```javascript
//index.js
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Counter from "./Counter";

const Root = () => {
  return (
    <Switch>
      <Router exact pattern="/" component={Counter} />
      <Router exact pattern="/firstCounter" component={Counter} />
      <Router exact pattern="/secondCounter" component={Counter} />
    </Switch>
  );
};

render(<Counter />, document.getElementById("app"));
```

* let's add some routes
```html
<div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/firstCounter">Number 1</Link></li>
        <li><Link to="/secondCounter">Number 2</Link></li>
      </ul>
```
```javascript
fancyTitle = () => {
    return this.title.substring(1);
  };
this.title = props.match.path;
```

* looking good, but do you see a problem ?
* so let's review
* we've got components, which are .....
* Routes, that are just compenents
* able to pass data via props
* Functional and Class compenents
* React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
* 


