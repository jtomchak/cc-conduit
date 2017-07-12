import React from "react";
import { render } from "react-dom";

const ce = React.createElement;

//passing props
var myTitle = function(props) {
  return ce(
    "div",
    null,
    ce("h1", { style: { color: props.color } }, props.title)
  );
};

var secondSuperSweet = function() {
  return ce(
    "div",
    null,
    ce(myTitle, { title: "Monster Town", color: "red" }),
    ce(myTitle, { title: "Pizza Bagels", color: "peru" }),
    ce(myTitle, { title: "Docker Pants", color: "greenyellow" })
  );
};

render(ce(secondSuperSweet), document.getElementById("app"));
