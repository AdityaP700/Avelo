import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
          alt="Hero fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-6xl font-serif text-white font-light mb-6">
              Elegance in Every Thread
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Discover our new collection of premium women's wear, crafted for the modern sophisticate.
            </p>
            <button className="group bg-white text-gray-900 px-6 py-3 flex items-center space-x-2 hover:bg-gray-100 transition-colors">
              <span>Shop Collection</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;