import React, { useState } from 'react';
import '../styles/AuthCard.css';

export default function AdminRegisterForm({ onBackToDashboard }) {
  // Form input states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [storeName, setStoreName] = useState('');
  const [role, setRole] = useState('cashier');

  // UI status states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSentSuccess, setIsSentSuccess] = useState(false);
  const [sentEmailTarget, setSentEmailTarget] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newUserPayload = { fullName, email, storeName, role };

    try {
      console.log('Sending user payload to backend API:', newUserPayload);
      
      // Simulate network request delay (e.g. Brevo/Nodemailer API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSentEmailTarget(email);
      setIsSentSuccess(true);
    } catch (err) {
      alert('Failed to register user. Please check server logs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setStoreName('');
    setRole('cashier');
    setIsSentSuccess(false);
    setSentEmailTarget('');
  };

  return (
    <div className="auth-wrapper">
        <div className="auth-card admin-card">
        {/* ----------------- STATE 1: EMAIL SENT CONFIRMATION ----------------- */}
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
                <h2>Password Sent to Email</h2>
                <p>An auto-generated secure password and login link have been dispatched to:</p>
                <div className="email-badge">{sentEmailTarget}</div>
            </div>

            <div className="confirmation-body">
                <div className="info-box">
                <span className="info-title">What happens next?</span>
                <p>The user can log into <strong>Lu Tech Stores</strong> using their email and the temporary password provided. They will be prompted to set a new password on first login.</p>
                </div>

                <div className="confirmation-actions">
                <button className="submit-btn" onClick={handleResetForm}>
                    + Register Another User
                </button>
                {onBackToDashboard && (
                    <button className="secondary-btn" onClick={onBackToDashboard}>
                    Back to Dashboard
                    </button>
                )}
                </div>
            </div>
            </div>
        ) : (
            /* ----------------- STATE 2: REGISTRATION FORM ----------------- */
            <>
            <div className="auth-header admin-header">
                <span className="admin-badge">Admin Portal</span>
                <h1>Register New Staff / Branch</h1>
                <p>A auto-generated password will be sent to the user's email</p>
            </div>

            <div className="auth-body">
                <form className="auth-form" onSubmit={handleRegister}>
                <div className="form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                    type="text" 
                    id="full-name" 
                    placeholder="e.g. Louise Pabor" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user-email">Email Address</label>
                    <input 
                    type="email" 
                    id="user-email" 
                    placeholder="louise@lutechstores.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="user-role">User Access Role</label>
                    <select 
                    id="user-role" 
                    className="role-select"
                    value={role} 
                    onChange={(e) => setRole(e.target.value)}
                    >
                    <option value="cashier">Store Cashier / Sales Rep</option>
                    <option value="manager">Branch Manager</option>
                    <option value="admin">System Admin</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Generating & Sending Email...' : 'Register User & Send Credentials'}
                </button>
                </form>
            </div>
            </>
        )}
        </div>
    </div>
  );
}