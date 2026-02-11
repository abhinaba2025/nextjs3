import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import { products, categories } from '../data/products';

// HomePage2 - Minimal Clean Style
export default function HomePage2() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Minimal Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                New Collection 2026
              </span>
              <h1 className="mt-4 text-6xl lg:text-8xl font-light text-gray-900 dark:text-white leading-none">
                Less is
                <span className="block font-semibold">More</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-md">
                Discover our curated collection of minimalist essentials designed for modern living.
              </p>
              <div className="mt-10 flex gap-4">
                <Link
                  to="/shop"
                  className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 text-sm uppercase tracking-wider hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 border border-gray-300 dark:border-gray-600 px-8 py-4 text-sm uppercase tracking-wider text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800"
                  alt="Fashion"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 p-6 shadow-xl"
              >
                <p className="text-4xl font-light text-gray-900 dark:text-white">30%</p>
                <p className="text-sm text-gray-500">Off First Order</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Categories */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 dark:text-white">Categories</h2>
              <p className="mt-2 text-gray-500">Explore our collections</p>
            </div>
            <Link to="/shop" className="text-sm uppercase tracking-wider text-gray-900 dark:text-white hover:underline">
              View All
            </Link>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 w-72"
              >
                <Link to={`/shop/${category.slug}`} className="group block">
                  <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{category.name}</h3>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white">Featured</h2>
            <p className="mt-2 text-gray-500">Handpicked for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="aspect-square bg-gray-100 dark:bg-gray-700 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-gray-900 dark:text-white">{product.name}</h3>
                    <p className="mt-1 text-gray-500">${product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-gray-900 dark:text-white uppercase tracking-wider text-sm hover:underline"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Large Banner */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative h-[70vh] bg-gray-100 dark:bg-gray-800 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600"
              alt="Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-center text-white"
              >
                <p className="text-sm uppercase tracking-[0.3em] mb-4">Limited Edition</p>
                <h2 className="text-5xl lg:text-7xl font-light mb-8">Summer Collection</h2>
                <Link
                  to="/shop/fashion"
                  className="inline-flex items-center gap-3 bg-white text-gray-900 px-10 py-4 uppercase tracking-wider text-sm hover:bg-gray-100 transition-colors"
                >
                  Discover Now
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over $100' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: RefreshCw, title: 'Easy Returns', desc: '30-day return policy' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-10 h-10 mx-auto text-gray-400" strokeWidth={1} />
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
