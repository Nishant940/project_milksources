import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm({ active }) {
  const [formType, setFormType] = useState('login'); // 'login', 'register' या 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Register के लिए Name Field
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // ✅ API Base URL (Backend से Connect करने के लिए)
  const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

  // ✅ Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let endpoint = `${API_URL}/api/login`;
      let bodyData = { email, password };

      if (formType === 'register') {
        endpoint = `${API_URL}/users`; // 👈 Register API
        bodyData = { name, email, password };
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      console.log(`${formType} successful:`, data);

      if (formType === 'login') {
        localStorage.setItem('user_id', data.user.id);
        alert('Login successful!');
        window.location.href = '/dashboard';
      } else {
        alert('Account created successfully!');
        setFormType('login'); // 👈 Register के बाद Login Page पर भेजें
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`user-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3>
        {formType === 'login' ? 'Login Now' : formType === 'register' ? 'Create Account' : 'Forgot Password'}
      </h3>

      {error && <p className="error">{error}</p>}

      {formType === 'register' && (
        <div className="user-form__box">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}

      <div className="user-form__box">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {formType !== 'forgot' && (
        <div className="user-form__box">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
      )}

      <p>
        {formType === 'login' && (
          <>
            Forgot password?{' '}
            <button type="button" className="link-button" onClick={() => setFormType('forgot')}>
              Click here
            </button>
          </>
        )}
        {formType === 'forgot' && (
          <>
            Back to{' '}
            <button type="button" className="link-button" onClick={() => setFormType('login')}>
              Login
            </button>
          </>
        )}
      </p>

      <p>
        {formType === 'login' ? (
          <>
            Don’t have an account?{' '}
            <button type="button" className="link-button" onClick={() => setFormType('register')}>
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button type="button" className="link-button" onClick={() => setFormType('login')}>
              Login
            </button>
          </>
        )}
      </p>

      <button type="submit" className="user-form__btn" disabled={loading}>
        {loading ? 'Processing...' : formType === 'login' ? 'Login Now' : formType === 'register' ? 'Register Now' : 'Reset Password'}
      </button>
    </form>
  );
}

UserForm.propTypes = {
  active: PropTypes.bool.isRequired,
};
