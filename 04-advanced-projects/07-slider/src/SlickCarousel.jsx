import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';

// An Alternative way to create carousel using react-slick package!!! Compare this component with Carousel.jsx!!!

const SlickCarousel = () => {
  // https://react-slick.neostack.com/docs/api#settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    // Auto play setup!
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
  };

  return (
    <section className='slick-container'>
      <Slider {...settings}>
        {list.map((person) => {
          return (
            <article key={person.id}>
              <img className='person-img' src={person.image} alt={person.name} />
              <h5 className='name'>{person.name}</h5>
              <p className='title'>{person.title}</p>
              <p className='text'>{person.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
      </Slider>
    </section>
  );
}

export default SlickCarousel;