import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Banner from './components/Banner/index';
import Features from './components/Features/index';
import Products from './components/Products/index';
import Footer from './components/Footer/index';
import Checkout from './components/checkout/index'; // Import Checkout Page
import Login from './components/Auth/Login'; // Import Login Page
import Signup from './components/Auth/Signup'; // Import Signup Page
import ForgotPassword from './components/Auth/ForgotPassword'; // Import Forgot Password Page
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Header is visible across all pages */}
        <Header />
        
        {/* Define Routes for each page */}
        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <Banner />
                <Features />
                <Products />
              </>
            } 
          />
          
          {/* Checkout Page */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Authentication Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        
        {/* Footer is visible across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
