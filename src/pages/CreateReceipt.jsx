import React from 'react'
import { Receipt, Plus, FileClock, IvBag, Trash2 } from 'lucide-react';

export default function CreateReceipt() {
  return (
    <div className='content-container add-receipt-container'>
      <div className="form-container">
        <div className="header">
          <IvBag size={24} />
          <h3>Generate New Sales Receipt</h3>
        </div>

        <div className="grid-3 mb">
          <div className="input-container">
            <label htmlFor="customerName">Customer Name</label>
            <input type="text" name="customerName" id="customerName" placeholder='e.g Louise Dave'/>
          </div>
          <div className="input-container">
            <label htmlFor="">Phone Number</label>
            <input type="tel" name="customerPhone" id="customerPhone" placeholder='0802......'/>
          </div>
          <div className="input-container">
            <label htmlFor="customerEmail">Customer Email</label>
            <input type="email" name="customerEmail" id="customerEmail" placeholder='louise@example.com'/>
          </div>
        </div>

        <div className="grid-4 mb">
          <div className="input-container">
            <label htmlFor="status">Status</label>
            <select name="" id="">
              <option value="">Paid</option>
              <option value="">Delivered</option>
              <option value="">In-Transit</option>
            </select>
          </div>
          <div className="input-container">
            <label htmlFor="paidDate">Paid Date</label>
            <input type="date" name="" id="paidDate" />
          </div>
          <div className="input-container">
            <label htmlFor="paidDate">Delivery Date</label>
            <input type="date" name="" id="paidDate" />
          </div>
          <div className="input-container">
            <label htmlFor="shippingFee">Shipping/Fee(₦)</label>
            <input type="number" name="shippingFee" id="shippingFee" placeholder='0.00'/>
          </div>
        </div>

        <div className="input-container mb">
          <label htmlFor="note">Note</label>
          <textarea name="note" id="note" placeholder='Short description of the transaction (optional)'></textarea>
        </div>

        <h4>ITEM PURCHASE</h4>
          <div className="input-container">
            <label htmlFor="customerName">Item Name</label>
            <input type="text" name="customerName" id="customerName" placeholder='Item description'/>
          </div>
        <div className="grid-3 mb">
          <div className="input-container">
            <label htmlFor="">Cost Price</label>
            <input type="number" name="costPrice" id="costPrice" placeholder='0.00'/>
          </div>
          <div className="input-container">
            <label htmlFor="">Selling Price</label>
            <input type="number" name="sellingPrice" id="sellingPrice" placeholder='0.00'/>
          </div>
          <div className="input-container">
            <label htmlFor="customerEmail">Qty</label>
            <input type="number" name="qty" id="qty" placeholder='1'/>
          </div>
        </div>

        <button className="add-item-btn">
          <Plus size={15} color='grey' />
          <p>Add Another Item</p>
        </button>


      </div>
    </div>
  )
}
