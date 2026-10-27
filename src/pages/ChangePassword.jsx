import React, { useState } from 'react';
import '../styles/AuthCard.css';
import { Link } from 'react-router';

export default function ChangePassword({ onPasswordChanged }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Updating password...');
      // Simulate API call to update password
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
    } catch (err) {
      setError('Failed to update password. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {isSuccess ? (
          <div className="confirmation-screen">
            <div className="confirmation-header">
              <div className="mail-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2>Password Updated</h2>
              <p>Your password has been changed successfully.</p>
            </div>

            <div className="confirmation-body">
              <div className="info-box">
                <p>You can now use your new password to sign in across all Quick receipt devices.</p>
              </div>

              <button className="submit-btn" onClick={onPasswordChanged}>
                Proceed to Sign In
              </button>
              {/* <Link to={'/login'} className="submit-btn">Proceed to Sign In</Link> */}
            </div>
          </div>
        ) : (
          <>
            <div className="auth-header">
              <div className="brand-logo">LT</div>
              <h1>Set New Password</h1>
              <p>Ensure your account remains safe with a strong password</p>
            </div>

            <div className="auth-body">
              {error && <div className="alert-banner error">{error}</div>}

              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="current-pass">Current / Temporary Password</label>
                  <input
                    type="password"
                    id="current-pass"
                    placeholder="••••••••"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="new-pass">New Password</label>
                  <input
                    type="password"
                    id="new-pass"
                    placeholder="Min. 8 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="confirm-pass">Confirm New Password</label>
                  <input
                    type="password"
                    id="confirm-pass"
                    placeholder="Re-enter new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Updating Password...' : 'Update Password'}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}