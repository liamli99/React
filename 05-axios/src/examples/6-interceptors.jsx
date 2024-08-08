import { useEffect } from 'react';
import authFetch from './6-interceptor';

// Try both urls and check the order of console results!
const url = 'https://www.course-api.com/react-store-productsssssss';
// const url = 'https://www.course-api.com/react-store-products';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch.get(url);
      console.log(response);
    
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
