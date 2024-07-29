import { useState, useEffect } from 'react';

const MultipleEffects = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // There can be multiple useEffects

  // This function runs when the component mounts on the initial render and also if value has changed
  useEffect(() => {
    console.log('hello from first useEffect');
  }, [value]);

  // This function runs when the component mounts on the initial render and also if secondValue has changed
  useEffect(() => {
    console.log('hello from second useEffect');
  }, [secondValue]);

  // This function runs when the component mounts on the initial render and also if either value or secondValue has changed
  useEffect(() => {
    console.log('hello from either first or second useEffect');
  }, [value, secondValue]);
  
  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>second value : {secondValue}</h1>
      <button className='btn' onClick={() => setSecondValue(secondValue + 1)}>
        second value
      </button>
    </div>
  );
};
export default MultipleEffects;
