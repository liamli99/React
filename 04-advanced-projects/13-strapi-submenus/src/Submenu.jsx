import sublinks from './data';
import { useAppContext } from './AppContext';

const Submenu = () => {
  const { pageId, setPageId } = useAppContext();
  // The initial value of pageId is null, so that currentPage doesn't exist! After we hover on the navlink, pageId will get a value, then currentPage exists!
  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const handleMouseLeave = (e) => {
    setPageId(null);
  }

  return (
    <div className={currentPage ? 'submenu show-submenu' : 'submenu'} onMouseLeave={handleMouseLeave}>
      <h5>{currentPage?.page}</h5>

      <div className='submenu-links'>
        {currentPage?.links.map((link) => {
          return (
            <a key={link.id} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Submenu;