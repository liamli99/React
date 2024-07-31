import { useState } from "react";

let currentId = 5;

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'john' },
    { id: 2, name: 'peter' },
    { id: 3, name: 'susan' },
    { id: 4, name: 'anna' },
  ]);

  // The <form> submit event (onSubmit) happens when a button inside of it is clicked!
  const handleSubmit = (e) => {
    e.preventDefault();

    // If no value, early return
    if (!name) return;

    // Add user
    setUsers([
      ...users,
      { id: currentId++, name }
    ]);

    // After clicking the submit button, the input will be empty!
    // This is because we set 'value: {name}' in input to make it controlled, so that updating the name state to an empty string can also make the input empty!
    setName('');
  }

  // Remove user
  const removeUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        
        <div className='form-row'>
          <label className='form-label' htmlFor='name'>
            Name
          </label>
          <input className='form-input' type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      </div>

        <button className='btn btn-block'>
          Submit
        </button>
      </form>
      
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
