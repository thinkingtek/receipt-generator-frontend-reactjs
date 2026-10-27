import React from 'react'
import '../styles/Receipts.css';
import { UserRoundKey, LogOut, FileSpreadsheet, Activity, ShoppingBag, Printer } from 'lucide-react';
import { Link } from 'react-router';

export default function Receipts() {
  return (
    <div className='content-container receipts'>
      {/* <div className="grid-4 receipts-grid-headers">

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL SALES</p>
            <div className="icon-div currency">
              ₦
            </div>
          </div>
          <h4 className="figures">₦5000,000</h4>
          <p className="writeup">Lifetime revenue tracked</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL RECEIPTS</p>
            <div className="icon-div receipt-icon">
              <FileSpreadsheet size={15} />
            </div>
          </div>
          <h4 className="figures">2</h4>
          <p className="writeup">Completed checkout transactions</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TODAY'S REVENUE</p>
            <div className="icon-div revenue-icon-div">
              <Activity size={15} />
            </div>
          </div>
          <h4 className="figures">₦3000,000</h4>
          <p className="writeup revenue-writeup">Recorded today</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL ITEMS SOLD</p>
            <div className="icon-div currency">
              <ShoppingBag size={15} />
            </div>
          </div>
          <h4 className="figures">1000,000</h4>
          <p className="writeup">Across all logged orders</p>
        </div>

      </div> */}

      <div className="dashboard-top-header">
        <div>
          {/* <h2>Store Overview & Ledger</h2> */}
        </div>
        <div className="dashboard-actions-group">
          <Link to={'/change-password'} className="primary-action-btn">
            <UserRoundKey size={16} /> Change Password
          </Link>
          <button className="logout-action-btn" title="Logout">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="receipt-container">
        {/* Header Section */}
        <div className="receipt-header">
          <div>
            <h3>All Sales Receipts</h3>
            <p>Manage and track all customer transactions</p>
          </div>
          <div className="receipt-actions">
            <input type="text" placeholder="Search receipts..." className="receipt-search" />
            <select className="receipt-filter">
              <option value="">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>

        {/* Responsive Table */}
        <div className="table-responsive">
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="th-num">#</th>
                <th>Ref Code</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Date</th>
                <th className="th-balance">Balance</th>
                <th className="th-amount">Total</th>
                <th className="th-action">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td-num">2</td>
                <td>
                  <Link to="/" className="receipt-link">hwyegoke7yheg4h</Link>
                </td>
                <td>
                  <div className="customer-info">
                    <span className="customer-name">Mark solomon</span>
                    <span className="customer-phone">081010276234</span>
                  </div>
                </td>
                <td>
                  <span className="badge paid">Paid</span>
                </td>
                <td className="td-date">2 weeks ago</td>
                <td className="td-balance red">₦50,000</td>
                <td className="td-amount green">₦450,000</td>
                <td className="td-action">
                  <button className="print-btn" title="Print receipt">
                    <Printer size={16} />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="td-num">1</td>
                <td>
                  <Link to="/" className="receipt-link">hwyeg3u47yheg4h</Link>
                </td>
                <td>
                  <div className="customer-info">
                    <span className="customer-name">Luke David</span>
                    <span className="customer-phone">081010276234</span>
                  </div>
                </td>
                <td>
                  <span className="badge delivered">Delivered</span>
                </td>
                <td className="td-date">2 weeks ago</td>
                <td className="td-balance">−</td>
                <td className="td-amount green">₦550,000</td>
                <td className="td-action">
                  <button className="print-btn" title="Print receipt">
                    <Printer size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="pagination-footer">
          <span className="pagination-info">
            Showing <strong>1 to 2</strong> of <strong>24</strong> receipts
          </span>

          <div className="pagination-controls">
            <button className="page-btn nav-btn" disabled>
              Previous
            </button>

            <div className="page-numbers">
              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
            </div>

            <button className="page-btn nav-btn">
              Next
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
