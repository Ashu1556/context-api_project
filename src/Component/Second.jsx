import { useContext } from "react";
import myContext from "./Context";
import Third from "./Third";

const Second = () => {
  let mydata = useContext(myContext);
  return (
    <div>
      <span>Second data: {mydata}</span>
      <Third />
    </div>
  );
};

export default Second;
