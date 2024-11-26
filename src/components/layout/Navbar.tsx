import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 font-serif">
            <h1 className="text-3xl font-bold tracking-wider">AVIRO</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-800 hover:text-gray-600">New Arrivals</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Collection</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-600" />
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-600" />
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 text-gray-800">New Arrivals</a>
            <a href="#" className="block px-3 py-2 text-gray-800">Collection</a>
            <a href="#" className="block px-3 py-2 text-gray-800">About</a>
            <a href="#" className="block px-3 py-2 text-gray-800">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;