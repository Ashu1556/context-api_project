import React, { useContext } from "react";
import myContext from "./Context";

const Third = () => {
  let data1 = useContext(myContext);
  return (
    <div>
      <span>Third data: {data1}</span>
    </div>
  );
};

export default Third;
