import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

// HomePage6 - Dark Premium Style
export default function HomePage6() {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const premiumProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920"
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-emerald-400 uppercase tracking-[0.5em] text-sm"
              >
                Premium Collection
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-6xl lg:text-8xl font-bold leading-none"
              >
                Elevate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  Your Style
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-8 text-xl text-gray-400 max-w-lg"
              >
                Discover curated collections of premium products designed for those who appreciate excellence.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-10 flex gap-4"
              >
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 font-semibold hover:bg-emerald-400 transition-colors"
                >
                  Explore Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 border border-white/30 px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-20 right-10 hidden lg:block"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 space-y-4">
            {[
              { value: '15K+', label: 'Products' },
              { value: '99%', label: 'Satisfaction' },
              { value: '50+', label: 'Countries' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-emerald-400">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Categories Showcase */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-emerald-400 uppercase tracking-widest text-sm">Browse</span>
            <h2 className="mt-4 text-4xl font-bold">Shop By Category</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/shop/${category.slug}`} className="group block relative h-[400px] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{products.filter(p => p.category === category.name).length} Products</p>
                    <span className="inline-flex items-center gap-2 text-emerald-400 group-hover:gap-4 transition-all">
                      Explore <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-emerald-400 uppercase tracking-widest text-sm">Featured</span>
              <h2 className="mt-4 text-4xl font-bold">Best Sellers</h2>
            </div>
            <Link to="/shop" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#1a1a1a] overflow-hidden">
                  <div className="aspect-square p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => addToWishlist(product)}
                      className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                    >
                      <Heart className="w-5 h-5" />
                    </motion.button>
                    <Link
                      to={`/product/${product.slug}`}
                      className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </Link>
                  </div>
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-emerald-500 text-black text-xs font-bold px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="mt-6">
                  <p className="text-gray-500 text-sm">{product.category}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{product.name}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-emerald-400 fill-emerald-400' : 'text-gray-600'}`}
                      />
                    ))}
                    <span className="text-gray-500 text-sm">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-white">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-emerald-500 text-black p-3 hover:bg-emerald-400 transition-colors"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600"
              alt="CTA"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center max-w-2xl px-4"
              >
                <span className="text-emerald-400 uppercase tracking-widest text-sm">Exclusive Offer</span>
                <h2 className="mt-6 text-5xl font-bold">Get 20% Off</h2>
                <p className="mt-4 text-gray-300">
                  Sign up for our newsletter and receive an exclusive 20% discount on your first order.
                </p>
                <form className="mt-8 flex gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                  <button className="bg-emerald-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 transition-colors">
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
