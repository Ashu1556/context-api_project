import { createContext, useState } from "react";

export const Authentication = createContext();

function CustomProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [input, setInput] = useState("");

  return (
    <Authentication.Provider value={{ isLogged, setIsLogged, input, setInput }}>
      {children}
    </Authentication.Provider>
  );
}

export default CustomProvider;
