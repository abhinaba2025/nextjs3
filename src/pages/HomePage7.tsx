import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Heart } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage7 - Colorful/Playful Style
export default function HomePage7() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 8);

  const colors = [
    'from-pink-500 to-rose-500',
    'from-purple-500 to-indigo-500',
    'from-blue-500 to-cyan-500',
    'from-emerald-500 to-teal-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-pink-500',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Fun Gradient Hero */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/20 dark:via-purple-900/20 dark:to-blue-900/20 pt-20">
        {/* Floating Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r ${colors[i % colors.length]} opacity-20`}
              style={{
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-lg rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">New Summer Collection 2024</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight"
            >
              Shop With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                Joy & Colors
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Discover unique products that bring happiness to your life. Express yourself with our colorful collection!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Start Shopping <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                View Collections
              </Link>
            </motion.div>
          </div>

          {/* Floating Product Cards */}
          <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featuredProducts.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50, rotate: -5 + index * 5 }}
                animate={{ opacity: 1, y: 0, rotate: -5 + index * 5 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl"
              >
                <div className={`aspect-square p-6 bg-gradient-to-br ${colors[index]} bg-opacity-10`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-2">
                    ${product.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Colorful Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold uppercase tracking-widest"
            >
              Categories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-4xl font-black text-gray-900 dark:text-white"
            >
              Shop By Category
            </motion.h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/shop/${category.slug}`} className="block">
                  <div className={`relative h-80 rounded-3xl overflow-hidden bg-gradient-to-br ${colors[index]}`}>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover rounded-2xl opacity-80 mix-blend-overlay"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-3xl font-black drop-shadow-lg">{category.name}</h3>
                        <span className="inline-flex items-center gap-2 mt-4 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                          Shop Now <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold uppercase tracking-widest">
              Products
            </span>
            <h2 className="mt-4 text-4xl font-black text-gray-900 dark:text-white">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="relative aspect-square p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md z-10"
                    >
                      <Heart className="w-5 h-5 text-pink-500" />
                    </motion.button>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-purple-500 font-medium">{product.category}</p>
                    <h3 className="mt-1 font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-black text-gray-900 dark:text-white">${product.price}</span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className={`bg-gradient-to-r ${colors[index % colors.length]} text-white px-4 py-2 rounded-full text-sm font-bold`}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-shadow"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl p-12 text-center text-white"
          >
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-4xl font-black">Join the Fun!</h2>
            <p className="mt-4 text-white/80 max-w-md mx-auto">
              Subscribe to get exclusive offers, new arrivals, and special discounts.
            </p>
            <form className="mt-8 flex flex-wrap justify-center gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-[200px] bg-white/20 backdrop-blur border border-white/30 rounded-full px-6 py-4 text-white placeholder:text-white/70 focus:outline-none focus:border-white"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
