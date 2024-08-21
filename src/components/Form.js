import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    team: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.firstName) tempErrors.firstName = 'First Name is required';
    if (!formData.lastName) tempErrors.lastName = 'Last Name is required';
    if (!formData.birthDate) tempErrors.birthDate = 'Date is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    if (!formData.phoneNumber) tempErrors.phoneNumber = 'Phone Number is required';
    if (!formData.gender) tempErrors.gender = 'Gender is required';
    if (!formData.startTime) tempErrors.startTime = 'Start Time is required';
    if (!formData.endTime) tempErrors.endTime = 'End Time is required';
    if (!formData.jobPosition) tempErrors.jobPosition = 'Job Position is required';
    if (!formData.team) tempErrors.team = 'Team is required';
    if (!formData.designation) tempErrors.designation = 'Designation is required';
    if (!formData.billableHours || formData.billableHours <= 0)
      tempErrors.billableHours = 'Billable Hours is required and must be a positive number';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form Submitted Successfully!');
      console.log(formData);
      // Submit form data to server or further processing
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName ? 'error' : ''}
        />
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
      </div>

      <div className="form-group">
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={errors.lastName ? 'error' : ''}
        />
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>

      <div className="form-group">
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          className={errors.birthDate ? 'error' : ''}
        />
        {errors.birthDate && <span className="error-message">{errors.birthDate}</span>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={errors.phoneNumber ? 'error' : ''}
        />
        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
      </div>

      <div className="form-group">
        <label>Select Gender</label>
        <select name="gender" value={formData.gender} onChange={handleChange} className={errors.gender ? 'error' : ''}>
          <option value="">Choose Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <span className="error-message">{errors.gender}</span>}
      </div>

      <div className="form-group">
        <label>Start Time</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          className={errors.startTime ? 'error' : ''}
        />
        {errors.startTime && <span className="error-message">{errors.startTime}</span>}
      </div>

      <div className="form-group">
        <label>End Time</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className={errors.endTime ? 'error' : ''}
        />
        {errors.endTime && <span className="error-message">{errors.endTime}</span>}
      </div>

      <div className="form-group">
        <label>Job Position</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          className={errors.jobPosition ? 'error' : ''}
        />
        {errors.jobPosition && <span className="error-message">{errors.jobPosition}</span>}
      </div>

      <div className="form-group">
        <label>Select Teams</label>
        <select name="team" value={formData.team} onChange={handleChange} className={errors.team ? 'error' : ''}>
          <option value="">Select</option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
        </select>
        {errors.team && <span className="error-message">{errors.team}</span>}
      </div>

      <div className="form-group">
        <label>Select Designation</label>
        <select name="designation" value={formData.designation} onChange={handleChange} className={errors.designation ? 'error' : ''}>
          <option value="">Select</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
        </select>
        {errors.designation && <span className="error-message">{errors.designation}</span>}
      </div>

      <div className="form-group">
        <label>Billable Hours</label>
        <input
          type="number"
          name="billableHours"
          value={formData.billableHours}
          onChange={handleChange}
          className={errors.billableHours ? 'error' : ''}
        />
        {errors.billableHours && <span className="error-message">{errors.billableHours}</span>}
      </div>

      <div className="form-group">
        <label>Is Billable?</label>
        <input
          type="checkbox"
          name="isBillable"
          checked={formData.isBillable}
          onChange={handleChange}
        />
      </div>
        <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
