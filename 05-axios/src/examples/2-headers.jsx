import { useState } from 'react';
import axios from 'axios';

// Documentation: https://icanhazdadjoke.com/api
const url = 'https://icanhazdadjoke.com/';

const Headers = () => {
  const [joke, setJoke] = useState('random dad joke');

  const fetchDadJoke = async () => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Accept: 'application/json'
        }
      });
      // console.log(data.joke);
      setJoke(data.joke);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  );
};
export default Headers;
