import { combineReducers } from "redux";
import categories from "./categories.reducer.js";

export const rootReducer = combineReducers(
	{ 
		categories,
	}
);

