import React from 'react';
import './CardComponent.css';
import Description from './Description';

const CardComponent = ({ job }) => {
  return (
    <div className="card-body">
      <div className="card-header">
        <div className="posted-info">
          <p>⏳ Posted 11 days ago</p>
        </div>
      </div>
      <div className="card-content">
        <div className="company-details">
          <div className="company-logo">
            <img src={job.logoUrl} alt="Company Logo" />
          </div>
          <div className="info-container">
            <h3>{job.companyName}</h3>
            <h4>{job.jobRole}</h4>
            {/* capitalize first letter of job location */}
            <p>{job.location.charAt(0).toUpperCase() + job.location.slice(1)}</p>
          </div>
        </div>
        {/* if salaryCurrencyCode is USD then show $ symbol otherwise show inr symbol */}
        <p className="card-salary">Estimated Salary: {job.salaryCurrencyCode === 'USD' ? `$${job.maxJdSalary}`: `${job.maxJdSalary}₹`} <span aria-label="Offered salary range" role="img">✅</span></p>
         <div className='job-description'>
            {/* render description component */}
         <Description jobId={job.jdUid} />
        </div> 
        <div className="minimum-exp">
          <h1>Minimum Experience</h1>
          {/* if minExp is null show static message  */}
          <p>{job.minExp ? `${job.minExp} Years` : 'Min Experience not Available'}</p>
        </div>
      </div>
        <div className="buttons">
          <a href={job.jdLink} className="button-link"><button className="apply-btn">⚡ Easy Apply</button></a>
          <button className="referral-btn">
  <div className="referral-content">
    <div className="referral-avatars">
      <img src='https://th.bing.com/th?id=OIP.fOv6ouhkS2VpfREGfiAbjgAAAA&w=275&h=227&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt="Avatar" className="blurred-avatar" />
      <img src='https://th.bing.com/th/id/OIP.aMrXppKRuvRyJoicXx3uxgHaHa?w=203&h=202&c=7&r=0&o=5&pid=1.7' alt="Avatar" className="blurred-avatar" />
    </div>
    <p className="unlock-text">Unlock referral asks</p>
  </div>
</button>

        </div>
      </div>
  );
};

export default CardComponent;
