import React from 'react';
import { CheckCircle, Clock, Mail, Phone, User, Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';
import '../styles/ReceiptDetails.css';

export default function ReceiptDetails({ receiptData }) {
  const data = receiptData || {
    refCode: "REF-DSJUFE8EHEJM",
    customerName: "Mark Solomon",
    phoneNumber: "+234 810 102 7623",
    email: "mark.solomon@gmail.com",
    paymentDate: "October 14, 2026",
    deliveryDate: "October 21, 2026",
    status: "Partially Paid",
    shippingFee: 15000,
    subtotal: 450000,
    total: 465000,
    balance: 50000,
    items: [
      { id: 1, name: "Industrial Steel Plate (10mm)", quantity: 2, price: 200000, total: 400000 },
      { id: 2, name: "Heavy Duty Metal Tags (Pack of 50)", quantity: 1, price: 50000, total: 50000 }
    ]
  };

  // Download as PDF using html2pdf.js
  const handleDownloadPDF = () => {
    const element = document.getElementById('receipt-printable-area');
    
    const options = {
      margin:       10,
      filename:     `Receipt-${data.refCode}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="receipt-page-wrapper">
      
      {/* Printable Sheet Container (Exported to PDF) */}
      <div id="receipt-printable-area" className="receipt-sheet">
        
        {/* Header Branding & Status */}
        <div className="receipt-top-banner">
          <div className="brand-info">
            <div className="brand-logo-small">LT</div>
            <div>
              <h2>Lu Tech Stores</h2>
              <span className="ref-code">Ref: {data.refCode}</span>
            </div>
          </div>
          <div className={`status-pill ${data.balance > 0 ? 'pending' : 'paid'}`}>
            {data.balance > 0 ? <Clock size={14} /> : <CheckCircle size={14} />}
            <span>{data.status}</span>
          </div>
        </div>

        {/* Customer & Order Metadata Grid */}
        <div className="metadata-grid">
          <div className="meta-card">
            <h4>Customer Information</h4>
            <p><User size={13} /> <strong>{data.customerName}</strong></p>
            <p><Phone size={13} /> {data.phoneNumber}</p>
            {data.email && <p><Mail size={13} /> {data.email}</p>}
          </div>

          <div className="meta-card">
            <h4>Transaction Timeline</h4>
            <p><strong>Payment Date:</strong> {data.paymentDate}</p>
            <p><strong>Delivery Date:</strong> {data.deliveryDate}</p>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="items-section">
          <h4>Order Items</h4>
          <div className="table-responsive">
            <table className="items-table">
              <thead>
                <tr>
                  <th className="th-item">Item Name</th>
                  <th className="th-center">Qty</th>
                  <th className="th-right">Price</th>
                  <th className="th-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((item, index) => (
                  <tr key={index}>
                    <td className="td-item item-name-cell">{item.name}</td>
                    <td className="td-center">{item.quantity}</td>
                    <td className="td-right">₦{item.price.toLocaleString()}</td>
                    <td className="td-right font-weight-600">₦{item.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="financial-summary">
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₦{data.subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee</span>
            <span>₦{data.shippingFee.toLocaleString()}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total Amount</span>
            <span className="green-text">₦{data.total.toLocaleString()}</span>
          </div>

          {data.balance > 0 && (
            <div className="summary-row balance-row">
              <span>Outstanding Balance Due</span>
              <span className="red-text">₦{data.balance.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Verification Footer Text Inside PDF */}
        <div className="receipt-card-footer-text">
          <p className="verification-text">
            This receipt is verifiable on <strong>lutechstores.com</strong>
          </p>
        </div>

      </div>

      {/* Action Button Container (Single Full-Width Download PDF Button) */}
      <div className="receipt-actions-container">
        <button className="action-btn pdf-btn" onClick={handleDownloadPDF}>
          <Download size={18} />
          <span>Download PDF Receipt</span>
        </button>
      </div>

    </div>
  );
}