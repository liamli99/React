import CartItem from './CartItem';
import { useAppContext } from './AppContext';

const CartContainer = () => {
  const { state, clearCart, totalMoney } = useAppContext();
  // 'cart' is an Object, we want to convert it into an Array! Each Array item corresponds to the key-value pair of the Map! The Array item is an Array of 2 items, the first item is the Map key, the second item is the Map value!
  const cartArray = Array.from(state.cart.entries());
  // console.log(cartArray);

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          return <CartItem key={cartItem[0]} {...cartItem[1]} />;
        })}
      </div>

      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalMoney.toFixed(2)}</span>
          </h5>
        </div>
        
        <button className='btn btn-hipster' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
