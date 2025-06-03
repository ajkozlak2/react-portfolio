import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleBlur = (field) => {
    if (!field) {
      setErrorMessage('This field is required');
    } else {
      setErrorMessage('');
    }
  };

  const validateEmail = (email) => {
    // Simple regex for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
      // Validate email when the user types
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return; // Prevent submission if email is invalid
    }
    alert('Message sent!'); // Placeholder for actual submission logic
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={() => handleBlur(name)} // Trigger handleBlur on blur event
            required
          />
          {errorMessage && !name && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message */}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={() => handleBlur(email)} // Trigger handleBlur on blur event
            required
          />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>} {/* Display email error message */}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            onBlur={() => handleBlur(message)} // Trigger handleBlur on blur event
            required
          />
          {errorMessage && !message && <div style={{ color: 'red' }}>{errorMessage}</div>} {/* Display error message */}
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;