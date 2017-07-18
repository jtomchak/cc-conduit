
## Challenge
[![Edit Create Component](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/oN68z4ZY?fontsize=16)

## Changing to class component
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

## class methods
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


## Routing
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

## Redux 3 Principles (state management)
* It's not scary, but that doesn't mean it's easy.
1. The whole state of your app as a **SINGLE** Javascript Object **STATE**
  * Minimal representation of the data in your app. 
2. The State tree is redundant or immutable. Change must be done through an **ACTION** 
  * Minimal representation of the change in your app. 
  * action object, required to have a type property that is a string, bc it can be serialized. 
  * apps will have different types of apps, todo's addCounter, removeCounter
  * scales to med / large apps
  * components unaware of how it happens, just **DISPATCHES** an action. 
  * just a plain object that describe, what changed in the application. 
3. State mutations function take prevState and action being dispatched and return a new State object, this is called the **REDUCER**
  * shallow clone, makes it fast
  * **MUST** be a pure function (ask me about pure functions!)

 ## Adding Redux
 1. Gonna need to init a store
 2. If you haven't already stuff your components into a folder, and create a reducers folder. 
 3. Update router with switch and add 404 page. 
 4. **A** reducer needs to handle init state, with will get called with no state or 'undefined' when redux initalizes it. **B** handle actions it doesn't know, default to switch. 
 ```javascript
 const DEFAULT_STATE = {
  counter: 0
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
```
5. Actions will be like
```javascript
{
  type: String,
  payload: <any>,
}
```
6. Create store.js 
* this is where middleware will go
```javascript
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;
```

7. Add reducer for rootReducer
```javascript
import { INCREMENT_COUNTER } from "./actions";

const DEFAULT_STATE = {
  counter: 0
};

// new reducer above rootReducer
const incrementCounter = (state, action) => {
  return Object.assign({}, state, { counter: state.counter + 1 });
};

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return incrementCounter(state, action);
    default:
      return state;
  }
};

export default rootReducer;
```

8. Wire up in app entry point with provider
* <Provider store={Store}>
* import { Provider } from "react-redux" 

9. Now, yes now, we can 'dispatch our action'
* -> that will call our reducer
* -> that will catch on reducer switch
* -> that will take state and defined action
* -> that will then return new state

10. Counter
* import connect
* mapStateToProps
```javascript
const mapStateToProps = state => ({
  counter: state.counter
});

export default connect(mapStateToProps)(Counter)
```
* Connect is a function that allows your component to tap into the Redux store's state. The mapStateToProps allows you to select which pieces of state are passed into your component which helps keep thing clean. At the bottom we export a connected version of the component. Now if you reload the page the input doesn't work for the same reason it didn't with React previously: we are never sending the typed text to Redux to update its state. Let's do that now.

* Dear god are we there yet ?? close
* Wiring up the last bit
```javascript
// at top
import { incrementCounter } from './actionCreators'
// at the bottom
const mapDispatchToProps = (dispatch: Function) => ({
  handleOnIncrement() {
    dispatch(incrementCounter());
  }
});
```


