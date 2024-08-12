import { Link, useRouteError } from 'react-router-dom';
import img from '../not-found.svg';

const Error = () => {
  const error = useRouteError();
  
  if (error.status === 404) {
    return (
      <div className='error-container'>
        <img src={img} />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to='/'>Back Home</Link>
      </div>
    );
  }

  return (
    <div className='error-container'>
      <h3>Something went wrong</h3>
    </div>
  );
}

export default Error;