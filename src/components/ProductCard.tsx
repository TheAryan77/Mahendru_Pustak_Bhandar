import { motion } from 'framer-motion';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useStore } from '../store';
import type { Product } from '../store';
import { useState } from 'react';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useStore();
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart! 🛒`, {
      icon: '✨',
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const categoryEmojis = {
    books: '📚',
    stationary: '✏️'
  };

  const subcategoryEmojis = {
    spiritual: '🕉️',
    novels: '📖',
    finance: '💰',
    'self-help': '🚀',
    notebooks: '📝',
    pens: '🖊️',
    art: '🎨',
    electronics: '🧮',
    office: '📁'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          {/* Placeholder for product image */}
          <div className="text-6xl">
            {categoryEmojis[product.category]}
          </div>
        </div>
        
        {/* Overlay actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-3"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
          >
            <Eye className="h-5 w-5 text-gray-700" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-colors duration-200"
          >
            <Heart 
              className={`h-5 w-5 transition-colors duration-200 ${
                isLiked ? 'text-red-500 fill-current' : 'text-gray-700'
              }`} 
            />
          </motion.button>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {subcategoryEmojis[product.subcategory as keyof typeof subcategoryEmojis]} {product.subcategory}
          </span>
        </div>

        {/* Stock status */}
        {product.inStock && (
          <div className="absolute top-3 right-3">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              ✅ In Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.rating} ({product.reviews} reviews)
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary-600">
              ₹{product.price}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ₹{Math.floor(product.price * 1.2)}
            </span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:from-primary-600 group-hover:to-secondary-600"
          >
            <ShoppingCart className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Quick add variants */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          className="mt-4 pt-4 border-t border-gray-100"
        >
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Quick Add:</span>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200">
                1
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200">
                2
              </button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-primary-100 rounded-full transition-colors duration-200">
                5
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
