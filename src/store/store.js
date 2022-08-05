import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../reducers/filtersReducer';

export const store = configureStore({
	reducer: {
		filters: filtersReducer,
	},
});
