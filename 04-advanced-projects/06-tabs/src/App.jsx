import './App.css';
import { useState, useEffect } from 'react';
import BtnContainer from './BtnContainer';
import JobsInfo from './JobsInfo';

function App() {
  const [isLoading, setIsloading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const url = 'https://www.course-api.com/react-tabs-project';

  // Reference: 02-tours
  const fetchJobs = async () => {
    // No need to include `setIsloading(true);`
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
    } catch (error) {
      console.log(error);
    }
    
    setIsloading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (isLoading) {
    return (
      <section className='jobs-center'>
        {/* The corresponding CSS code has loading animation! */}
        <div className='loading'></div>
      </section>
    );
  }

  return (
    <section className='jobs-center'>
      {/* Compare with 05-menu! */}
      <BtnContainer jobs={jobs} index={index} setIndex={setIndex} />
      <JobsInfo jobs={jobs} index={index} />
    </section>
  );
}

export default App
