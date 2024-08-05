import { createContext, useState } from 'react';

const GlobalContext = createContext();

// We will wrap App component inside AppContext component tags in main.jsx! So that all the components will have access to user and logout!
const AppContext = ({ children }) => {
  const [user, setUser] = useState({ name: 'Liam' });

  const logout = () => {
    setUser(null);
  }

  return (
    <GlobalContext.Provider value={{ user, logout }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;