import { createSlice } from '@reduxjs/toolkit';

export const jobListingsSlice = createSlice({
  name: 'jobListings',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchJobListingsStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchJobListingsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchJobListingsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJobListingsStart, fetchJobListingsSuccess, fetchJobListingsFailure } = jobListingsSlice.actions;

export default jobListingsSlice.reducer;
