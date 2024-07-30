import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('liam');
  const [user, setUser] = useState({ name: 'liam' });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      
      {text && <h2>{name}</h2>}
      {!text && <h2>{name}</h2>}

      {user && <SomeComponent name={user.name} />}

      <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
      {user ? <h2>Hi {user.name}</h2> : <h2>Please login</h2>}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return <h2>{name}</h2>
}

export default ShortCircuitExamples;
