import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage9 - Split Screen Style
export default function HomePage9() {
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Split Hero */}
      <section className="min-h-screen grid lg:grid-cols-2 pt-20">
        {/* Left Panel */}
        <div className="relative bg-indigo-600 flex items-center justify-center p-12 order-2 lg:order-1">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent)]" />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative z-10 max-w-lg"
          >
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
              New Collection 2026
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Discover Your
              <span className="block">Unique Style</span>
            </h1>
            <p className="mt-6 text-indigo-100 text-lg">
              Explore our curated collection of premium products designed to elevate your everyday.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 font-semibold hover:bg-indigo-50 transition-colors"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Panel */}
        <div className="relative order-1 lg:order-2">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Hero"
            className="w-full h-full min-h-[50vh] lg:min-h-screen object-cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 p-6 shadow-xl max-w-xs"
          >
            <p className="text-3xl font-bold text-indigo-600">50%</p>
            <p className="text-gray-600 dark:text-gray-400">Off selected items this week only!</p>
          </motion.div>
        </div>
      </section>

      {/* Split Categories */}
      <section className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative h-[60vh] lg:h-[80vh] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800"
            alt="Women"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-12">
            <div>
              <h2 className="text-4xl font-bold text-white">Electronics</h2>
              <p className="mt-2 text-gray-300">Explore Latest Tech</p>
              <Link
                to="/shop/electronics"
                className="mt-6 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Electronics <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative h-[60vh] lg:h-[80vh] overflow-hidden group"
        >
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800"
            alt="Men"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-12">
            <div>
              <h2 className="text-4xl font-bold text-white">Fashion</h2>
              <p className="mt-2 text-gray-300">Discover New Styles</p>
              <Link
                to="/shop/fashion"
                className="mt-6 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                Shop Fashion <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Products Split Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-indigo-600 font-semibold uppercase tracking-widest text-sm">Featured</span>
              <h2 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
                Best Sellers
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
                Our most popular products loved by thousands of customers worldwide.
              </p>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-indigo-600 font-semibold hover:gap-4 transition-all"
              >
                View All Products <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group ${index % 3 === 0 ? 'col-span-2' : ''}`}
                >
                  <div className="bg-white dark:bg-gray-900 overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`${index % 3 === 0 ? 'aspect-video' : 'aspect-square'} bg-gray-100 dark:bg-gray-700 overflow-hidden`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                          <div className="flex items-center gap-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-xl font-bold text-indigo-600">${product.price}</p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="mt-4 w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 hover:bg-indigo-700 transition-colors"
                      >
                        <ShoppingBag className="w-5 h-5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split CTA */}
      <section className="grid lg:grid-cols-2 min-h-[60vh]">
        <div className="bg-gray-900 flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-lg text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Join Our Newsletter
            </h2>
            <p className="mt-4 text-gray-400">
              Get 15% off your first order when you subscribe to our newsletter.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-500"
              />
              <button className="bg-indigo-600 text-white px-8 py-4 font-semibold hover:bg-indigo-700 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800"
            alt="Newsletter"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50K+', label: 'Happy Customers' },
              { value: '10K+', label: 'Products' },
              { value: '50+', label: 'Countries' },
              { value: '99%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-indigo-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
