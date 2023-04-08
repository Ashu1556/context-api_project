import React, { useContext } from "react";
import "./Nav.css";

import { Authentication } from "./context";

const Nav = () => {
  const { setIsLogged, input } = useContext(Authentication);

  const handleclik1 = () => {
    setIsLogged(false);
  };
  return (
    <div>
      <div className="header">
        <div className="header1">
          <h2>React Component</h2>
        </div>
        <div className="header2">
          <p>Home</p>
          <p>About</p>
          <p>Contact us</p>
          <button onClick={handleclik1}>Log Out</button>
          <span style={{ color: "yellow", fontSize: "20px" }}>{input}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
