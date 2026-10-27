import React from 'react';
import { Link } from 'react-router';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-icon-wrapper">
          <FileQuestion size={40} />
        </div>
        
        <div className="error-code">404</div>
        <h3>Page <span className='receipt-span'>Not Found</span></h3>
        <p>
          Oops! The receipt, page, or resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="not-found-actions">
          <button onClick={() => window.history.back()} className="action-secondary-btn">
            <ArrowLeft size={16} /> Go Back
          </button>
          <Link to="/" className="action-primary-btn">
            <Home size={16} /> Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}