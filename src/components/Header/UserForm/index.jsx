import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm({ active }) {
  const [formType, setFormType] = useState('login'); // 'login' or 'register' or 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = formType === 'register' ? '/api/register' : '/api/login';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`${formType} successful:`, data);
        if (formType === 'login') {
          localStorage.setItem('user_id', data.user_id);
          alert('Login successful!');
          window.location.href = '/dashboard';
        } else {
          alert('Account created successfully!');
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`user-form ${active ? 'active' : ''}`} onSubmit={handleSubmit}>
      <h3>{formType === 'login' ? 'Login Now' : formType === 'register' ? 'Create Account' : 'Forgot Password'}</h3>
      {error && <p className="error">{error}</p>}
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
            <a href="#" onClick={() => setFormType('forgot')}>
              Click here
            </a>
          </>
        )}
        {formType === 'forgot' && (
          <>
            Back to{' '}
            <a href="#" onClick={() => setFormType('login')}>
              Login
            </a>
          </>
        )}
      </p>
      <p>
        {formType === 'login' ? (
          <>
            Don’t have an account?{' '}
            <a href="#" onClick={() => setFormType('register')}>
              Register
            </a>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <a href="#" onClick={() => setFormType('login')}>
              Login
            </a>
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
