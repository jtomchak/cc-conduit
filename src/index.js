import React from "react";
import { render } from "react-dom";

//making jsx
//double{{}} expression -> js object  <-

var MyTitle = function(props) {
  const styleColor = { color: props.color };
  return (
    <div>
      <h1 style={{ color: props.color }}>
        {props.title}
      </h1>
    </div>
  );
};
//TODO: Create MyDescription component using props.color, props.size and props.description
// use that component after each MyTitle to add some descriptive details

//composit component
var SecondSuperSweet = function() {
  return (
    <div>
      <MyTitle title="Monster Town" color="burlywood" />
      <MyTitle title="Pizza Bagels" color="greenyellow" />
      <MyTitle title="Docker Pants" color="peru" />
      <MyTitle title=".NET Yeah ok" color="yellowgreen" />
    </div>
  );
};

render(<SecondSuperSweet />, document.getElementById("app"));
