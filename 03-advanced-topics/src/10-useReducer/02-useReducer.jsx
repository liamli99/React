import { useReducer } from 'react';
import peopleReducer from './02-peopleReducer';

let currentId = 0;

const Reducer = () => {
  // const [value, setValue] = useState('');
  // const [people, setPeople] = useState([]);
  const [state, dispatch] = useReducer(peopleReducer, { value: '', people: [] });

  const addItem = () => {
    // setPeople([
    //   ...people,
    //   { id: currentId++, name: value }
    // ])
    
    dispatch({
      type: 'add',
      id: currentId++,
      name: state.value
    });
  }

  const removeItem = (id) => {
    // setPeople(people.filter((person) => person.id !== id));
    
    dispatch({
      type: 'remove',
      id
    })
  }

  const updateItem = (id) => {
    // setPeople(people.map((person) => {
    //   if (person.id === id) {
    //     return { ...person, name: person.name + '✔' };
    //   } else {
    //     return person;
    //   }
    // }));
    
    dispatch({
      type: 'update',
      id
    })
  }

  const handleChange = (e) => {
    // setValue(e.target.value)

    dispatch({
      type: 'change',
      value: e.target.value
    })
  }
  
  return (
    <div>
      <input value={state.value} onChange={handleChange} />
      <button className="btn" onClick={addItem}>Add</button>
      
      {state.people.map((person) => {
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

export default Reducer;

