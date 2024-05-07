import React, { useState, useRef, useEffect } from 'react';
import './Description.css';
import { useSelector } from 'react-redux';
import { selectJobDetails } from '../Redux/jobListing.selector';

const Description = (jobId) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [description, setDescription] = useState('');
  const popupRef = useRef(null);
  const aboutRole = useSelector(selectJobDetails(jobId));

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
      setIsOverflowing(aboutRole.jobDetailsFromCompany.split(' ').length > 120);
      setDescription(aboutRole.jobDetailsFromCompany.split(' ').slice(0, 120).join(' '));
  }, [aboutRole]);

  return (
    <div className="description">
      {showPopup ? (
        <div className="popup">
          <div className="popup-content" ref={popupRef}>
            <h3 className="popup-heading">Job Description</h3>
            <div className="popup-description">
                
                  <h3>About Role:</h3>
                  <p>{description}</p>
                
              
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="about-company">
            <h3>About Company:</h3>
            {/* Assuming aboutCompany is not in the store */}
            <p></p>
          </div>
          <div className="about-role">
            <h3>About Role:</h3>
            <p>{description}</p>
          </div>
        </>
      )}
      {isOverflowing ? (
        <button className="view-more-btn" onClick={togglePopup}>
          View More
        </button>
      ) : (
        <button className='view-job-btn' onClick={togglePopup}>
          View Job
        </button>
      )}
    </div>
  );
};

export default Description;
