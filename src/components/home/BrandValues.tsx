import React from 'react';
import { Leaf, Heart, Star, Sparkles } from 'lucide-react';

const BrandValues = () => {
  const values = [
    {
      icon: <Sparkles className="w-8 h-8 text-purple-600" />,
      title: "Be Uniquely You",
      description: "Express your authentic self through fashion that celebrates individuality ✨"
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Planet-First Fashion",
      description: "Sustainable practices and eco-friendly materials for a better tomorrow 🌍"
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-600" />,
      title: "Every Body is Beautiful",
      description: "Inclusive styles that celebrate and empower all body types 💖"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Premium Quality",
      description: "Luxurious materials and expert craftsmanship that last 💫"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            More than just fashion - we're building a community that celebrates authenticity, 
            sustainability, and self-expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
