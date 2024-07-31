import { useState } from 'react';

const OtherInputs = () => {
  const [isChecked, setIsChecked] = useState(false);

  const items = ['item1', 'item2', 'item3'];
  const [selectItem, setSelectItem] = useState('item1');

  const handleCheckbox = (e) => {
    console.log(e.target.checked);
    setIsChecked(e.target.checked);
  }

  const handleSelect = (e) => {
    console.log(e.target.value);
    setSelectItem(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsChecked(false);
    setSelectItem('item1');
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
       
        {/* Checkbox Input */}
        <div className='form-row'>
          <label className='form-label' htmlFor='shipping'> Checkbox </label>
          {/* For checkbox input, we set checked property instead of value property to make the input controlled! */}
          <input className='form-input' type='checkbox' id='shipping' checked={isChecked} onChange={handleCheckbox} />
        </div>
        
        {/* Select */}
        <div className='form-row'>
          <label className='form-label' htmlFor='framework'>
            Items
          </label>
          {/* This is similar to text input */}
          <select id='framework' value={selectItem} onChange={handleSelect}>
            {items.map((item) => {
              return (
                <option key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        
        <button className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
