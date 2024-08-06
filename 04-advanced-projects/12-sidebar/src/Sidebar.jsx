import { useAppContext } from './AppContext';
import { FaTimes } from 'react-icons/fa';
import logo from './logo.svg';
import { social, links } from './data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useAppContext();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img className='logo' src={logo} />
        
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>

      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='social-links'>
        {social.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.url}>
                {item.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;