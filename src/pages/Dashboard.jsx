import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { 
    UserRoundKey,
    Receipt, 
    FileSpreadsheet, 
    ShoppingBag, 
    Users, 
    Plus, 
    Printer, 
    UserPlus, 
    Search, 
    TrendingUp, 
    Package,
    ShieldCheck,
    LogOut
} from 'lucide-react';
import '../styles/Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  // Active Tab State: 'receipts' | 'items' | 'staffs'
  const [activeTab, setActiveTab] = useState('receipts');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Logout action
  const handleLogout = () => {
    navigate('/login');
  };

  // Mock Data for Receipts Table
  const receipts = [
    {
      id: 1,
      refCode: 'REF-DSJU8EHE',
      staffName: 'Louise Pabor',
      customerName: 'Mark Solomon',
      status: 'Paid',
      date: 'Oct 24, 2026',
      balance: '₦50,000',
      profit: '₦75,000',
      total: '₦450,000',
      statusClass: 'paid'
    },
    {
      id: 2,
      refCode: 'REF-HWYE3U47',
      staffName: 'Grace Pabor',
      customerName: 'Luke David',
      status: 'Delivered',
      date: 'Oct 22, 2026',
      balance: '—',
      profit: '₦120,000',
      total: '₦550,000',
      statusClass: 'delivered'
    }
  ];

  // Mock Data for Items Table
  const itemsSold = [
    { id: 1, itemId: 'item-01', itemName: 'Ultra-Wide Gaming Monitor 34"', quantity: 1, costPrice: '480000', sellingPrice: '550000', profit: '₦70,000', date: 'Oct 24, 2026' },
    { id: 2, itemId: 'item-02', itemName: 'HDMI 2.1 Cable (2m)', quantity: 2, costPrice: '10000', sellingPrice: '15000', profit: '₦10,000', date: 'Oct 24, 2026' },
    { id: 3, itemId: 'item-03', itemName: 'PlayStation 5 Console', quantity: 1, costPrice: '300000', sellingPrice: '350000', profit: '₦50,000', date: 'Oct 22, 2026' }
  ];

  // Mock Data for Staffs Table
  const staffs = [
    { id: 1, name: 'Louise Pabor', email: 'louise@lutech.com', role: 'Store Admin / Founder', status: 'Active', receiptsCount: 142 },
    { id: 2, name: 'Grace Pabor', email: 'grace@lutech.com', role: 'Sales Cashier', status: 'Active', receiptsCount: 89 },
    { id: 3, name: 'Emmanuel Okoro', email: 'emmanuel@lutech.com', role: 'Inventory Manager', status: 'Active', receiptsCount: 34 }
  ];

  return (
    <div className="content-container dashboard-page">

      {/* Top Header & Quick Actions */}
      <div className="dashboard-top-header">
        <div>
          <h2>Store Overview & Ledger</h2>
          <p>Monitor real-time sales transactions, items inventory performance, and staff activity.</p>
        </div>
        <div className="dashboard-actions-group">
          <Link to={'/change-password'} className="primary-action-btn">
            <UserRoundKey size={16} /> Change Password
          </Link>
          <Link to={'/add-user'} className="secondary-action-btn">
            <UserPlus size={16} /> Add New Staff
          </Link>
          <button onClick={handleLogout} className="logout-action-btn" title="Logout">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* Summary Metrics Cards */}
      <div className="grid-4 receipts-grid-headers">
        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL REVENUE</p>
            <div className="icon-div currency">₦</div>
          </div>
          <h4 className="figures">₦1,000,000</h4>
          <p className="writeup">Lifetime sales tracked</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL PROFIT</p>
            <div className="icon-div revenue-icon-div"><TrendingUp size={15} /></div>
          </div>
          <h4 className="figures">₦195,000</h4>
          <p className="writeup revenue-writeup">Net earnings to date</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>TOTAL RECEIPTS</p>
            <div className="icon-div receipt-icon"><FileSpreadsheet size={15} /></div>
          </div>
          <h4 className="figures">24</h4>
          <p className="writeup">Completed checkouts</p>
        </div>

        <div className="record-headers-container">
          <div className="headers-icon">
            <p>ACTIVE STAFF</p>
            <div className="icon-div currency" style={{ background: '#fef3c7', color: '#d97706' }}><Users size={15} /></div>
          </div>
          <h4 className="figures">3</h4>
          <p className="writeup">Authorized operators</p>
        </div>
      </div>

      {/* Dashboard Tabs & Search Filter Bar */}
      <div className="dashboard-tab-container">
        <div className="dashboard-tabs">
          <button 
            className={`tab-btn ${activeTab === 'receipts' ? 'active' : ''}`}
            onClick={() => setActiveTab('receipts')}
          >
            <FileSpreadsheet size={16} /> All Receipts
          </button>
          <button 
            className={`tab-btn ${activeTab === 'items' ? 'active' : ''}`}
            onClick={() => setActiveTab('items')}
          >
            <Package size={16} /> Items Sold
          </button>
          <button 
            className={`tab-btn ${activeTab === 'staffs' ? 'active' : ''}`}
            onClick={() => setActiveTab('staffs')}
          >
            <Users size={16} /> Staff Members
          </button>
        </div>

        <div className="tab-search-box">
          <Search size={16} color="#64748b" />
          <input 
            type="text" 
            placeholder={`Search ${activeTab}...`} 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Tab Content 1: All Receipts Table */}
      {activeTab === 'receipts' && (
        <div className="receipt-container">
          <div className="table-responsive">
            <table className="receipt-table">
              <thead>
                <tr>
                  <th className="th-num">#</th>
                  <th>Ref Code</th>
                  <th>Staff Name</th>
                  <th>Customer Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th className="th-balance">Balance</th>
                  <th className="th-amount">Profit</th>
                  <th className="th-amount">Total</th>
                  <th className="th-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {receipts.map((item, idx) => (
                  <tr key={item.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td><Link to={`/receipts/${item.refCode}`} className="receipt-link">{item.refCode}</Link></td>
                    <td><span className="staff-name-badge">{item.staffName}</span></td>
                    <td>
                      <div className="customer-info">
                        <span className="customer-name">{item.customerName}</span>
                      </div>
                    </td>
                    <td><span className={`badge ${item.statusClass}`}>{item.status}</span></td>
                    <td className="td-date">{item.date}</td>
                    <td className={`td-balance ${item.balance !== '—' ? 'red' : ''}`}>{item.balance}</td>
                    <td className="td-amount green">{item.profit}</td>
                    <td className="td-amount">{item.total}</td>
                    <td className="td-action">
                      <button className="print-btn" title="Print Receipt">
                        <Printer size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="pagination-footer">
            <span className="pagination-info">
              Showing <strong>1 to {receipts.length}</strong> of <strong>{receipts.length}</strong> receipts
            </span>
            <div className="pagination-controls">
              <button className="page-btn nav-btn" disabled>Previous</button>
              <div className="page-numbers">
                <button className="page-btn active">1</button>
              </div>
              <button className="page-btn nav-btn" disabled>Next</button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 2: Items Sold Table (Right-aligned Date) */}
      {activeTab === 'items' && (
        <div className="receipt-container">
          <div className="table-responsive">
            <table className="receipt-table">
              <thead>
                <tr>
                  <th className="th-num">#</th>
                  <th>Item Name</th>
                  <th className="th-qty">Quantity</th>
                  <th className="th-amount">Cost Price</th>
                  <th className="th-amount">Selling Price</th>
                  <th className="th-amount">Total</th>
                  <th className="th-amount">Profit</th>
                  <th className="th-amount">Date</th>
                </tr>
              </thead>
              <tbody>
                {itemsSold.map((item, idx) => {
                  const total = Number(item.sellingPrice) * Number(item.quantity);
                  return (
                    <tr key={item.id}>
                      <td className="td-num">{idx + 1}</td>
                      <td>
                        <Link to={`/items/${item.itemId}`} className="receipt-link font-semibold">
                          {item.itemName}
                        </Link>
                      </td>
                      <td className="td-qty">{item.quantity}</td>
                      <td className="td-amount">₦{Number(item.costPrice).toLocaleString()}</td>
                      <td className="td-amount">₦{Number(item.sellingPrice).toLocaleString()}</td>
                      <td className="td-amount">₦{total.toLocaleString()}</td>
                      <td className="td-amount green">{item.profit}</td>
                      <td className="td-amount td-date">{item.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="pagination-footer">
            <span className="pagination-info">
              Showing <strong>1 to {itemsSold.length}</strong> of <strong>{itemsSold.length}</strong> items
            </span>
            <div className="pagination-controls">
              <button className="page-btn nav-btn" disabled>Previous</button>
              <div className="page-numbers">
                <button className="page-btn active">1</button>
              </div>
              <button className="page-btn nav-btn" disabled>Next</button>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content 3: Staffs Table */}
      {activeTab === 'staffs' && (
        <div className="receipt-container">
          <div className="table-responsive">
            <table className="receipt-table">
              <thead>
                <tr>
                  <th className="th-num">#</th>
                  <th>Staff Name</th>
                  <th>Email Address</th>
                  <th>Assigned Role</th>
                  <th>Status</th>
                  <th className="th-qty">Receipts Logged</th>
                </tr>
              </thead>
              <tbody>
                {staffs.map((staff, idx) => (
                  <tr key={staff.id}>
                    <td className="td-num">{idx + 1}</td>
                    <td>
                      <div className="customer-info">
                        <span className="customer-name">{staff.name}</span>
                      </div>
                    </td>
                    <td className="td-date">{staff.email}</td>
                    <td><span className="role-tag"><ShieldCheck size={13} /> {staff.role}</span></td>
                    <td><span className="badge paid">{staff.status}</span></td>
                    <td className="td-qty font-mono"><strong>{staff.receiptsCount}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="pagination-footer">
            <span className="pagination-info">
              Showing <strong>1 to {staffs.length}</strong> of <strong>{staffs.length}</strong> staff members
            </span>
            <div className="pagination-controls">
              <button className="page-btn nav-btn" disabled>Previous</button>
              <div className="page-numbers">
                <button className="page-btn active">1</button>
              </div>
              <button className="page-btn nav-btn" disabled>Next</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}