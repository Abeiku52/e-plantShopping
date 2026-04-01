import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };
  
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };
  
  const handleRemoveItem = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img 
        src={item.plant.image} 
        alt={item.plant.name} 
        className="cart-item-image" 
      />
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.plant.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.plant.price}</p>
        <div className="quantity-controls">
          <button 
            className="quantity-btn" 
            onClick={handleDecreaseQuantity}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="quantity">{item.quantity}</span>
          <button 
            className="quantity-btn" 
            onClick={handleIncreaseQuantity}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <p className="item-total">Total: ${item.itemTotal.toFixed(2)}</p>
      </div>
      <button 
        className="delete-btn" 
        onClick={handleRemoveItem}
        aria-label={`Remove ${item.plant.name} from cart`}
      >
        Delete
      </button>
    </div>
  );
};

export default CartItem;