import { configureStore } from '@reduxjs/toolkit';
import jobListingsReducer from './jobListing.slice';
export const store = configureStore({
  reducer: {
    jobListings: jobListingsReducer,
  },
});
