import React, { useState } from "react";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    certificationNumber: '',
    certificationType: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="registration-page">
      <h2 className="page-title">First Responder Registration</h2>
      
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password *</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificationNumber">Certification Number *</label>
          <input
            type="text"
            id="certificationNumber"
            name="certificationNumber"
            placeholder="Enter your certification number"
            value={formData.certificationNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificationType">Certification Type *</label>
          <select
            id="certificationType"
            name="certificationType"
            value={formData.certificationType}
            onChange={handleInputChange}
            required
          >
            <option value="">Select certification type</option>
            <option value="emt">EMT</option>
            <option value="paramedic">Paramedic</option>
            <option value="firefighter">Firefighter</option>
            <option value="police">Police Officer</option>
            <option value="nurse">Nurse</option>
            <option value="doctor">Doctor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage; 