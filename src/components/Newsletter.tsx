import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-4">Join the Aviro Community</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to receive exclusive updates, early access to new collections, and styling tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-white/30 focus:border-white focus:outline-none text-white placeholder-gray-400"
            />
            <button className="px-8 py-3 bg-white text-black hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;