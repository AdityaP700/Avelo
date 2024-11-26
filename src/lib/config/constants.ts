export const APP_CONFIG = {
  name: 'Avelo',
  description: 'Premium Women\'s Fashion',
  location: 'Asansol, West Bengal, India',
  contact: {
    email: 'hello@avelo.com',
    phone: '+91 1234567890',
    address: 'Asansol, West Bengal, India'
  },
  social: {
    instagram: 'https://instagram.com/avelo',
    twitter: 'https://twitter.com/avelo',
    facebook: 'https://facebook.com/avelo'
  }
};

export const SHIPPING_CONFIG = {
  freeShippingThreshold: 5000, // in INR
  standardShipping: {
    price: 150,
    duration: '5-7 business days'
  },
  expressShipping: {
    price: 350,
    duration: '2-3 business days'
  }
};

export const CURRENCY = {
  code: 'INR',
  symbol: '₹'
};
