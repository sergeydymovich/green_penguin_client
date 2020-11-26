import { combineReducers } from "redux";
import categories from "./categories.reducer.js";
import products from "./products.reducer.js";

export const rootReducer = combineReducers(
	{ 
		categories,
		products,
	}
);

