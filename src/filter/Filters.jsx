import React from 'react';
import Select, { components } from 'react-select';
import { FiX } from 'react-icons/fi';
import './Filter.css';

const ClearIndicator = props => {
  return (
    <components.ClearIndicator {...props}>
      <span>
        <FiX />
      </span>
    </components.ClearIndicator>
  );
};

const MultiValueLabel = props => {
  return (
    <components.MultiValueLabel {...props}>
      {props.data.label}
      <span className="remove-option" onClick={() => props.removeProps.onClick()}>
        <FiX />
      </span>
    </components.MultiValueLabel>
  );
};

const Filters = ({
  minExperience,
  setMinExperience,
  companyName,
  setCompanyName,
  location,
  setLocation,
  role,
  setRole,
  minBasePay,
  setMinBasePay
}) => {

  const experienceOptions = [

    { value: '1', label: '1 years' },
    { value: '3', label: '3 years' },
    { value: '5', label: '5 years' },
    { value: '5+', label: '5+ years' }
  ];

  const locationOptions = [
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi NCR', label: 'Delhi NCR' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Bangalore', label: 'Bangalore' }
  ];

  const roleOptions = [
    { value: 'ios', label: 'iOS Developer' },
    { value: 'android', label: 'Android Developer' },
    { value: 'frontend', label: 'Frontend Developer' },
    { value: 'backend', label: 'Backend Developer' }
  ];

  const basePayOptions = [
    { value: '1', label: '$1' },
    { value: '10', label: '$10' },
    { value: '50', label: '$50' },
    { value: '110', label: '$110' },
    { value: '150', label: '$150' },
    { value: '150+', label: '$150+' }
  ];

  return (
    <div className="filters">
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={role}
          onChange={setRole}
          options={roleOptions}
          placeholder="Roles"
          components={{ ClearIndicator, MultiValueLabel }}
          isClearable
          isMulti
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={minExperience}
          onChange={setMinExperience}
          options={experienceOptions}
          placeholder="Experience"
          components={{ ClearIndicator, MultiValueLabel }}
          isClearable
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={location}
          onChange={setLocation}
          options={locationOptions}
          placeholder="Location"
          components={{ ClearIndicator, MultiValueLabel }}
          isClearable
          isMulti
        />
      </div>
      <div className="filter-item">
        <Select
          className="select-box"
          classNamePrefix="select"
          value={minBasePay}
          onChange={setMinBasePay}
          options={basePayOptions}
          placeholder="Minimum Base Pay Salary"
          components={{ ClearIndicator, MultiValueLabel }}
          isClearable
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
