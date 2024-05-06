import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobListings, selectJobListingsLoading, selectJobListingsError } from './Redux/jobListing.selector';
import { fetchJobListingsFailure, fetchJobListingsStart, fetchJobListingsSuccess } from './Redux/jobListing.slice';
import './App.css';

// Lazy load CardComponent and Filters
const CardComponent = lazy(() => import('./card/CardComponent'));
function App() {
  const jobListings = useSelector(selectJobListings);
  const loading = useSelector(selectJobListingsLoading);
  const error = useSelector(selectJobListingsError);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchJobListings = async () => {
      //set loading state
      dispatch(fetchJobListingsStart());
      try {
        const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            limit: 12,
            offset: 0
          })
        });
        const data = await response.json();
        //set data
        dispatch(fetchJobListingsSuccess(data.jdList));
      } catch (error) {
        //set error state
        dispatch(fetchJobListingsFailure(error));
      }
    };
// call function to fetch data in initial render
    fetchJobListings();
  }, [dispatch]);
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="card-container">
            {jobListings.map((job) => (
              <CardComponent key={job.jdUid} job={job} />
            ))}
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
