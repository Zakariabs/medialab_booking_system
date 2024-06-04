"use client"
import React, { useState, CSSProperties } from 'react';

const Contact: React.FC = () => {
  // State variables to hold the form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // You can handle form submission here, e.g., send the data to an API
    console.log({ name, email, message });
  };

  // Define inline styles with appropriate TypeScript types
  const styles: { [key: string]: CSSProperties } = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '1rem',
      border: '1px solid #00bcd4',
      borderRadius: '8px',
      backgroundColor: '#f0f8fa',
    },
    label: {
      fontSize: '1rem',
      color: '#007f91',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      border: '1px solid #00bcd4',
      borderRadius: '4px',
      outline: 'none',
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      padding: '0.75rem',
      backgroundColor: '#00bcd4',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    icon: {
      width: '1rem',
      height: '1rem',
    },
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div>
        <label htmlFor="name" style={styles.label}>Full Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div>
        <label htmlFor="email" style={styles.label}>School Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div>
        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>
        <span>Send</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-send"
          viewBox="0 0 16 16"
          style={styles.icon}
        >
          <path d="M15.964 0.686a1.5 1.5 0 0 0-1.932-1.932L.686 6.036a1.5 1.5 0 0 0-.057 2.754L4.25 10.5 10.5 4.25l-1.71 4.621a1.5 1.5 0 0 0 1.364 1.364l4.621-1.71 1.792 4.621a1.5 1.5 0 0 0 1.364-1.364L15.964.686zM5.961 8.232L2.82 6.598l10.054-3.975L8.232 5.961 6.598 2.82l3.975 10.054L8.232 5.961z" />
        </svg>
      </button>
    </form>
  );
};

export default Contact;
