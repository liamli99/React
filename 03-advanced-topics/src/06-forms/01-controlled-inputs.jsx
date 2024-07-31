import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    // A <form> submit event (onSubmit), which happens when a button inside of it is clicked, will reload the whole page by default. We should prevent this unwanted default behaivor!
    e.preventDefault();
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      
      <div className='form-row'>
        <label className='form-label' htmlFor='name'>
          Name
        </label>
        <input className='form-input' type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      
      <div className='form-row'>
        <label className='form-label' htmlFor='email'>
          Email
        </label>
        <input className='form-input' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      
      <button className='btn btn-block'>
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
