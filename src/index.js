import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import Home from "./components/Home";
import store from "./store";

const Root = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/counterA" component={Counter} />
          <Route path="/counterB" component={Counter} />
        </div>
      </Provider>
    </Router>
  );
};

render(<Root />, document.getElementById("app"));
