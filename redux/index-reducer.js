import { combineReducers } from "redux";
import categoriesReducer from './categoriesSlice';
import requestReducer from './requestSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';

export const rootReducer = combineReducers(
	{ 
		products: productsReducer,
		categories: categoriesReducer,
		request: requestReducer,
		cart: cartReducer,		
	}
);

