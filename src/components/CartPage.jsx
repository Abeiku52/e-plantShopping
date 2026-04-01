import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';

const CartPage = () => {
  const { items, totalItems, totalAmount } = useSelector(state => state.cart);
  
  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available soon.');
  };

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some beautiful plants to your cart!</p>
          <Link to="/plants" className="continue-shopping-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart ({totalItems} items)</h1>
      
      <div className="cart-items">
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-total">
        <div className="total-amount">
          Total Amount: ${totalAmount.toFixed(2)}
        </div>
        <div className="cart-actions">
          <button className="checkout-btn" onClick={handleCheckout}>
            Checkout
          </button>
          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;