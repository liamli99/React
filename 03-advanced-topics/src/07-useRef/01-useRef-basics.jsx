import { useEffect, useRef } from 'react';

// The most common use case of refs is to manipulate DOM elements

const UseRefBasics = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputRef.current);
    console.log(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-input' type='text' id='name' ref={inputRef} />
        </div>
        
        <button className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UseRefBasics;
