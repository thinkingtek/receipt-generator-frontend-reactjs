import { useState } from 'react'
import '../styles/Nav.css';
import { Receipt, Plus, FileClock,UserRoundCog, KeyRound,LogOut, Menu, X } from 'lucide-react';
import { Link, NavLink, Outlet } from 'react-router'

export default function HomeLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className='nav-container'>
        <Link to={'/'} className='logo-nav' onClick={closeMenu}>
          <div className='logo-img-div'>
            <Receipt size={20} color='rgba(15,23,42,1)'/>
          </div>
          <h2 className='brand-name'>QuickReceipt</h2>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className='nav-mobile-toggle' onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? <X size={24} color='white' /> : <Menu size={24} color='white' />}
        </button>

        {/* Navigation Links (Responsive Drawer / Flex Bar) */}
        <div className={`nav-links-div ${isOpen ? 'open' : ''}`}>
          <NavLink to={'/new-receipt'} className='nav-links' onClick={closeMenu}>
            <Plus size={15} />
            <p className='link-text'>New Receipt</p>
          </NavLink>

          <NavLink to={'/receipts'} className='nav-links' onClick={closeMenu}>
            <FileClock size={15} />
            <p className='link-text'>Sales Ledger</p>
          </NavLink>

          {isAuthenticated &&
          <NavLink to={'/dashboard'} className='nav-links logout-link' onClick={closeMenu}>
            {/* <LogOut size={15} /> */}
            <UserRoundCog size={15} />
            <p className='link-text'>Dashboard</p>
          </NavLink>}

          {!isAuthenticated &&
          <NavLink to={'/login'} className='nav-links logout-link' onClick={closeMenu}>
            <KeyRound size={15} />
            <p className='link-text'>Login</p>
          </NavLink>}
        </div>
      </nav>

      <Outlet />
    </>
  )
}
