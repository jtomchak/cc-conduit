import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/firstCounter">Number 1</Link>
        </li>
        <li>
          <Link to="/secondCounter">Number Dos</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
