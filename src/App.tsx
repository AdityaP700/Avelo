import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Newsletter from './components/Newsletter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <FeaturedCollection />
                <Newsletter />
              </>
            } />
            <Route path="/products" element={<FeaturedCollection />} />
            <Route path="/cart" element={<div>Cart Page Coming Soon</div>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;