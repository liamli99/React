// Use FormData API to rewrite 03-multiple-inputs.jsx!!!

const UncontrolledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // `currentTarget` is the element to which the current event handler is attached
    const formData = new FormData(e.currentTarget);
    // Convert key-value pairs to object
    // Note that key of form data is name attribute, value is value entered or selected!!! That's why we must include name attribute!
    const user = Object.fromEntries(formData);
    
    console.log(user);

    // Make the input empty after clicking the submit button
    e.currentTarget.reset();
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>FormData API</h4>
        
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-input' type='text' id='name' name='name' />
        </div>
       
        <div className='form-row'>
          <label className='form-label' htmlFor='email'>
            Email
          </label>
          <input className='form-input' type='email' id='email' name='email' />
        </div>
        
        <div className='form-row'>
          <label className='form-label' htmlFor='password'>
            Password
          </label>
          <input className='form-input' type='password' id='password' name='password' />
        </div>

        <button className='btn btn-block'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;
