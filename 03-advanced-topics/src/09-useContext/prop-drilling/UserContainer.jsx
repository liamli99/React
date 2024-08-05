const UserContainer = ({ user, logout }) => {
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <button className='btn' onClick={logout}>Logout</button>
        </>
      ) : <p>Please Login</p>}
    </div>
  );
}

export default UserContainer;