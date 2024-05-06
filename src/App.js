import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobListingsFailure, fetchJobListingsStart, fetchJobListingsSuccess } from './Redux/jobListing.slice';
import './App.css';

function App() {
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
      <h1>Job Listings</h1>
    </div>
  );
}

export default App;
