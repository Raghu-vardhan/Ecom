import React from 'react';
import { useCart } from '../context';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart-page page-width">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
       <div className='cart-items'>
         <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt=''/>
              <h3>{item.company}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div> 
       </div>
      )}
    </div>
  );
};

export default Cart;
