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


