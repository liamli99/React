import { useAppContext } from './AppContext';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext();

  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>Modal Content</h3>
        
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
export default Modal;