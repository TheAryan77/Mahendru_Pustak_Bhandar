import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useStore } from '../store';
import toast from 'react-hot-toast';

export default function ShoppingCart() {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart,
    getTotalPrice,
    getTotalItems
  } = useStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty! 🛒');
      return;
    }
    
    toast.success('Order placed successfully! 🎉\nThank you for shopping with us!', {
      duration: 4000,
      icon: '✨',
    });
    clearCart();
    toggleCart();
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <ShoppingBag className="h-6 w-6" />
                  <h2 className="text-xl font-bold">Your Cart</h2>
                  {totalItems > 0 && (
                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                      {totalItems} items
                    </span>
                  )}
                </div>
                <button
                  onClick={toggleCart}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Add some amazing books and stationary items to get started!
                  </p>
                  <button
                    onClick={toggleCart}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Continue Shopping 🛍️
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="bg-gray-50 rounded-xl p-4 relative"
                    >
                      <div className="flex items-start space-x-4">
                        {/* Product Image Placeholder */}
                        <div className="w-16 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">
                            {item.category === 'books' ? '📚' : '✏️'}
                          </span>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-gray-600 text-xs mt-1">
                            {item.subcategory}
                          </p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="font-bold text-primary-600">
                              ₹{item.price}
                            </span>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                <Minus className="h-3 w-3 text-gray-600" />
                              </button>
                              <span className="w-8 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                              >
                                <Plus className="h-3 w-3 text-gray-600" />
                              </button>
                            </div>
                          </div>
                          
                          {/* Subtotal */}
                          <div className="text-right mt-2">
                            <span className="text-sm font-semibold text-gray-800">
                              Subtotal: ₹{item.price * item.quantity}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                            toast.success('Item removed from cart');
                          }}
                          className="absolute top-2 right-2 p-1 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}

                  {/* Clear Cart Button */}
                  {cart.length > 0 && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onClick={() => {
                        clearCart();
                        toast.success('Cart cleared');
                      }}
                      className="w-full mt-6 py-2 text-red-600 border border-red-200 rounded-lg hover:bg-red-50 transition-colors duration-200 text-sm font-medium"
                    >
                      Clear Cart 🗑️
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            {/* Footer / Checkout */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                {/* Total */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal ({totalItems} items)</span>
                    <span>₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">FREE 🚚</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>₹{Math.floor(totalPrice * 0.18)}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary-600">
                      ₹{totalPrice + Math.floor(totalPrice * 0.18)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Proceed to Checkout</span>
                  <span className="text-xl">💳</span>
                </motion.button>

                {/* Continue Shopping */}
                <button
                  onClick={toggleCart}
                  className="w-full mt-3 py-3 text-gray-600 font-medium hover:text-gray-800 transition-colors duration-200"
                >
                  Continue Shopping 🛍️
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
