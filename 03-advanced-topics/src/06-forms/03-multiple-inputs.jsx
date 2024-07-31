import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    // Dynamic Object Property: Use brackets to convert string (variable or expression) to JS object property
    setUser({
      ...user,
      // Override
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
    
    // Make the input empty after clicking the submit button
    setUser({
      name: '',
      email: '',
      password: ''
    });
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-input' type='text' id='name' value={user.name} onChange={handleChange} />
        </div>
       
        <div className='form-row'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-input' type='email' id='email' value={user.email} onChange={handleChange} />
        </div>
        
        <div className='form-row'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input className='form-input' type='password' id='password' value={user.password} onChange={handleChange} />
        </div>

        <button className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
