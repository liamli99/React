import './App.css'
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from './data';

function App() {
  const [index, setIndex] = useState(0);

  // Since there are 4 data, index can only be 0, 1, 2, 3!
  const { name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    // Solution 1
    // if (number > reviews.length - 1) {
    //   return 0;
    // } else if (number < 0) {
    //   return reviews.length - 1;
    // } else {
    //   return number
    // }

    // Solution 2, modulo operator!
    return (number + reviews.length) % reviews.length;
  }

  const nextPerson = () => {
    // Solution 1: pass next state value
    setIndex(checkNumber(index + 1));

    // Solution 2: pass updater function
    // setIndex((currentIndex) => {
    //   const newIndex = currentIndex + 1;
    //   return checkNumber(newIndex);
    // });
  }

  const prevPerson = () => {
    // Solution 1: pass next state value
    setIndex(checkNumber(index - 1));

    // Solution 2: pass updater function
    // setIndex((currentIndex) => {
    //   const newIndex = currentIndex - 1;
    //   return checkNumber(newIndex);
    // });
  }

  const randomPerson = () => {
    // `Math.random()` is greater than or equal to 0 and less than 1, so that `Math.random() * reviews.length` is greater than or equal to 0 and less than 4, so that `randomNumber` can only be 0, 1, 2, 3! 
    let randomNumber = Math.floor(Math.random() * reviews.length);

    // Avoid the situation where the randomNumber is the same as the current index!
    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber));
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

        <button className='btn btn-hipster' onClick={randomPerson}>Generate Random Person</button>
      </article>
    </main>
  );
}

export default App
