import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Avoid adding empty string
    if (!name) {
      toast.warn('Please provide a value!');
      return;
    }
    addItem(name);

    // Make input empty
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>

      <div className='form-control'>
        <input className='form-input' type='text' value={name} onChange={(e) => setName(e.target.value)} />
        <button className='btn'>Add Item</button>
      </div>
    </form>
  );
}

export default Form;