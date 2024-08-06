import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

// Create a Custom Hook to use the context! 
export const useAppContext = () => useContext(AppContext);

// We will wrap App component inside AppProvider component tags in main.jsx! So that all the components will have access to user and logout!
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({ name: 'Liam' });

  const logout = () => {
    setUser(null);
  }

  return (
    <AppContext.Provider value={{ user, logout }}>
      {children}
    </AppContext.Provider>
  );
}