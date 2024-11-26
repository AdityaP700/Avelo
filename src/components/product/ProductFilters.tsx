import React, { useState } from 'react';
import { Sliders, X } from 'lucide-react';

const ProductFilters = () => {
  const [showFilters, setShowFilters] = useState(false);

  const priceRanges = [
    'Under $25',
    '$25 - $50',
    '$50 - $100',
    '$100 - $200',
    'Over $200'
  ];

  const categories = [
    'Trending Now 🔥',
    'New Arrivals ✨',
    'Bestsellers 👑',
    'Sustainable Collection 🌱',
    'Limited Edition 💎'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const colors = [
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white border border-gray-200' },
    { name: 'Gray', class: 'bg-gray-500' },
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Green', class: 'bg-green-500' }
  ];

  return (
    <div className="relative">
      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg z-50 flex items-center"
      >
        {showFilters ? <X /> : <Sliders />}
      </button>

      {/* Filters Sidebar */}
      <div className={`
        lg:block fixed lg:sticky top-0 h-screen lg:h-auto w-80 bg-white shadow-lg lg:shadow-none
        transform transition-transform duration-300 ease-in-out z-40
        ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Categories</h4>
            {categories.map((category, index) => (
              <label key={index} className="flex items-center mb-3 cursor-pointer">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-black rounded border-gray-300" />
                <span className="ml-3 text-gray-700">{category}</span>
              </label>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Price Range</h4>
            {priceRanges.map((range, index) => (
              <label key={index} className="flex items-center mb-3 cursor-pointer">
                <input type="radio" name="price" className="form-radio h-5 w-5 text-black border-gray-300" />
                <span className="ml-3 text-gray-700">{range}</span>
              </label>
            ))}
          </div>

          {/* Sizes */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Size</h4>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 border border-gray-200 rounded-md hover:border-black hover:bg-black hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="mb-8">
            <h4 className="font-medium mb-4">Color</h4>
            <div className="flex flex-wrap gap-3">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full ${color.class} focus:ring-2 ring-offset-2 ring-black`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
