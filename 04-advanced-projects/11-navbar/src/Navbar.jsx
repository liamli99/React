import { FaBars } from 'react-icons/fa';
import { useState, useRef } from "react";
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  }

  // Note that we only change the links container's height!!!
  const linksContainerStyle = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px`: '0px'
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img className='logo' src={logo} alt='logo' />
          <button className='nav-toggle' onClick={toggleLinks}><FaBars /></button>
        </div>

        <div className='links-container' ref={linksContainerRef} style={linksContainerStyle}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icon'>
          {social.map((item) => {
            return (
              <li key={item.id}>
                <a href={item.url}>{item.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;