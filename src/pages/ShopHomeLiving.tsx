import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Grid3X3, List, SlidersHorizontal, ChevronDown, Home, Sofa, Lamp, Flower2 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const ShopHomeLiving = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilters, setShowFilters] = useState(false);

  const homeLivingProducts = useMemo(() => {
    let filtered = products.filter(p => p.category === 'Home & Living');

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered = [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        filtered = [...filtered].sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    return filtered;
  }, [sortBy, priceRange]);

  const subCategories = [
    { name: 'All Home & Living', icon: Home, count: homeLivingProducts.length },
    { name: 'Furniture', icon: Sofa, count: 4 },
    { name: 'Lighting', icon: Lamp, count: 2 },
    { name: 'Decor', icon: Flower2, count: 5 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&h=800&fit=crop"
            alt="Home & Living"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/80 via-amber-800/60 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white"
          >
            <div className="flex items-center gap-2 text-amber-200 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
              <span>/</span>
              <span>Home & Living</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Home & Living
            </h1>
            <p className="text-xl text-amber-100 mb-6">
              Transform your space with our curated collection of furniture, decor, and home essentials.
            </p>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                {homeLivingProducts.length} Products
              </span>
              <span className="px-4 py-2 bg-amber-500 rounded-full text-sm font-medium">
                Up to 30% Off
              </span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-10 bottom-10 hidden lg:block"
        >
          <div className="w-32 h-32 bg-amber-400/30 rounded-full blur-2xl" />
        </motion.div>
      </section>

      {/* Sub-categories */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {subCategories.map((cat, index) => (
              <motion.button
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                  index === 0
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-amber-100 dark:hover:bg-amber-900/30'
                }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="font-medium">{cat.name}</span>
                <span className={`text-sm px-2 py-0.5 rounded-full ${
                  index === 0 ? 'bg-white/20' : 'bg-gray-200 dark:bg-gray-600'
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Filters</h3>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Price Range</h4>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-amber-500"
                    />
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Room Type */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Room Type</h4>
                  <div className="space-y-2">
                    {['Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'].map((room) => (
                      <label key={room} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-amber-500 rounded" />
                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-amber-500 transition-colors">
                          {room}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Material */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Material</h4>
                  <div className="space-y-2">
                    {['Wood', 'Metal', 'Fabric', 'Ceramic', 'Glass'].map((material) => (
                      <label key={material} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-amber-500 rounded" />
                        <span className="text-gray-600 dark:text-gray-400 group-hover:text-amber-500 transition-colors">
                          {material}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Style */}
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">Style</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Modern', 'Scandinavian', 'Bohemian', 'Minimalist', 'Industrial'].map((style) => (
                      <button
                        key={style}
                        className="px-3 py-1 text-sm rounded-full border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.aside>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters
                  </button>
                  <p className="text-gray-600 dark:text-gray-400">
                    Showing <span className="font-medium text-gray-900 dark:text-white">{homeLivingProducts.length}</span> products
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 pr-10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Top Rated</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>

                  {/* View Mode */}
                  <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 shadow">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-amber-500 text-white'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Grid3X3 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list'
                          ? 'bg-amber-500 text-white'
                          : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products */}
              {homeLivingProducts.length > 0 ? (
                <motion.div
                  layout
                  className={`grid gap-6 ${
                    viewMode === 'grid'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-1'
                  }`}
                >
                  {homeLivingProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="text-center py-16">
                  <Home className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    No products found
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                </div>
              )}

              {/* Room Inspiration Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Room Inspiration
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { 
                      title: 'Modern Living Room',
                      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
                      products: 12
                    },
                    { 
                      title: 'Cozy Bedroom',
                      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                      products: 8
                    },
                    { 
                      title: 'Minimalist Kitchen',
                      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
                      products: 10
                    }
                  ].map((room, index) => (
                    <motion.div
                      key={room.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer"
                    >
                      <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{room.title}</h3>
                        <p className="text-amber-300">{room.products} products</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Home Decor Tips & Exclusive Offers
            </h2>
            <p className="text-amber-100 mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter for interior design inspiration and early access to sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-full hover:bg-amber-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShopHomeLiving;
