import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Form from './Form';
import Items from './Items';

// Revised from 04-advanced-projects/10-grocery-bud

function App() {
  return (
    <section className='section-center'>
      <Form />
      <Items />
      {/* It doesn't matter where we place it! */}
      <ToastContainer position='top-center' />
    </section>
  );
}

export default App
