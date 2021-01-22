import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utils/axios.utils";

const productsSlice = createSlice({
  name: "products",
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
      state.isLoading = false;
    },
    getProductsAmount(state, action) {
      state.totalAmount = action.payload;
      state.pages = Math.ceil(action.payload / state.pageSize);
    },
  },
});

export const productsDataRequest = createAsyncThunk(
  "products/getProducts",
  (request, { dispatch }) => {
    dispatch(getProductsRequest());
    axios
      .GET(request)
      .then((res) => {
        dispatch(getProducts(res.data.products));
        dispatch(getProductsAmount(res.data.count));
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

export const {
  getProductsRequest,
  getProducts,
  getProductsAmount,
  changeActivePage,
} = productsSlice.actions;

export default productsSlice.reducer;
