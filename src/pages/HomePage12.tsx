import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, ShoppingCart, Heart, Zap, Truck, Shield } from 'lucide-react';
import { useState } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage12 - Modern App Style
export default function HomePage12() {
  const { addToCart } = useCart();
  const [currentProduct, setCurrentProduct] = useState(0);
  const featuredProducts = products.slice(0, 4);
  const allProducts = products;

  const nextProduct = () => setCurrentProduct((prev) => (prev + 1) % featuredProducts.length);
  const prevProduct = () => setCurrentProduct((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f]">
      {/* App-Style Hero */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-purple-50 to-teal-100 dark:from-rose-900/20 dark:via-purple-900/20 dark:to-teal-900/20" />
        
        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300/30 dark:bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-300/30 dark:bg-teal-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <Zap className="w-4 h-4" />
                Flash Sale - Up to 60% OFF
              </motion.span>
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Shop Smarter,
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-teal-500">
                  Live Better
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-md">
                Your one-stop shop for premium products with unbeatable prices and lightning-fast delivery.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-purple-500 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 transition-all"
                >
                  Start Shopping
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  View Deals
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 flex gap-12">
                {[
                  { value: '50K+', label: 'Products' },
                  { value: '100K+', label: 'Customers' },
                  { value: '4.9', label: 'Rating' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Product Carousel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProduct}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8"
                  >
                    <div className="relative h-2/3">
                      <img
                        src={featuredProducts[currentProduct].image}
                        alt={featuredProducts[currentProduct].name}
                        className="w-full h-full object-contain"
                      />
                      <button className="absolute top-0 right-0 w-12 h-12 bg-rose-50 dark:bg-rose-900/30 rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-100 transition-colors">
                        <Heart className="w-6 h-6" />
                      </button>
                    </div>
                    <div className="mt-6">
                      <p className="text-sm text-rose-500 font-medium">{featuredProducts[currentProduct].category}</p>
                      <h3 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">{featuredProducts[currentProduct].name}</h3>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(featuredProducts[currentProduct].rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({featuredProducts[currentProduct].reviews} reviews)</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">
                          ${featuredProducts[currentProduct].price}
                        </p>
                        <button
                          onClick={() => addToCart(featuredProducts[currentProduct])}
                          className="bg-gradient-to-r from-rose-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
                        >
                          <ShoppingCart className="w-5 h-5" />
                          Add
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
                  <button
                    onClick={prevProduct}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <div className="flex gap-2">
                    {featuredProducts.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentProduct(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentProduct === i ? 'bg-rose-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={nextProduct}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-semibold uppercase tracking-widest text-sm">Categories</span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">Shop By Category</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link
                  to={`/shop/${category.slug}`}
                  className="group block relative h-80 rounded-3xl overflow-hidden shadow-xl"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                    <p className="mt-2 text-gray-300">{products.filter(p => p.category === category.name).length} Products</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-rose-400 font-medium group-hover:gap-4 transition-all">
                      Shop Now <ArrowRight className="w-5 h-5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Horizontal Scroll */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-rose-500 font-semibold uppercase tracking-widest text-sm">Products</span>
              <h2 className="mt-4 text-4xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
            </div>
            <Link to="/shop" className="text-rose-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-72"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <Link to={`/product/${product.slug}`} className="block">
                    <div className="aspect-square p-6 bg-gray-50 dark:bg-gray-700">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain hover:scale-105 transition-transform"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <p className="text-sm text-rose-500 font-medium">{product.category}</p>
                    <h3 className="mt-1 font-bold text-gray-900 dark:text-white">{product.name}</h3>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-rose-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-rose-600 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $50', color: 'bg-blue-500' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout', color: 'bg-green-500' },
              { icon: Zap, title: 'Fast Delivery', desc: '2-3 business days', color: 'bg-orange-500' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-6 bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">{feature.title}</h3>
                  <p className="text-gray-500">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-24 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Shop Anytime, Anywhere
            </h2>
            <p className="mt-4 text-rose-100 text-lg max-w-xl mx-auto">
              Download our app and enjoy exclusive deals, easy checkout, and real-time order tracking.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-gray-900 transition-colors">
                <span className="text-2xl">🍎</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="font-bold">App Store</p>
                </div>
              </button>
              <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:bg-gray-900 transition-colors">
                <span className="text-2xl">🤖</span>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
