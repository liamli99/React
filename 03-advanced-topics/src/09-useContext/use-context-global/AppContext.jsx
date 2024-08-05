import { createContext } from 'react';

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  return (
    <GlobalContext.Provider>
      {children}
    </GlobalContext.Provider>
  );
}

export default NavbarContext;