// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="#home">home</a>
      <a href="#features">features</a>
      <a href="#products">products</a>
      <a href="#about">about</a>
      {/* <a href="#reviews">review</a> */}
      
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
