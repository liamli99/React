import { useContext } from 'react';
import NavbarContext from './NavbarContext';

const UserContainer = () => {
  // It is an object with user and logout properties
  const contextValue = useContext(NavbarContext);

  return (
    <div className='user-container'>
      {contextValue.user ? (
        <>
          <p>Hello, {contextValue.user.name}</p>
          <button className='btn' onClick={contextValue.logout}>Logout</button>
        </>
      ) : <p>Please Login</p>}
    </div>
  );
}

export default UserContainer;