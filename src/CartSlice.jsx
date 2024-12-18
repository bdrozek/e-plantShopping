import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const { name, image, cost, quantity } = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    increaseQuantity(state, action) {
      const { name, quantity } = action.payload;
      const itemforIncrease = state.items.find(item => item.name === name);
      if (itemforIncrease) {
        itemforIncrease.quantity += 1;
      }
    },
  decreaseQuantity(state, action) {
      const { name, quantity } = action.payload;
      const itemforDecrease = state.items.find(item => item.name === name);
      if (itemforDecrease && itemforDecrease.quantity > 1) {
        itemforDecrease.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, increaseQuantity, decreaseQuantity } = CartSlice.actions;

export default CartSlice.reducer;
