import './App.css';
import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button className='btn btn-block' onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App
