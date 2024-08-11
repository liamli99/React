const itemReducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART': {
      return {
        ...state,
        cart: new Map()
      }
    }

    case 'REMOVE': {
      // The following code is wrong! Because in React, we should not mutate the state variable!!!!! 
      // state.cart.delete(action.id);

      const newCart = new Map(state.cart);
      newCart.delete(action.id);

      return {
        ...state,
        cart: newCart
      }
    }

    case 'INCREASE': {
      const newCart = new Map(state.cart);
      newCart.get(action.id).amount += 1;

      return {
        ...state,
        cart: newCart
      }
    }

    case 'DECREASE': {
      const newCart = new Map(state.cart);

      if (newCart.get(action.id).amount > 1) {
        newCart.get(action.id).amount -= 1;
      } else {
        newCart.delete(action.id);
      }

      return {
        ...state,
        cart: newCart
      }
    }

    // The following codes are necessary when the initial value of state.cart is from fetching the data!
    
    case 'LOADING': {
      return {
        ...state,
        loading: true
      }
    }
    case 'DISPLAY': {
      return {
        loading: false,
        cart: new Map(action.data.map((item) => [item.id, item])) 
      }
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

export default itemReducer;