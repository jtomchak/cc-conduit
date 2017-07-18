import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Store from "./store";
import Counter from "./components/Counter";
import Home from "./components/Home";

const Root = () => {
  return (
    <Router>
      <Provider store={Store}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/countera" component={Counter} />
          <Route path="/counterb" component={Counter} />
        </div>
      </Provider>
    </Router>
  );
};

render(<Root />, document.getElementById("app"));
