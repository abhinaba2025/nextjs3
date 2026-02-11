import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import QuickView from '../components/product/QuickView';
import { products, Product } from '../data/products';

const ShopFashionPage = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [gridCols, setGridCols] = useState(3);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const fashionProducts = useMemo(() => {
    let filtered = products.filter(p => p.category === 'Fashion');

    filtered = filtered.filter(p => {
      const price = p.salePrice || p.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
    }

    return filtered;
  }, [sortBy, priceRange]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-20 pb-16">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&h=600&fit=crop"
          alt="Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 to-pink-900/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Fashion</h1>
            <p className="text-lg md:text-xl text-white/80 mb-4">
              Elevate your style with premium fashion
            </p>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="hover:text-rose-300 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-rose-300 transition-colors">Shop</Link>
              <span>/</span>
              <span className="text-rose-300">Fashion</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-64 flex-shrink-0"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
                Filters
              </h3>

              <div className="space-y-6">
                {/* Subcategories */}
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Categories</h4>
                  <div className="space-y-2">
                    {['All Fashion', 'Bags', 'Shoes', 'Accessories', 'Clothing', 'Jewelry'].map((sub) => (
                      <label key={sub} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" defaultChecked={sub === 'All Fashion'} className="w-4 h-4 rounded border-slate-300 text-rose-600 focus:ring-rose-500" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-rose-600 transition-colors">{sub}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Price Range</h4>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-rose-600"
                  />
                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mt-2">
                    <span>$0</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Sizes</h4>
                  <div className="flex flex-wrap gap-2">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        className="px-3 py-1 text-sm border border-slate-200 dark:border-slate-600 rounded-full hover:border-rose-500 hover:text-rose-600 transition-colors"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Colors</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Black', color: '#000' },
                      { name: 'White', color: '#fff' },
                      { name: 'Brown', color: '#8B4513' },
                      { name: 'Navy', color: '#1e3a5f' },
                      { name: 'Red', color: '#dc2626' },
                      { name: 'Pink', color: '#ec4899' },
                    ].map((c) => (
                      <button
                        key={c.name}
                        className="w-8 h-8 rounded-full border-2 border-slate-200 dark:border-slate-600 hover:border-rose-500 transition-colors"
                        style={{ backgroundColor: c.color }}
                        title={c.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="rating" className="w-4 h-4 border-slate-300 text-rose-600 focus:ring-rose-500" />
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="text-xs text-slate-500 ml-1">& up</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition-colors">
                Apply Filters
              </button>
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-sm">
              <p className="text-slate-600 dark:text-slate-400">
                Showing <span className="font-semibold text-rose-600">{fashionProducts.length}</span> products
              </p>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Best Rating</option>
                </select>

                <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
                  {[2, 3, 4].map((cols) => (
                    <button
                      key={cols}
                      onClick={() => setGridCols(cols)}
                      className={`p-2 rounded transition-colors ${
                        gridCols === cols
                          ? 'bg-white dark:bg-slate-600 text-rose-600 shadow-sm'
                          : 'text-slate-400 hover:text-slate-600'
                      }`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <motion.div
              layout
              className={`grid gap-6 ${
                gridCols === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                gridCols === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              }`}
            >
              <AnimatePresence mode="popLayout">
                {fashionProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard
                      product={product}
                      onQuickView={() => setQuickViewProduct(product)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {fashionProducts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  No products found matching your criteria.
                </p>
              </div>
            )}

            {/* View All Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-full transition-colors"
              >
                View All Products
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <QuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};

export default ShopFashionPage;
