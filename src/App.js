import "./App.css";
import { useContext } from "react";
import { Authentication } from "./Component/Context-api3/context";
import Nav from "./Component/Context-api3/Nav";
import Home from "./Component/Context-api3/Home";
import Login from "./Component/Context-api3/Login";

function App() {
  const { isLogged } = useContext(Authentication);
  return (
    <div>
      {isLogged ? (
        <div>
          {" "}
          <Nav /> <Home />{" "}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
