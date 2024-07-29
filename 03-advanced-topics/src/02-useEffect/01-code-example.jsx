import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  }

  // For the initial render, this function executes, then the state variable is updated which triggers a re-render, then this function executes again... Infinite loop!
  handleClick();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={handleClick}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
