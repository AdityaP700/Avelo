import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandValues from './components/BrandValues';
import CustomerReviews from './components/CustomerReviews';
import ProductFilters from './components/ProductFilters';
import ShippingInfo from './components/ShippingInfo';
import ProductDetail from './components/ProductDetail';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <BrandValues />
                  <CustomerReviews />
                  <ShippingInfo />
                  <Newsletter />
                </>
              } />
              <Route path="/products" element={
                <div className="flex">
                  <ProductFilters />
                  <div className="flex-1">
                    {/* Products grid will go here */}
                  </div>
                </div>
              } />
              <Route path="/product/:id" element={<ProductDetail product={{
                name: "Sample Product",
                price: 99.99,
                rating: 4,
                reviews: 150,
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976",
                variants: {
                  color: ["Black", "White", "Gray", "Blue"],
                  size: ["XS", "S", "M", "L", "XL"]
                },
                supplier: {
                  location: "Asansol, West Bengal, India",
                  processingTime: "1-2 business days"
                },
                shipping: {
                  estimatedDelivery: "7-10 business days"
                }
              }} />} />
              <Route path="/cart" element={<div>Cart Page Coming Soon</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;