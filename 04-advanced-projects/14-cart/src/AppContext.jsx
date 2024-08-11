import { createContext, useContext, useReducer, useEffect } from 'react';
import itemReducer from './itemReducer';
import cartItems from './data';
import { getTotal } from './utils';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  // Since Array is less efficient for searching and updating, we will use Map for this project!!!
  // In data.js, cartItems is an Array of Objects, we should convert it into a Map! Each key-value pair of the Map corresponds to the Array item (Object). The key is the id property of the Object, the value is the Object itself!
  // 'state' is an object which has 2 properties: loading and cart! Each property is a state variable!
  
  // const [state, dispatch] = useReducer(itemReducer, { 
  //   loading: false, 
  //   cart: new Map(cartItems.map((item) => [item.id, item])) 
  // });

  // Alternatively, the initial value of state.cart is not from data.js, instead, it is from fetching the data!
  const [state, dispatch] = useReducer(itemReducer, {
    loading: false,
    cart: new Map()
  })

  const { totalNumber, totalMoney } = getTotal(state.cart);

  const clearCart = () => {
    dispatch({
      type: 'CLEAR_CART'
    })
  }

  const remove = (id) => {
    dispatch({
      type: 'REMOVE',
      id
    })
  }

  const increase = (id) => {
    dispatch({
      type: 'INCREASE',
      id
    })
  }

  const decrease = (id) => {
    dispatch({
      type: 'DECREASE',
      id
    })
  }

  // The following codes are necessary when the initial value of state.cart is from fetching the data!
  
  const fetchData = async () => {
    dispatch({
      type: 'LOADING'
    })

    const response = await fetch('https://www.course-api.com/react-useReducer-cart-project');
    // 'data' is exactly the same as cartItems in data.js!
    const data = await response.json();

    dispatch({
      type: 'DISPLAY',
      data
    })
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AppContext.Provider value={{ state, clearCart, remove, increase, decrease, totalNumber, totalMoney }}>
      {children}
    </AppContext.Provider>
  );
}