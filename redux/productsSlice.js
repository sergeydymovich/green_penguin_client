import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
		productsArr: [],
		isLoading: false,
		pageSize: 12,
		totalAmount: 0,
		pages: 0,
	},
  reducers: {
		getProductsRequest(state, action) {
			state.isLoading = true;
			state.productsArr = [];
	 },
    getProducts(state, action) {
			state.productsArr = action.payload;
			state.isLoading = false
		},
		getProductsAmount(state, action) {
			state.totalAmount = action.payload
			state.pages = Math.ceil(action.payload/state.pageSize)
		},
  }
})

export const { getProductsRequest, getProducts, getProductsAmount, changeActivePage } = productsSlice.actions;

export default productsSlice.reducer;