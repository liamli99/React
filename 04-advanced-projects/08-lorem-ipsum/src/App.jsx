import './App.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import data from './data';

function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input value is always string!!!
    const amount = Number(count);
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h4>Lorem Ipsum</h4>
      
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs:</label>
        <input type='number' min='1' max='8' id='amount' value={count} onChange={(e) => setCount(e.target.value)} />
        <button className='btn'>Generate</button>
      </form>

      <article className='lorem-text'>
        {text.map((item) => {
          return (
            <p key={nanoid()}>{item}</p>
          );
        })}
      </article>
    </section>
  );
}

export default App
