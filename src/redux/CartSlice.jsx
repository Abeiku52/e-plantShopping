import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const plant = action.payload;
      const existingItem = state.items.find(item => item.id === plant.id);
      
      if (!existingItem) {
        state.items.push({
          id: plant.id,
          plant: plant,
          quantity: 1,
          itemTotal: plant.price
        });
      }
      
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item) {
        item.quantity += 1;
        item.itemTotal = item.quantity * item.plant.price;
      }
      
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.id === itemId);
      
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.itemTotal = item.quantity * item.plant.price;
      } else if (item && item.quantity === 1) {
        // Remove item if quantity becomes 0
        state.items = state.items.filter(item => item.id !== itemId);
      }
      
      cartSlice.caseReducers.calculateTotals(state);
    },
    
    calculateTotals: (state) => {
      state.totalItems = state.items.reduce((total, item) => total + item.quantity, 0);
      state.totalAmount = state.items.reduce((total, item) => total + item.itemTotal, 0);
      // Round to 2 decimal places to avoid floating point issues
      state.totalAmount = Math.round(state.totalAmount * 100) / 100;
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  increaseQuantity, 
  decreaseQuantity, 
  calculateTotals 
} = cartSlice.actions;

export default cartSlice.reducer;