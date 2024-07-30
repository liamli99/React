import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  const url = 'https://api.github.com/users';

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        // List of objects
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <section>
      <ul className='users'>
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchData;
