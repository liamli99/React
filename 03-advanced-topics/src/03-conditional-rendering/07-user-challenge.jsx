import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'Liam' });
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <div>
      {user ? 
        <div>
          <h1>Hi {user.name}</h1>
          <button className="btn" onClick={logout}>logout</button>
        </div>
        :
        <div>
          <h1>Please login</h1>
          <button className="btn" onClick={login}>login</button>
        </div>  
      }
    </div>
  );
};

export default UserChallenge;
