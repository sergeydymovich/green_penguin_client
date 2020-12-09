import { createSlice } from '@reduxjs/toolkit'

const requestSlice = createSlice({
  name: 'request',
  initialState: {
		category: "",
		subCategory: "",
		brands: [],
		sortBy: "",
		filterWord: "",
		activePage: 0,
	},
  reducers: {
		selectCategory(state, action) {
			return { 
				category: action.payload,
				subCategory: "",
				brands: [],
				sortBy: "",
				filterWord: state.filterWord,
				activePage: 0,
			} 
		},
		selectSubCategory(state, action) {
		state.subCategory = action.payload;
		state.activePage = 0;
	},
		selectBrand(state, action) {
			const brandExists = state.brands.find(brand => action.payload === brand);
				if (brandExists) {
				state.brands = state.brands.filter(brand => brand !== action.payload)		 
				} else {
				state.brands.push(action.payload)
				}
				state.activePage = 0;
		},
		selectFilter(state, action) {
			action.payload === state.sortBy ? state.sortBy = "" : state.sortBy = action.payload	
		},
		changeFilterWord(state, action) {
			return { 
				category: "",
				subCategory: "",
				brands: [],
				sortBy: "",
				filterWord: action.payload,
				activePage: 0,
			}
		},
		changeActivePage(state, action) {
			state.activePage = action.payload;
	 },
  }
})

export const { selectCategory, selectSubCategory, selectBrand, selectFilter, changeFilterWord, changeActivePage } = requestSlice.actions;

export default requestSlice.reducer