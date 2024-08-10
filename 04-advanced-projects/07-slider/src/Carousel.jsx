import { useState, useEffect } from 'react';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Similar to 03-reviews, this project also implements carousel, but the animation and implementation is different! I would prefer 03-reviews because it is simpler!

const Carousel = () => {
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);

  // See 03-reviews
  const prevSlide = () => {
    setCurrentPersonIndex((currentPersonIndex - 1 + list.length) % list.length);
  }

  const nextSlide = () => {
    setCurrentPersonIndex((currentPersonIndex + 1) % list.length);
  }

  // Auto play
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);

    // Cleanup function
    return () => {
      clearInterval(sliderId);
    }
  }, [currentPersonIndex])

  return (
    <section className='slider-container'>
      {list.map((person, index) => {
        return (
          // 'slide' class must be absolute!!!
          <article className='slide' key={person.id} style={{ 
            transform: `translateX(${100 * (index - currentPersonIndex)}%)`,
            opacity: index === currentPersonIndex ? 1 : 0,
            visibility: index === currentPersonIndex ? 'visible' : 'hidden'
          }}>

            <img className='person-img' src={person.image} alt={person.name} />
            <h5 className='name'>{person.name}</h5>
            <p className='title'>{person.title}</p>
            <p className='text'>{person.quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        );
      })}

      <button className='prev' onClick={prevSlide}><FiChevronLeft /></button>
      <button className='next' onClick={nextSlide}><FiChevronRight /></button>
    </section>
  );
}

export default Carousel;