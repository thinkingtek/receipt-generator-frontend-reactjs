import React from 'react'
import '../styles/Header.css';
import { Search } from 'lucide-react';


export default function Home() {
  return (
    <div className="overlay lookup-container">
      <div className="lookup-form-div">
        <div className="lookup-badge">Verification Portal</div>
        <h3>Customer <span className='receipt-span'>Receipt</span> Lookup</h3>
        <p>Enter your unique receipt reference code below to view purchase history & print a copy.</p>

        <form className='lookup-form'>
          <input 
            className='form-input' 
            type="text" 
            name="refCode" 
            id="refCode" 
            placeholder='E.G. REF-DSJUFE8EHEJM' 
            maxLength={15}
            autoComplete="off"
            required
          />
          <button type="submit" className="lookup-submit-btn">
            <Search size={16} color='white' />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  )
}
