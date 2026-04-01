import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { totalAmount, totalItems } = useSelector(state => state.cart);
  
  const handleIncreaseQuantity = () => {
    dispatch(updateQuantity({ itemId: item.id, type: 'increase' }));
  };
  
  const handleDecreaseQuantity = () => {
    dispatch(updateQuantity({ itemId: item.id, type: 'decrease' }));
  };
  
  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  // Function to calculate and display total cart amount
  const calculateTotalCartAmount = () => {
    return totalAmount.toFixed(2);
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
        <p className="cart-total-amount">Cart Total: ${calculateTotalCartAmount()}</p>
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