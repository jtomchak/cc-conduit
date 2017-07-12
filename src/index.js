import React from "react";
import ReactDOM from "react-dom";

let ce = React.createElement;

var myTitle = function() {
  return ce("div", null, ce("h1", null, "This is pretty freakin' sweet"));
};

var secondSuperSweet = function() {
  return ce(
    "div",
    null,
    ce(myTitle, null),
    ce(myTitle, null),
    ce(myTitle, null)
  );
};

ReactDOM.render(ce(secondSuperSweet), document.getElementById("app"));
