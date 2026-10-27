import React, { useState } from 'react';
import '../styles/ReceiptForm.css';
import { UserRoundCog, Truck, LayersPlus, Plus, SavePlus, Pencil, Trash2, X, Check } from 'lucide-react';

export default function ReceiptForm() {
  // 1. Customer & Fulfillment State
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    customerEmail: '',
    status: 'Paid',
    balc: '',
    shippingFee: '0',
    paidDate: '',
    deliveryDate: '',
    note: ''
  });

  // 2. Line Items State
  const [items, setItems] = useState([
    { id: 1, name: 'Ultra-Wide Gaming Monitor 34"', costPrice: '480000', sellingPrice: '550000', quantity: 1 },
    { id: 2, name: 'Playstation 5 console', costPrice: '300000', sellingPrice: '350000', quantity: 1 }
  ]);

  // 3. Item Form State
  const [itemInput, setItemInput] = useState({
    name: '',
    costPrice: '',
    sellingPrice: '',
    quantity: 1
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemInputChange = (e) => {
    const { name, value } = e.target;
    setItemInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveItem = (e) => {
    e.preventDefault();
    if (!itemInput.name || !itemInput.sellingPrice) return;

    const newItem = {
      id: editingIndex !== null ? items[editingIndex].id : Date.now(),
      name: itemInput.name,
      costPrice: itemInput.costPrice || '0',
      sellingPrice: itemInput.sellingPrice,
      quantity: Number(itemInput.quantity) || 1
    };

    if (editingIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editingIndex] = newItem;
      setItems(updatedItems);
      setEditingIndex(null);
    } else {
      setItems(prev => [...prev, newItem]);
    }

    setItemInput({ name: '', costPrice: '', sellingPrice: '', quantity: 1 });
  };

  const handleEditClick = (index) => {
    const itemToEdit = items[index];
    setItemInput({
      name: itemToEdit.name,
      costPrice: itemToEdit.costPrice,
      sellingPrice: itemToEdit.sellingPrice,
      quantity: itemToEdit.quantity
    });
    setEditingIndex(index);
    document.getElementById('item-form-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setItemInput({ name: '', costPrice: '', sellingPrice: '', quantity: 1 });
  };

  const handleDeleteItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
    if (editingIndex === index) {
      handleCancelEdit();
    }
  };

  const subtotal = items.reduce((acc, item) => acc + (Number(item.sellingPrice) * Number(item.quantity)), 0);
  const shipping = Number(formData.shippingFee) || 0;
  const grandTotal = subtotal + shipping;

  const handleSubmitReceipt = (e) => {
    e.preventDefault();
    const receiptPayload = {
      ...formData,
      items,
      subtotal,
      shippingFee: shipping,
      total: grandTotal
    };
    console.log("Submitting Receipt Payload:", receiptPayload);
    alert("Receipt saved successfully!");
  };

  return (
    <form onSubmit={handleSubmitReceipt} className="add-receipt-container">

      {/* Customer Details Section */}
      <div className="form-container">
        <div className="form-header">
            <UserRoundCog size={20} />
            <h4>Customer Details</h4>
        </div>

        <div className="input-container mb">
            <label htmlFor="customerName">Customer Name*</label>
            <input 
              type="text" 
              maxLength={50} 
              required 
              name="customerName" 
              id="customerName" 
              value={formData.customerName} 
              onChange={handleHeaderChange} 
              placeholder='e.g Louise Dave'
            />
        </div>

        <div className="grid-2 mb">
            <div className="input-container">
                <label htmlFor="phoneNumber">Phone Number*</label>
                <input 
                  type="tel" 
                  required 
                  maxLength={14} 
                  name="phoneNumber" 
                  id="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={handleHeaderChange} 
                  placeholder='080259866....'
                />
            </div>
            <div className="input-container">
                <label htmlFor="customerEmail">Email Address</label>
                <input 
                  type="email" 
                  maxLength={45} 
                  name="customerEmail" 
                  id="customerEmail" 
                  value={formData.customerEmail} 
                  onChange={handleHeaderChange} 
                  placeholder='louise@example.com'
                />
            </div>
        </div>
      </div>

      {/* Fulfillment & Status Section */}
      <div className="form-container">
        <div className="form-header">
            <Truck size={20} />
            <h4>Fulfillment & Status</h4>
        </div>

        <div className="grid-3 mb">
            <div className="input-container">
                <label htmlFor="status">Status*</label>
                <select name="status" id="status" value={formData.status} onChange={handleHeaderChange}>
                    <option value="Paid">Paid</option>
                    <option value="Delivered">Delivered</option>
                    <option value="In-Transit">In-Transit</option>
                </select>
            </div>

            <div className="input-container">
                <label htmlFor="balc">Balc (₦)</label>
                <input 
                  type="number" 
                  name="balc" 
                  id="balc" 
                  value={formData.balc} 
                  onChange={handleHeaderChange} 
                  placeholder='0.00'
                />
            </div>
            <div className="input-container">
                <label htmlFor="shippingFee">Shipping Fee (₦)</label>
                <input 
                  type="number" 
                  name="shippingFee" 
                  id="shippingFee" 
                  value={formData.shippingFee} 
                  onChange={handleHeaderChange} 
                  placeholder='0.00'
                />
            </div>
        </div>

        <div className="grid-2 mb">
            <div className="input-container">
                <label htmlFor="paidDate">Paid Date</label>
                <input 
                  type="date" 
                  name="paidDate" 
                  id="paidDate" 
                  value={formData.paidDate} 
                  onChange={handleHeaderChange} 
                />
            </div>
            <div className="input-container">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input 
                  type="date" 
                  name="deliveryDate" 
                  id="deliveryDate" 
                  value={formData.deliveryDate} 
                  onChange={handleHeaderChange} 
                />
            </div>
        </div>

        <div className="input-container mb">
            <label htmlFor="note">Note</label>
            <textarea 
              name="note" 
              id="note" 
              value={formData.note} 
              onChange={handleHeaderChange} 
              placeholder='Short description of the transaction (optional)'
            ></textarea>
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="table-responsive">
          <table className='receipt-table'>
              <thead>
                  <tr>
                      <th className="th-num">#</th>
                      <th className="th-item">ITEM DESCRIPTION</th>
                      <th className="th-price">PRICE</th>
                      <th className="th-qty">QTY</th>
                      <th className="th-total">TOTAL</th>
                      <th className="th-action">ACTION</th>
                  </tr>
              </thead>
              <tbody>
                  {items.length === 0 ? (
                      <tr>
                          <td colSpan="6" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
                              No items added yet. Use the form below to add items.
                          </td>
                      </tr>
                  ) : (
                      items.map((item, index) => {
                          const total = Number(item.sellingPrice) * Number(item.quantity);
                          return (
                              <tr key={item.id}>
                                  <td className="td-num">{index + 1}</td>
                                  <td className="td-item"><p>{item.name}</p></td>
                                  <td className="td-price">₦{Number(item.sellingPrice).toLocaleString()}</td>
                                  <td className="td-qty">{item.quantity}</td>
                                  <td className="td-total">₦{total.toLocaleString()}</td>
                                  <td className="td-action">
                                      <div className="action-buttons">
                                          <button 
                                            type="button" 
                                            className="action-btn edit-btn" 
                                            onClick={() => handleEditClick(index)} 
                                            title="Edit Item"
                                          >
                                              <Pencil size={15} />
                                          </button>
                                          <button 
                                            type="button" 
                                            className="action-btn delete-btn" 
                                            onClick={() => handleDeleteItem(index)} 
                                            title="Delete Item"
                                          >
                                              <Trash2 size={15} />
                                          </button>
                                      </div>
                                  </td>
                              </tr>
                          );
                      })
                  )}
              </tbody>
          </table>
      </div>

      {/* Cart Summary */}
      <div className="cart-summary">
          <div className="summary-row">
              <span>Subtotal</span>
              <span className="summary-value">₦{subtotal.toLocaleString()}</span>
          </div>
          <div className="summary-row">
              <span>Shipping Fee</span>
              <span className="summary-value">₦{shipping.toLocaleString()}</span>
          </div>
          <div className="summary-row total">
              <span>Total</span>
              <span className="summary-value">₦{grandTotal.toLocaleString()}</span>
          </div>
      </div>

      {/* Add / Edit Item Form */}
      <div className="form-container" id="item-form-section">
          <div className="form-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LayersPlus size={19} />
                  <h4>{editingIndex !== null ? `Editing Item #${editingIndex + 1}` : 'Add Item'}</h4>
              </div>
              {editingIndex !== null && (
                  <button type="button" onClick={handleCancelEdit} className="cancel-edit-link" style={{ background: 'none', border: 'none', color: '#2563eb', cursor: 'pointer', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <X size={14} /> Cancel Edit
                  </button>
              )}
          </div>

          <div className="input-container mb">
              <label htmlFor="ItemName">Item Name*</label>
              <input 
                type="text" 
                required 
                maxLength={60} 
                name="name" 
                id="ItemName" 
                value={itemInput.name} 
                onChange={handleItemInputChange} 
                placeholder='e.g Hp Gaming monitor'
              />
          </div>

          <div className="grid-3 mb">
              <div className="input-container">
                  <label htmlFor="costPrice">Cost Price</label>
                  <input 
                    type="number" 
                    name="costPrice" 
                    id="costPrice" 
                    inputMode="numeric" 
                    value={itemInput.costPrice} 
                    onChange={handleItemInputChange} 
                    placeholder='₦0.00'
                  />
              </div>
              <div className="input-container">
                  <label htmlFor="sellingPrice">Selling Price*</label>
                  <input 
                    type="number" 
                    required 
                    name="sellingPrice" 
                    id="sellingPrice" 
                    value={itemInput.sellingPrice} 
                    onChange={handleItemInputChange} 
                    placeholder='₦0.00'
                  />
              </div>
              <div className="input-container">
                  <label htmlFor="quantity">Quantity</label>
                  <input 
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    min="1" 
                    value={itemInput.quantity} 
                    onChange={handleItemInputChange} 
                  />
              </div>
          </div>
          
          <button type="button" onClick={handleSaveItem} className='add-item-btn'>
              {editingIndex !== null ? <><Check size={15}/> Update Item</> : <><Plus size={15}/> Add Item</>}
          </button>
      </div>

      <button type="submit" className='add-item-btn save-receipt'>
          <SavePlus size={20} /> Save Receipt
      </button>
    </form>
  );
}