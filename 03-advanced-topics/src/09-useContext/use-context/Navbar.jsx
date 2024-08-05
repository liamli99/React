import { useState } from 'react';
import NavLinks from "./NavLinks";
import NavbarContext from './NavbarContext';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Liam' });

  const logout = () => {
    setUser(null);
  }
  
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className='navbar'>
        <h5>Context API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;