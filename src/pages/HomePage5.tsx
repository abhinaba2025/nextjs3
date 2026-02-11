import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Clock, Tag } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage5 - Marketplace Style
export default function HomePage5() {
  const { addToCart } = useCart();
  const trendingProducts = products.slice(0, 8);
  const dealProducts = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-sm">
          <Tag className="w-4 h-4" />
          <span>Flash Sale! Up to 50% OFF - Limited Time Only</span>
          <Link to="/shop" className="underline font-semibold">Shop Now</Link>
        </div>
      </div>

      {/* Hero with Multiple Banners */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Banner */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 relative rounded-2xl overflow-hidden h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200"
                alt="Main Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="p-10">
                  <span className="inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
                    New Arrival
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                    Mega Sale
                    <span className="block text-orange-400">Up to 50% OFF</span>
                  </h1>
                  <p className="text-gray-300 mb-6 max-w-md">
                    Shop the best deals on electronics, fashion, and more!
                  </p>
                  <Link
                    to="/shop"
                    className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Shop Now <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Side Banners */}
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden h-[190px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
                  alt="Electronics"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">Electronics</h3>
                    <Link to="/shop/electronics" className="text-orange-400 text-sm hover:underline">
                      Shop Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="relative rounded-2xl overflow-hidden h-[190px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=600"
                  alt="Fashion"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">Fashion</h3>
                    <Link to="/shop/fashion" className="text-orange-400 text-sm hover:underline">
                      Shop Now →
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center overflow-x-auto gap-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/shop/${category.slug}`}
                  className="flex flex-col items-center gap-3 min-w-[100px] group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full overflow-hidden border-2 border-orange-500/30 group-hover:border-orange-500 transition-colors"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6">
            <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-white">Flash Deals</h2>
                <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-white" />
                  <span className="text-white font-mono font-bold">05:32:18</span>
                </div>
              </div>
              <Link to="/shop" className="text-white hover:underline flex items-center gap-1">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {dealProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden"
                >
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="relative aspect-square p-4">
                      <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{Math.round((1 - product.price / (product.originalPrice || product.price)) * 100)}%
                      </span>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl font-bold text-red-500">${product.price}</span>
                      <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                    >
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
            </div>
            <Link to="/shop" className="text-orange-500 hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="aspect-square p-4 bg-gray-50 dark:bg-gray-700">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <p className="text-xs text-orange-500 font-medium">{product.category}</p>
                  <h3 className="mt-1 font-medium text-gray-900 dark:text-white line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $50' },
              { icon: '🔄', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '🔒', title: 'Secure Payment', desc: '100% secure checkout' },
              { icon: '💬', title: '24/7 Support', desc: 'Dedicated support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm"
              >
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
