import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronRight } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage8 - Magazine/Editorial Style
export default function HomePage8() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#f5f3f0] dark:bg-gray-900">
      {/* Editorial Hero */}
      <section className="min-h-screen relative pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Left Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-4"
            >
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">Issue 01</span>
              <h1 className="mt-6 text-6xl lg:text-8xl font-serif text-gray-900 dark:text-white leading-none">
                The Art of
                <span className="block italic">Dressing</span>
              </h1>
              <p className="mt-8 text-gray-600 dark:text-gray-400 leading-relaxed">
                Explore our editorial selection featuring the season's most coveted pieces. 
                Curated with intention, designed for expression.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-3 text-gray-900 dark:text-white font-medium border-b-2 border-gray-900 dark:border-white pb-1 hover:gap-5 transition-all"
              >
                Explore Collection <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800"
                    alt="Editorial"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-6 shadow-xl"
                >
                  <p className="text-5xl font-serif text-gray-900 dark:text-white">2024</p>
                  <p className="text-sm text-gray-500 uppercase tracking-widest">Collection</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400"
                  alt="Featured"
                  className="w-full aspect-square object-cover"
                />
                <p className="mt-4 text-sm text-gray-500 uppercase tracking-widest">Featured</p>
                <h3 className="mt-1 text-xl font-serif text-gray-900 dark:text-white">Summer Essentials</h3>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400"
                  alt="Trending"
                  className="w-full aspect-square object-cover"
                />
                <p className="mt-4 text-sm text-gray-500 uppercase tracking-widest">Trending</p>
                <h3 className="mt-1 text-xl font-serif text-gray-900 dark:text-white">Modern Classics</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Editorial */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">Categories</span>
              <h2 className="mt-4 text-5xl font-serif text-gray-900 dark:text-white">
                Curated <span className="italic">Collections</span>
              </h2>
            </div>
            <div className="flex items-end">
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Each collection is thoughtfully curated to help you discover pieces that resonate 
                with your personal style.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/shop/${category.slug}`}
                  className="group flex items-center justify-between py-8 border-b border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-8">
                    <span className="text-sm text-gray-400 font-mono">0{index + 1}</span>
                    <h3 className="text-4xl font-serif text-gray-900 dark:text-white group-hover:italic transition-all">
                      {category.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-gray-500 hidden md:block">
                      {products.filter(p => p.category === category.name).length} Products
                    </span>
                    <div className="w-24 h-24 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid Editorial */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">Products</span>
              <h2 className="mt-4 text-5xl font-serif text-gray-900 dark:text-white">
                Editor's <span className="italic">Picks</span>
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-gray-900 dark:text-white font-medium border-b border-gray-900 dark:border-white pb-1 hover:gap-4 flex items-center gap-2 transition-all"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to={`/product/${product.slug}`} className="block">
                  <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Link>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest">{product.category}</p>
                    <h3 className="mt-1 text-xl font-serif text-gray-900 dark:text-white">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-serif text-gray-900 dark:text-white">${product.price}</p>
                    <button
                      onClick={() => addToCart(product)}
                      className="mt-2 text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white underline transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-4xl lg:text-6xl font-serif italic leading-tight">
              "Style is a way to say who you are without having to speak."
            </p>
            <footer className="mt-8 text-gray-400">— Rachel Zoe</footer>
          </motion.blockquote>
        </div>
      </section>

      {/* Newsletter Editorial */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-gray-500">Newsletter</span>
            <h2 className="mt-4 text-4xl font-serif text-gray-900 dark:text-white">
              Join <span className="italic">The List</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Subscribe to receive editorial updates, exclusive offers, and style inspiration.
            </p>
            <form className="mt-10 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-transparent border-b-2 border-gray-300 dark:border-gray-600 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 focus:border-gray-900 dark:focus:border-white outline-none transition-colors"
              />
              <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
