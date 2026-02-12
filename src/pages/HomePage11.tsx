import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Grid, List, Filter } from 'lucide-react';
import { useState } from 'react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage11 - Masonry/Grid Style
export default function HomePage11() {
  const { addToCart } = useCart();
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const allProducts = products;

  const getMasonryHeight = (index: number) => {
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88', 'h-64'];
    return heights[index % heights.length];
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Modern Hero with Masonry Preview */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-violet-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
                ✨ New Collection Available
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Discover
                <span className="block">Endless Possibilities</span>
              </h1>
              <p className="mt-6 text-violet-100 text-lg max-w-md">
                Explore our beautifully curated collection with thousands of products to choose from.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 bg-white text-violet-600 px-8 py-4 font-bold rounded-full hover:bg-violet-50 transition-colors"
                >
                  Browse All <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/shop/fashion"
                  className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  New Arrivals
                </Link>
              </div>
            </motion.div>

            {/* Masonry Preview */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="hidden lg:grid grid-cols-3 gap-4"
            >
              {allProducts.slice(0, 6).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`rounded-xl overflow-hidden ${index % 2 === 0 ? 'mt-8' : ''}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-white dark:bg-gray-800 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4 overflow-x-auto">
            <div className="flex gap-3">
              <Link
                to="/shop"
                className="px-6 py-3 rounded-full bg-violet-600 text-white font-medium whitespace-nowrap"
              >
                All Products
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop/${category.slug}`}
                  className="px-6 py-3 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-violet-100 text-violet-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg ${viewMode === 'masonry' ? 'bg-violet-100 text-violet-600' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <List className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg text-gray-400 hover:text-gray-600">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry/Grid Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {viewMode === 'masonry' ? (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {allProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="break-inside-avoid group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                    <Link to={`/product/${product.slug}`}>
                      <div className={`${getMasonryHeight(index)} overflow-hidden`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <div className="p-5">
                      <p className="text-sm text-violet-600 font-medium">{product.category}</p>
                      <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                    <Link to={`/product/${product.slug}`}>
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <div className="p-5">
                      <p className="text-sm text-violet-600 font-medium">{product.category}</p>
                      <h3 className="mt-1 font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <button
                          onClick={() => addToCart(product)}
                          className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-violet-700 transition-colors"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 text-center">
        <button className="inline-flex items-center gap-2 bg-violet-600 text-white px-10 py-4 rounded-full font-bold hover:bg-violet-700 transition-colors">
          Load More Products
        </button>
      </section>

      {/* Features */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { emoji: '🚀', title: 'Fast Delivery', desc: 'Free shipping on $50+' },
              { emoji: '💎', title: 'Premium Quality', desc: 'Curated products' },
              { emoji: '🔄', title: 'Easy Returns', desc: '30-day returns' },
              { emoji: '💬', title: '24/7 Support', desc: 'Always here to help' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl">{feature.emoji}</span>
                <h3 className="mt-4 font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
