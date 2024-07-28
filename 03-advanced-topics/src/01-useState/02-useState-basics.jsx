import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // Replace the state variable 'count' with a new value 'count + 1'
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick}>increase</button>
    </div>
  );
};

export default UseStateBasics;
