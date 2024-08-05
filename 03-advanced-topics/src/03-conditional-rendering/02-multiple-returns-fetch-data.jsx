import { useEffect, useState } from 'react';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  // When fetching data, there are usually 3 states: (1) loading (2) error (3) success
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const url = 'https://api.github.com/users/QuincyLarson';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        
        // Unlike Axios, by default, the fetch API does not consider HTTP status codes in the 4xx or 5xx range to be errors. Instead, it considers these status codes to be a successful request! So that try catch block cannot catch all the errors! For example, if the url is 'https://api.github.com/users/QuincyLarsonssss', then this is 404, but fetch cannot catch this error!!!
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const user = await response.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        // console.log(error);
      }
      
      setIsLoading(false);
    }
    
    fetchData();
  }, []);

  // Loading. The order matters!!! It must be placed before error and success!
  // If we want to test loading, we can right click -> Inspect -> Network -> Fast 3G!
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  // Error
  if (isError) {
    return <h2>Error...</h2>
  }

  // If we want to destructure user, we can only do it here after error!!! Because here we know user does exist!

  // Success
  return (
    <div>
      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h5>{user.login}</h5>
        <a href={user.html_url}>profile</a>
      </div>
    </div>
  );
};
export default MultipleReturnsFetchData;
