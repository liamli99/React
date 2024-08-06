import sublinks from './data';
import { useAppContext } from './AppContext';

const NavLinks = () => {
  const { setPageId } = useAppContext();

  return (
    <div className='nav-links'>
      {sublinks.map((item) => {
        return (
          <button className='nav-link' key={item.pageId} onMouseEnter={() => setPageId(item.pageId)}>
            {item.page}
          </button>
        );
      })}
    </div>
  );
}

export default NavLinks;