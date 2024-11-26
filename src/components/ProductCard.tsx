import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingBag, Truck, Star } from 'lucide-react';
import { Product } from '../types/product';
import { addToCart } from '../store/cartSlice';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="group bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`} className="block relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.stock < 10 && (
          <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
            Only {product.stock} left
          </span>
        )}
      </Link>
      
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium mb-2">{product.name}</h3>
        </Link>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < product.rating ? "currentColor" : "none"}
                className={i < product.rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold">${product.price}</span>
          <div className="flex items-center text-green-600 text-sm">
            <Truck size={16} className="mr-1" />
            <span>Free Shipping</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <span>Ships from: {product.supplier.location}</span>
          </div>
          <div>
            Delivery: {product.shipping.estimatedDelivery}
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-black text-white py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
        >
          <ShoppingBag size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
