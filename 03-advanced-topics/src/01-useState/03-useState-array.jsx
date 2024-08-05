import { useState } from "react";

// We should define it outside the component to retain its value between re-renders!
let currentId = 0;

const UseStateArray = () => {
  const [value, setValue] = useState('');
  const [people, setPeople] = useState([]);

  const addItem = () => {
    setPeople([
      ...people,
      { id: currentId++, name: value }
    ])
  }

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  }

  const updateItem = (id) => {
    setPeople(people.map((person) => {
      if (person.id === id) {
        return { ...person, name: person.name + '✔' };
      } else {
        return person;
      }
    }));
  }
  
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} />
      <button className="btn" onClick={addItem}>Add</button>
      
      {people.map((person) => {
        return (
          <div className="item" key={person.id}>
            <h4>{person.name}</h4>
            <button className="btn" onClick={() => removeItem(person.id)}>remove</button>
            <button className="btn" onClick={() => updateItem(person.id)}>update</button>
          </div>
        );
      })}
    </div>
  );
};

export default UseStateArray;
