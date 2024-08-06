import { useAppContext } from './AppContext';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  // Destructuring
  const { openSidebar, openModal } = useAppContext();
  
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>

      <button className='btn' onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
}

export default Home;