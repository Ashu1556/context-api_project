import React, { useState } from "react";
import myContext from "../Context";
import Second from "../Second";

const First = () => {
  const [data, setData] = useState("Geekster ");
  return (
    <div>
      <span>First Data: {data}</span>
      <button onClick={() => setData("ashutosh")}>Change Data</button>
      <myContext.Provider value={data}>
        <Second />
      </myContext.Provider>
    </div>
  );
};

export default First;
