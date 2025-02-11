import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index';
import Banner from './components/Banner/index';
import Features from './components/Features/index';
import Products from './components/Products/index';
import Footer from './components/Footer/index';
import Checkout from './components/checkout/index'; // Import Checkout Page
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
        </Routes>
        
        {/* Footer is visible across all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
