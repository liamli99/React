import { useState, useEffect } from 'react';

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  }

  // This function only runs when the component mounts (added to the screen)!
  useEffect(() => {
    handleClick();
  }, [])

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={handleClick}>
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
