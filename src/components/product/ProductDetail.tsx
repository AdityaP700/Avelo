import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ShoppingBag, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { addToCart } from '../store/cartSlice';
import { Product } from '../types/product';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={`View ${i}`}
                  className="w-full h-full object-center object-cover cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-8">
            <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-medium">${product.price}</p>
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-4">Color</h3>
            <div className="flex space-x-3">
              {product.variants.color?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`
                    w-8 h-8 rounded-full border-2
                    ${selectedColor === color ? 'border-black' : 'border-transparent'}
                  `}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium">Size</h3>
              <button className="text-sm text-gray-600 underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.variants.size?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                    py-2 text-sm font-medium rounded-md
                    ${
                      selectedSize === size
                        ? 'bg-black text-white'
                        : 'bg-white border border-gray-200 hover:border-black'
                    }
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-4">Quantity</h3>
            <div className="flex items-center border border-gray-200 rounded-md w-32">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                -
              </button>
              <span className="flex-1 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-gray-600 hover:text-black"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex space-x-4 mb-8">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-900"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:border-black">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-3 border border-gray-200 rounded-lg hover:border-black">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-gray-200 pt-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Truck className="w-5 h-5 mr-3" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-3" />
                <span>Secure payment & money-back guarantee</span>
              </div>
              <div className="flex items-center">
                <RotateCcw className="w-5 h-5 mr-3" />
                <span>30-day free returns</span>
              </div>
            </div>
          </div>

          {/* Supplier Info */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="font-medium mb-4">Supplier Information</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <span className="font-medium">Location:</span> {product.supplier.location}
              </p>
              <p className="mb-2">
                <span className="font-medium">Processing Time:</span> {product.supplier.processingTime}
              </p>
              <p>
                <span className="font-medium">Estimated Delivery:</span> {product.shipping.estimatedDelivery}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
