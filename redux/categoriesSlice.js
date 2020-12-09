import { createSlice } from '@reduxjs/toolkit'

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
		categoriesArr: [],
	},
  reducers: {
    getCategories(state, action) {
       state.categoriesArr = action.payload.categories;
		},
  }
})

export const { getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer