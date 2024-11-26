import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'New Arrivals', href: '/new-arrivals' },
      { name: 'Best Sellers', href: '/best-sellers' },
      { name: 'Sale', href: '/sale' },
      { name: 'Collections', href: '/collections' },
      { name: 'Gift Cards', href: '/gift-cards' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ],
    social: [
      { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/avelo' },
      { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/avelo' },
      { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/avelo' },
      { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/avelo' },
      { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/avelo' }
    ]
  };

  return (
    <footer className="bg-cream">
      {/* Newsletter Section */}
      <div className="border-t border-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif text-charcoal mb-2">Join the Avelo Community</h3>
              <p className="text-stone">
                Be the first to receive exclusive offers and updates ✨
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-sand rounded-none focus:outline-none focus:border-accent-300"
              />
              <button className="px-6 py-3 bg-charcoal text-cream hover:bg-charcoal/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="block mb-6">
              <h2 className="text-3xl font-serif text-charcoal">Avelo</h2>
            </Link>
            <p className="text-stone mb-6 max-w-md">
              Empowering women with sustainable, authentic fashion that speaks to your unique style. 
              Making conscious shopping accessible and elegant. 🌿✨
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-accent-600" />
                <span className="text-stone">Los Angeles, CA 90012</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-600" />
                <a href="mailto:hello@avelo.com" className="text-stone hover:text-charcoal">
                  hello@avelo.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-600" />
                <a href="tel:+1234567890" className="text-stone hover:text-charcoal">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium text-charcoal mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-stone hover:text-charcoal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-charcoal mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-stone hover:text-charcoal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-charcoal mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-stone hover:text-charcoal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-sand mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone hover:text-charcoal transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <p className="text-stone text-sm">
              &copy; {currentYear} Avelo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
