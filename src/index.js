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
var MyDescription = function(props) {
  return (
    <div>
      <p style={{ fontSize: props.size, color: props.color }}>
        {props.details}
      </p>
    </div>
  );
};

//composit component
var SecondSuperSweet = function() {
  return (
    <div>
      <MyTitle title="Monster Town" color="burlywood" />
      <MyDescription details="It's a nice place" color="burlywood" size={18} />
      <MyTitle title="Pizza Bagels" color="greenyellow" />
      <MyDescription
        details="Melt your face off"
        color="greenyellow"
        size={18}
      />
      <MyTitle title="Docker Pants" color="peru" />
      <MyDescription details="Looking Good" color="peru" size={18} />
      <MyTitle title=".NET Yeah ok" color="yellowgreen" />
      <MyDescription
        details="I mean, if you have to"
        color="yellowgreen"
        size={18}
      />
    </div>
  );
};

render(<SecondSuperSweet />, document.getElementById("app"));
