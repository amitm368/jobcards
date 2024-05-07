export const selectJobListings = state => state.jobListings.data;
export const selectJobListingsLoading = state => state.jobListings.loading;
export const selectJobListingsError = state => state.jobListings.error;
export const selectJobDetails = (jobId) => (state) => {
    return state.jobListings.data.find((job) => job.jdUid === jobId.jobId);
};
