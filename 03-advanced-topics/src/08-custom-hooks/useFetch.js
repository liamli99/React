import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
     
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { isLoading, isError, data };
}

export default useFetch;