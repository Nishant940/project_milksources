import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Products() {
  const navigate = useNavigate();

  // Sample product list
  const products = [
    {
      id: 1,
      name: 'A2 Gir Cow Milk',
      price: '₹100 / 1L',
      image: 'image/p1.png',
    },
    {
      id: 2,
      name: 'A2 Gir Cow Ghee',
      price: '₹3000 / 1KG',
      image: 'image/p2.png',
    },
    {
      id: 3,
      name: 'A2 Paneer (Gir Cow Milk)',
      price: '₹700 / 1KG',
      image: 'image/01_image.png',
    },
    {
      id: 4,
      name: 'Peda',
      price: '₹1200 / 1KG',
      image: 'image/02_image.png',
    },
  ];

  // Function to handle "Buy Now" button click
  const handleBuyNow = (product) => {
    // Navigate to Checkout page with product details
    navigate('/checkout', { state: { product } });
  };

  // Function to handle "Add to Cart" button click
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart`);
    // Add your logic for "Add to Cart" action here
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Our <span>Products</span>
      </h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div className="price">{product.price}</div>
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfAlt} />
            </div>
            <div className="button-container">
              <button
                type="button"
                className="btn"
                onClick={() => handleAddToCart(product.name)}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="btn buy-now"
                onClick={() => handleBuyNow(product)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
