import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Counter from "./Counter";
import Home from "./Home";

const Root = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/firstCounter" component={Counter} />
        <Route path="/secondCounter" component={Counter} />
      </div>
    </Router>
  );
};

render(<Root />, document.getElementById("app"));
