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
          <Link to="/counterA">Counter A</Link>
        </li>
        <li>
          <Link to="/counterB">Counter B</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;