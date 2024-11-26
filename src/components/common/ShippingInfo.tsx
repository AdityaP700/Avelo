import React from 'react';
import { Truck, Clock, Globe, Shield } from 'lucide-react';

const ShippingInfo = () => {
  const shippingFeatures = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Free Global Shipping",
      description: "On all orders over $50",
      highlight: "7-15 business days"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Express Delivery",
      description: "Fast shipping worldwide",
      highlight: "3-5 business days"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Tracking",
      description: "Real-time order tracking",
      highlight: "24/7 updates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Shopping",
      description: "100% secure payment",
      highlight: "Money-back guarantee"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Shipping Information</h2>
          <p className="text-gray-600">
            Fast and reliable shipping to your doorstep 🌍✈️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shippingFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full text-black">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-2">{feature.description}</p>
                <span className="text-sm font-medium bg-black text-white px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-medium mb-4">Shipping FAQ</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <span>How long does shipping take?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-600">
                Standard shipping takes 7-15 business days. Express shipping is available 
                for 3-5 business days delivery. Actual delivery time may vary based on 
                your location.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <span>Do you ship internationally?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-600">
                Yes! We ship to over 100+ countries worldwide. International orders may 
                be subject to customs duties and taxes.
              </p>
            </details>
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <span>What's your return policy?</span>
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-2 text-gray-600">
                We offer a 30-day return policy for all unused items in original packaging. 
                Return shipping is free for orders within the US.
              </p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
