import { useEffect } from 'react';
import authFetch from './4-instance';
import axios from 'axios';

// const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const Instance = () => {
  const fetchData = async () => {
    try {
      // Right Click -> Inspect -> Network, compare the following 2 requests! Instance is isolated from axios!

      // The Name is 'react-store-products'
      // The Request URL is https://www.course-api.com/react-store-products
      // The Request Headers include 'Authorization: Bearer 123'!
      const response1 = await authFetch.get('/react-store-products');
      // The Name is 'api'
      // The Request URL is https://randomuser.me/api
      // There is no 'Authorization' in Request Headers!
      const response2 = await axios.get(randomUserUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Axios Instance</h2>;
};

export default Instance;
