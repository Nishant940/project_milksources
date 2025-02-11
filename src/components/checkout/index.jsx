import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // For receiving product data and navigation
import './Checkout.css';

export default function Checkout() {
  const location = useLocation(); // To access passed product data
  const navigate = useNavigate(); // For redirection
  const product = location.state?.product; // Extract the product data

  const [address, setAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  });

  const handlePlaceOrder = () => {
    if (!address.name || !address.address || !address.city || !address.phone) {
      alert('Please fill all the required fields!');
      return;
    }

    // Sample order confirmation logic
    alert('Order placed successfully!');
    console.log('Order Details:', {
      product,
      address,
      paymentMethod: document.querySelector('input[name="payment"]:checked').value,
    });

    // Add logic to send data to the backend (e.g., API POST request)
    navigate('/'); // Redirect to the homepage or order confirmation page
  };

  return (
    <section className="checkout">
      <h1 className="heading">
        Checkout <span>Page</span>
      </h1>

      {/* Selected Product Details */}
      {product ? (
        <div className="selected-product">
          <h2>Selected Product</h2>
          <div className="product-details">
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>No product selected. Please return to the products page.</p>
      )}

      {/* Address Form */}
      <div className="address-form">
        <h2>Delivery Address</h2>
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={address.name}
            onChange={(e) => setAddress({ ...address, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={address.address}
            onChange={(e) => setAddress({ ...address, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={address.city}
            onChange={(e) => setAddress({ ...address, city: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="State"
            value={address.state}
            onChange={(e) => setAddress({ ...address, state: e.target.value })}
          />
          <input
            type="text"
            placeholder="ZIP Code"
            value={address.zip}
            onChange={(e) => setAddress({ ...address, zip: e.target.value })}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={address.phone}
            onChange={(e) => setAddress({ ...address, phone: e.target.value })}
            required
          />
        </form>
      </div>

      {/* Payment Options */}
      <div className="payment-options">
        <h2>Payment</h2>
        <div>
          <input type="radio" id="cod" name="payment" value="cod" defaultChecked />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
        <div>
          <input type="radio" id="online" name="payment" value="online" />
          <label htmlFor="online">Online Payment</label>
        </div>
      </div>

      {/* Place Order Button */}
      <button className="btn place-order" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </section>
  );
}
