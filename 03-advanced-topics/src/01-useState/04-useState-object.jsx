import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books'
  });

  const displayPerson = () => {
    // setPerson({
    //   name: 'liam',
    //   age: 25,
    //   hobby: 'travel'
    // });

    // Spread syntax
    setPerson({
      ...person,
      age: 27,
      hobby: 'go home'
    });
  }
  
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        Show Liam
      </button>
    </>

  );
};

export default UseStateObject;
