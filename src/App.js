import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { selectJobListings, selectJobListingsLoading, selectJobListingsError } from './Redux/jobListing.selector';
import { fetchJobListingsFailure, fetchJobListingsStart, fetchJobListingsSuccess } from './Redux/jobListing.slice';

// Lazy load CardComponent and Filters
const CardComponent = lazy(() => import('./card/CardComponent'));
const Filters = lazy(() => import('./filter/Filters'));

function App() {
  // State variables for filtering
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState([]);
  const [role, setRole] = useState([]);
  const [minBasePay, setMinBasePay] = useState('');

  // Redux hooks
  const dispatch = useDispatch();
  const jobListings = useSelector(selectJobListings);
  const loading = useSelector(selectJobListingsLoading);
  const error = useSelector(selectJobListingsError);

  // Fetch job listings from API on component mount
  useEffect(() => {
    const fetchJobListings = async () => {
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
        dispatch(fetchJobListingsSuccess(data.jdList));
      } catch (error) {
        dispatch(fetchJobListingsFailure(error));
      }
    };

    fetchJobListings();
  }, [dispatch]);

  // Filter jobs based on user input
  const filteredJobs = jobListings.filter(job => {
    const matchExperience = !minExperience || job.minExp >= parseInt(minExperience.value);
    const matchCompanyName = !companyName || job.companyName.toLowerCase().includes(companyName.toLowerCase());
    const matchLocation = location.length === 0 || location.some(loc => job.location.toLowerCase().includes(loc.value.toLowerCase()));
    const matchRole = role.length === 0 || role.some(rl => job.jobRole.toLowerCase().includes(rl.value.toLowerCase()));
    const matchMinBasePay = !minBasePay || parseInt(job.maxJdSalary) >= parseInt(minBasePay.value);
    
    return matchExperience && matchCompanyName && matchLocation && matchRole && matchMinBasePay;
  });

  return (
    <div className="App">
      <h1>Amit Mishra</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div className='filter-container'>
          <Filters
            minExperience={minExperience}
            setMinExperience={setMinExperience}
            companyName={companyName}
            setCompanyName={setCompanyName}
            location={location}
            setLocation={setLocation}
            role={role}
            setRole={setRole}
            minBasePay={minBasePay}
            setMinBasePay={setMinBasePay}
          />
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {!loading && !error && (
          <div className="card-container">
            {filteredJobs.length === 0 ? (
              <div>No matching jobs found.</div>
            ) : (
              filteredJobs.map((job) => (
                <CardComponent key={job.jdUid} job={job} />
              ))
            )}
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
