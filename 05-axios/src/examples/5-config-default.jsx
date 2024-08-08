import { useEffect } from 'react';
import axios from 'axios';

const productsUrl = 'https://www.course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const ConfigDefault = () => {
  const fetchData = async () => {
    // Global axios defaults
    axios.defaults.headers['Authorization'] = 'Bearer 1234';

    try {
      // Both Request Headers include 'Authorization: Bearer 123'!
      const response1 = await axios.get(productsUrl);
      const response2 = await axios.get(randomUserUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Config Default</h2>;
};
export default ConfigDefault;
