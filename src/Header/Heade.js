import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context';
import './Header.css';

const Header = ({ onSearch }) => {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update local search query
    onSearch(e.target.value); // Pass the search query to the parent (Products)
  };

  return (
    <header className="header-main">
      <div className="header-sub">
      <Link to="/">
          <div className="logo">
            <img src="logo.png" alt="Company Logo" />
          </div>
        </Link>

        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/">About Us</Link></li>
        </ul>

        <div className="header-search">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <div className="cart">
          <p><Link to="/cart">Cart ({cart.length})</Link></p>
        </div>
      </div>
    </header>
  );
};

export default Header;
