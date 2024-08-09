import { useState } from 'react';
import { useCreateTask } from './reactQueryCustomHooks';

const Form = () => {
  const [title, setTitle] = useState('');

  const { createTask, isPending } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Server will check empty value!
    // if (!title) {
    //   toast.warn('Please provide a value!');
    //   return;
    // }
    
    createTask(title, {
      // This is an additional code to the onSuccess of useCreateTask in reactQueryCustomHooks.js!
      // We include it here because we have no access to setTitle in that file!
      onSuccess: () => {
        // Make input empty
        setTitle('');
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>

      <div className='form-control'>
        <input className='form-input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        {/* If the creating process is not done, we should not add new item! */}
        <button className='btn' disabled={isPending}>Add Item</button>
      </div>
    </form>
  );
}

export default Form;