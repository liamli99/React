import './App.css';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useAppContext } from './AppContext';

function App() {
  const { state } = useAppContext();

  // This code is necessary when the initial value of state.cart is not from data.js, instead, it is from fetching the data because fetching can cause the loading!
  if (state.loading) {
    return (
      <main>
        <div className='loading'></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;

