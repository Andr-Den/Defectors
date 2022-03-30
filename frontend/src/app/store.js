import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './reducers/companiesSlice';

export const store = configureStore({
  reducer: {
    companies: companiesReducer,
  },
});
