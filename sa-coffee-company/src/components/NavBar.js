import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span>SA Coffee Company</span>
      </div>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleMenuToggle}>Home</a></li>
          <li><a href="#About Us Section" onClick={handleMenuToggle}>About us</a></li>
          <li><a href="#products" onClick={handleMenuToggle}>Products</a></li>
          <li><a href="#Booking Section" onClick={handleMenuToggle}>Booking</a></li>
          <li><a href="#Contact" onClick={handleMenuToggle}>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-icons">
        <button className="menu-toggle" onClick={handleMenuToggle}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
