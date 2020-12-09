import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
		cartArr: [],
	},
  reducers: {
    addProduct(state, action) {
       state.cartArr.push({...action.payload, count: 1});
    },
    incrementProduct(state, action) {
      const product = state.cartArr.find(el => el._id === action.payload)
      product.count++;
  },
    decrementProduct(state, action) {
      const product = state.cartArr.find(el => el._id === action.payload)
      if (product.count === 1) {
       state.cartArr = state.cartArr.filter(el => el._id !== action.payload) 
      } else {
        product.count--;
      }     
  },
    removeProduct(state, action) {
    state.cartArr = state.cartArr.filter(el => el._id !== action.payload);
 },
  }
})

export const { addProduct, incrementProduct, decrementProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer