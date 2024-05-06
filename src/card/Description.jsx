import React, { useState, useRef, useEffect } from 'react';
import './Description.css';

const Description = ({ aboutCompany, aboutRole }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [description, setDescription] = useState('')
  const popupRef = useRef(null);

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
    const combinedDescription =
      aboutCompany + ' ' + aboutRole.map((item) => item.content).join(' ');
    setIsOverflowing(combinedDescription.split(' ').length > 60);
    setDescription(combinedDescription.split(' ').slice(0, 60).join(' '));
  }, [aboutCompany, aboutRole]);

  return (
    <div className="description">
      {showPopup ? (
        <div className="popup">
          <div className="popup-content" ref={popupRef}>
            <h3 className="popup-heading">Job Description</h3>
            <div className="popup-description">
              <h3>About Company:</h3>
              <p>{aboutCompany}</p>
              <h3>About Role:</h3>
              {aboutRole.map((item, index) => (
                <div key={index}>
                  <h4>{item.heading}</h4>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="about-company">
            <h3>About Company:</h3>
            <p>{aboutCompany}</p>
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
      ): (<button className='view-job-btn' onClick={togglePopup}>
        View Job
        </button>)}
    </div>
  );
};

export default Description;
