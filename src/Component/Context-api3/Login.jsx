import React, { useState } from "react";
import "./login.css";
import { useContext } from "react";
import { Authentication } from "./context";

const Login = () => {
  const [state, setState] = useState(" ");

  const { setIsLogged, setInput, input } = useContext(Authentication);

  const handleclick = () => {
    if (
      (input === "Ashu" && state === "ashu123") ||
      (input === "admin" && state === "admin123")
    ) {
      setIsLogged(true);
    } else {
      alert("please enter valid username and password");
    }
  };
  return (
    <div className="login">
      <div className="login_forum">
        <div>
          <h3>Login Form</h3>
        </div>
        <div>
          <input
            type="text"
            placeholder=" user name"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleclick}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
