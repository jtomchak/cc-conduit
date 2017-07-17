import React from "react";

var MyTitle = props => {
  const style = { color: props.color };
  return (
    <div>
      <h1 style={style}>
        {props.title}
      </h1>
    </div>
  );
};

export default MyTitle;
