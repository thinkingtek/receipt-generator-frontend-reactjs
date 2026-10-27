import React, { useState } from 'react';
import '../styles/AuthCard.css';

export default function ForgotPassword({ onBackToLogin }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSentSuccess, setIsSentSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending password reset email to:', email);
      // Simulate API call to email service
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSentSuccess(true);
    } catch (err) {
      alert('Failed to send reset email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        {isSentSuccess ? (
          <div className="confirmation-screen">
            <div className="confirmation-header">
              <div className="mail-icon-wrapper">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11" />
                  <polyline points="22 7 12 13 2 7" />
                  <polyline points="16 19 18 21 22 17" />
                </svg>
              </div>
              <h2>Reset Link Sent</h2>
              <p>We have sent a password reset link to your email address:</p>
              <div className="email-badge">{email}</div>
            </div>

            <div className="confirmation-body">
              <div className="info-box">
                <span className="info-title">Check your inbox</span>
                <p>Click the link in the email to set a new password. If you don't see it within a few minutes, check your spam folder.</p>
              </div>

              <div className="confirmation-actions">
                <button className="submit-btn" onClick={() => setIsSentSuccess(false)}>
                  Resend Email
                </button>
                <button className="secondary-btn" onClick={onBackToLogin}>
                  Back to Sign In
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="auth-header">
              <div className="brand-logo">LT</div>
              <h1>Forgot Password?</h1>
              <p>Enter your email and we'll send you a password reset link</p>
            </div>

            <div className="auth-body">
              <form className="auth-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="reset-email">Email Address</label>
                  <input
                    type="email"
                    id="reset-email"
                    placeholder="name@lutechstores.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending Link...' : 'Send Reset Link'}
                </button>

                <button type="button" className="secondary-btn" onClick={onBackToLogin}>
                  Back to Sign In
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}