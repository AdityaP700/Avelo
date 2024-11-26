import React from 'react';

const products = [
  {
    id: 1,
    name: 'Silk Evening Dress',
    price: '$289',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976'
  },
  {
    id: 2,
    name: 'Tailored Blazer',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1548624149-f20d8aa1b3c6?q=80&w=1974'
  },
  {
    id: 3,
    name: 'Cashmere Sweater',
    price: '$159',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964'
  }
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">Featured Collection</h2>
          <p className="text-gray-600">Curated pieces for the modern woman</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-black text-white py-2 hover:bg-gray-800 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;