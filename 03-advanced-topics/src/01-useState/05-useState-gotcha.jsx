import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    // Replace the state variable 'count' with a new value 'count + 2'
    setCount(count + 2);
    // Replace the state variable 'count' with a new value 'count + 1'
    setCount(count + 1);
    // Increase the state variable 'count' in relation to its latest state!!!
    setCount(n => n + 1);

    // 'count' is fixed within a render!
    alert(count);
  }

  // Try clicking Increase2 button multiple times within 3s, compare passing next state value and updater function!
  // If we want to update the same state variable multiple times before the next render, instead of passing the next state value, we should pass an updater function!
  const handleClick2 = () => {
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 3000);

    setTimeout(() => {
      setCount(n => n + 1);
    }, 3000);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button className="btn" onClick={handleClick1}>Increase1</button>
      <button className="btn" onClick={handleClick2}>Increase2</button>
    </div>
  );
};

export default UseStateGotcha;
