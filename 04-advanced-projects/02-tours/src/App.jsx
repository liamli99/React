import './App.css';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = 'https://www.course-api.com/react-tours-project';

  // Note that we shouldn't define this function in Tour.jsx, because it doesn't have access to tours and setTours!
  // So we have to pass this function from App.jsx to Tours.jsx to Tour.jsx as props!!!
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id != id));
  }

  const fetchTours = async () => {
    // The initial value of isLoading is true, after the component mounts, isLoading is false!
    // So that if we remove all the tours, isLoading is still false! At this time, if we click the Refresh button to call fetchTours function, there is no loading before fetching the tours! So that we have to include this line of code here!
    setIsloading(true);

    try {
      const response = await fetch(url);
      // 'tours' is an array of objects
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    
    setIsloading(false);
  }

  useEffect(() => {
    fetchTours();
  }, []);

  // Loading
  // If we want to test loading, we can right click -> Inspect -> Network -> Fast 3G!
  if (isLoading) {
    return <main><Loading /></main>;
  }
  
  // This happens when we remove all the tours
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours</h2>
          <button className='btn' onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    );
  }

  // Success
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
