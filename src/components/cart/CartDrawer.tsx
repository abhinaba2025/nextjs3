import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeFromCart, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b dark:border-slate-800">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                Shopping Cart
                <span className="text-sm font-normal text-slate-500">({items.length})</span>
              </h2>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Your cart is empty</h3>
                  <p className="text-slate-500 mb-6">Looks like you haven't added anything yet.</p>
                  <Link
                    to="/shop"
                    onClick={closeCart}
                    className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-slate-900 dark:text-white truncate">
                          {item.product.name}
                        </h3>
                        {item.selectedColor && (
                          <p className="text-sm text-slate-500">{item.selectedColor}</p>
                        )}
                        <p className="text-indigo-600 font-semibold mt-1">
                          ${(item.product.salePrice || item.product.price).toFixed(2)}
                        </p>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                              <Minus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </button>
                            <span className="w-8 text-center font-medium text-slate-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                              <Plus className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t dark:border-slate-800 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-slate-500">Shipping and taxes calculated at checkout</p>
                <div className="grid gap-3">
                  <Link
                    to="/checkout"
                    onClick={closeCart}
                    className="w-full py-3 bg-indigo-600 text-white text-center rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    Checkout
                  </Link>
                  <Link
                    to="/cart"
                    onClick={closeCart}
                    className="w-full py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center rounded-xl font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default CartDrawer;
