import React, { useState } from 'react';
import '../styles/AuthCard.css';
import { Link } from 'react-router';

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication API call
    try {
      console.log('Authenticating:', { email, password, rememberMe });
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-wrapper">
        <div className="auth-card">
        <div className="auth-header">
            <div className="brand-logo">QR</div>
            <h1>Quick Receipt</h1>
            <p>Sign in to your sales & inventory management account</p>
        </div>

        <div className="auth-body">
            <form className="auth-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="login-email">Email Address</label>
                <input 
                type="email" 
                id="login-email" 
                placeholder="admin@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                />
            </div>

            <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input 
                type="password" 
                id="login-password" 
                placeholder="••••••••" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                />
            </div>

            <div className="form-actions">
                <label className="remember-me">
                <input 
                    type="checkbox" 
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                /> Remember me
                </label>
                {/* <a href="#forgot" className="forgot-link">Forgot password?</a> */}
                <Link to={'/forgot-password'} className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
                {isLoading ? 'Authenticating...' : 'Sign In to Dashboard'}
            </button>
            </form>
        </div>
        </div>
    </div>
  );
}