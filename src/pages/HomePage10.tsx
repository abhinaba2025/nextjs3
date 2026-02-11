import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, ShoppingBag, Pause } from 'lucide-react';
import { useState } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage10 - Video Background Style
export default function HomePage10() {
  const { addToCart } = useCart();
  const [isPlaying, setIsPlaying] = useState(true);
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Hero */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Video Background (using image as fallback) */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920"
            alt="Background"
            className={`w-full h-full object-cover ${isPlaying ? 'animate-pulse' : ''}`}
            style={{ animationDuration: '10s' }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block text-amber-400 uppercase tracking-[0.5em] text-sm mb-6"
              >
                Welcome to ShopNex
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-8xl font-bold leading-none"
              >
                Experience
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                  Premium Shopping
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-xl text-gray-300 max-w-xl"
              >
                Discover a world of exceptional products curated for those who demand the best.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-6"
              >
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-10 py-5 font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all"
                >
                  Start Shopping
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="inline-flex items-center gap-3 border-2 border-white/30 px-8 py-5 font-semibold hover:bg-white/10 transition-colors"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  {isPlaying ? 'Pause' : 'Play'} Video
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Animated Categories */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="text-amber-400 uppercase tracking-widest text-sm">Categories</span>
            <h2 className="mt-4 text-5xl font-bold">Explore Collections</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <Link to={`/shop/${category.slug}`} className="group block relative h-[400px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-20 h-20 rounded-full bg-amber-500/20 flex items-center justify-center mb-6"
                    >
                      <Play className="w-8 h-8 text-amber-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-white">{category.name}</h3>
                    <p className="mt-2 text-gray-400">
                      {products.filter(p => p.category === category.name).length} Products
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore Now <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-amber-400 uppercase tracking-widest text-sm">Products</span>
              <h2 className="mt-4 text-5xl font-bold">Featured Items</h2>
            </div>
            <Link
              to="/shop"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-2 font-semibold"
            >
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative bg-gray-800 overflow-hidden">
                  <div className="aspect-square p-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-amber-500 text-black text-xs font-bold px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.05 }}
                    className="absolute bottom-4 left-4 right-4 bg-amber-500 text-black py-3 font-bold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all"
                    onClick={() => addToCart(product)}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                </div>
                <div className="mt-4">
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <h3 className="mt-1 font-semibold text-white">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>
                    <p className="text-xl font-bold text-amber-400">${product.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1920"
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-8"
            >
              <Play className="w-10 h-10 text-black ml-1" fill="black" />
            </motion.button>
            <h2 className="text-5xl font-bold">Watch Our Story</h2>
            <p className="mt-4 text-gray-400 max-w-xl mx-auto">
              Discover the passion and craftsmanship behind every product in our collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black">Get Exclusive Access</h2>
            <p className="mt-4 text-black/70">
              Subscribe to our newsletter and be the first to know about new collections and exclusive offers.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black/10 border-2 border-black/20 rounded-none px-6 py-4 text-black placeholder:text-black/50 focus:outline-none focus:border-black"
              />
              <button className="bg-black text-amber-400 px-8 py-4 font-bold hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
