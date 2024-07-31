import { useEffect, useState, useRef } from 'react';

// We can also use useRef to make Effect setup code **not run** when the component mounts!

const UseRefAdvanced = () => {
  const [value, setValue] = useState(0);
  const isMounted = useRef(false);


  // useEffect(() => {
  //   // This Effect setup code runs when (1) the component mounts (2) the value has changed
  //   // However, we can use useRef to let this code only run when the value has changed!
  //   console.log(value);
  // }, [value]);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    // This Effect setup code only runs when the value has changed!
    console.log(value);
  }, [value])
  

  return (
    <div>
      <button className='btn' onClick={() => setValue(value + 1)}>
        Clicked {value} times
      </button>
    </div>
  );
};

export default UseRefAdvanced;
