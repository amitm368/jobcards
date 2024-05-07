import React from 'react';
import Select from 'react-select';
import './Filter.css';

const Filters = ({
  minExperience,
  setMinExperience,
  companyName,
  setCompanyName,
  location,
  setLocation,
  remote,
  setRemote,
  techStack,
  setTechStack,
  role,
  setRole,
  minBasePay,
  setMinBasePay
}) => {

  const experienceOptions = [
    { value: '', label: 'Min Experience' },
    { value: '0-1', label: '0-1 years' },
    { value: '1-3', label: '1-3 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '5+', label: '5+ years' }
  ];

  const locationOptions = [
    { value: '', label: 'Location' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi ncr', label: 'Delhi ncr' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Bangalore', label: 'Bangalore' }
  ];

  const roleOptions = [
    { value: '', label: 'Roles' },
    { value: 'ios', label: 'ios Developer' },
    { value: 'android', label: 'android Developer' },
    { value: 'frontend', label: 'frontend Developer' },
    { value: 'backend', label: 'backend Developer' }
  ];

  const basePayOptions = [
    { value: '', label: '0' },
    { value: '10', label: '$10' },
    { value: '50', label: '$50' },
    { value: '110', label: '$110' },
    { value: '150', label: '150' },
    { value: '200', label: '150+' }
  ];

  return (
    <div className="filters">
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={minExperience}
          onChange={(selectedOption) => setMinExperience(selectedOption)}
          options={experienceOptions}
          placeholder="Min Experience"
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={location}
          onChange={(selectedOption) => setLocation(selectedOption)}
          options={locationOptions}
          placeholder="Location"
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={role}
          onChange={(selectedOption) => setRole(selectedOption)}
          options={roleOptions}
          placeholder="Roles"
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={remote}
          onChange={(selectedOption) => setRemote(selectedOption.value)}
          options={[
            { value: 'Remote', label: 'Remote' },
            { value: 'Hybrid', label: 'Hybrid' },
            { value: 'office', label: 'in-Office' }
          ]}
          placeholder="Remote"
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={minBasePay}
          onChange={(selectedOption) => setMinBasePay(selectedOption)}
          options={basePayOptions}
          placeholder="Minimum Base Pay Salary"
        />
      </div>
      <div className="filter-item">
        <input
          className="input-box"
          type="text"
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
      </div>
    </div>
  );
};

export default Filters;
