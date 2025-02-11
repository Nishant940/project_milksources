import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faShoppingCart,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // For navigation
import SearchForm from './SearchForm';
import ShoppingCart from './ShoppingCart';
import UserForm from './UserForm';
import './Header.css';

export default function Header() {
  const [activeStates, setActiveStates] = useState({
    menu: false,
    search: false,
    shoppingCart: false,
    userForm: false,
  });

  // Toggle active states for dropdowns
  const handleToggle = (key) => {
    setActiveStates((prevStates) => ({
      ...prevStates,
      [key]: !prevStates[key],
    }));
  };

  // Close all dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      setActiveStates({
        menu: false,
        search: false,
        shoppingCart: false,
        userForm: false,
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo">
        <img src="/image/logo_1.png" alt="Milk Source Logo" className="logo-image" />
      </Link>

      {/* Navbar */}
      <nav className={`navbar ${activeStates.menu ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#products">Products</a> {/* Smooth scroll to Products section */}
          </li>
          <li>
            <a href="#features">Features</a> {/* Smooth scroll to Features section */}
          </li>
          <li>
            <Link to="/checkout">Checkout</Link> {/* Redirect to Checkout page */}
          </li>
        </ul>
      </nav>

      {/* Right-side icons */}
      <div className="icons">
        {/* Menu Icon */}
        <button
          type="button"
          id="menu-btn"
          onClick={() => handleToggle('menu')}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>

        {/* Search Icon */}
        <button
          type="button"
          id="search-btn"
          onClick={() => handleToggle('search')}
          aria-label="Toggle Search"
        >
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>

        {/* Shopping Cart Icon */}
        <button
          type="button"
          id="cart-btn"
          onClick={() => handleToggle('shoppingCart')}
          aria-label="Toggle Cart"
        >
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>

        {/* User Icon */}
        <button
          type="button"
          id="user-btn"
          onClick={() => handleToggle('userForm')}
          aria-label="Toggle User Form"
        >
          <FontAwesomeIcon className="fa-icon" icon={faUser} />
        </button>
      </div>

      {/* Dropdown Components */}
      <SearchForm active={activeStates.search} />
      <ShoppingCart active={activeStates.shoppingCart} />
      <UserForm active={activeStates.userForm} />
    </header>
  );
}
