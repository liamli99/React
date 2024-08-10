import { FaBars } from 'react-icons/fa';
import { useAppContext } from './AppContext';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useAppContext();
  
  // onMouseOver: triggers when the mouse enters the element and its children
  // onMouseEnter: triggers when the mouse enters the element
  // https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_mouseenter_mouseover
  const handleMouseOver = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  }

  return (
    <nav onMouseOver={handleMouseOver}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>

        <NavLinks />
      </div>
    </nav>
  );
}

export default Navbar;