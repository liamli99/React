import './App.css'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

function App() {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex(index + 1);
  }

  const prevPerson = () => {
    setIndex(index - 1);
  }

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'><FaQuoteRight /></span>
        </div>

        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}><FaChevronLeft /></button>
          <button className='next-btn' onClick={nextPerson}><FaChevronRight /></button>
        </div>
      </article>
    </main>
  );
}

export default App
