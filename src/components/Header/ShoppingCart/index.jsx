// Sopping Cart
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';

export default function ShoppingCart(props) {
  const { active } = props;
  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/p1.png" alt="Product" />
        <div className="content">
          <h3>milk</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 1</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/p2.png" alt="Product" />
        <div className="content">
          <h3>curd</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 1</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/01_image.png" alt="Product" />
        <div className="content">
          <h3>butter</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 1</span>
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  activeShoppingCart: PropTypes.bool,
}.isRequired;
