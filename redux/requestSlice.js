import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  category: "",
  subCategory: "",
  brands: [],
  sortBy: "",
  sortOrder: "",
  filterWord: "",
  activePage: 0,
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    selectCategory(state, action) {
      return {
        ...initialState,
        category: action.payload,
        filterWord: state.filterWord,
      };
    },
    selectSubCategory(state, action) {
      state.subCategory = action.payload;
      state.activePage = 0;
    },
    selectBrand(state, action) {
      const brandExists = state.brands.find(
        (brand) => action.payload === brand
      );
      if (brandExists) {
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      } else {
        state.brands.push(action.payload);
      }
      state.activePage = 0;
    },
    changeSortBy(state, action) {
      state.sortBy = action.payload;
    },
    changeSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    changeFilterWord(state, action) {
      return {
        ...initialState,
        filterWord: action.payload,
      };
    },
    changeActivePage(state, action) {
      state.activePage = action.payload;
    },
    resetFilters(state, action) {
      return initialState;
    },
  },
});

export const {
  selectCategory,
  selectSubCategory,
  selectBrand,
  changeSortBy,
  changeSortOrder,
  changeFilterWord,
  changeActivePage,
  resetFilters,
} = requestSlice.actions;

export default requestSlice.reducer;
