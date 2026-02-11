import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, Wifi, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

// HomePage4 - Tech/Futuristic Style
export default function HomePage4() {
  const techProducts = products.filter(p => p.category === 'Electronics');
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-hidden">
      {/* Futuristic Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-indigo-500 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
          {/* Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full px-4 py-2 text-indigo-400 text-sm mb-8"
              >
                <Zap className="w-4 h-4" />
                Next-Gen Technology
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                The Future
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Is Now
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-lg text-gray-400 max-w-md"
              >
                Experience cutting-edge technology with our premium collection of electronics and gadgets.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  to="/shop/electronics"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 rounded-lg font-medium overflow-hidden"
                >
                  <span className="relative z-10">Explore Tech</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-3 border border-gray-700 px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition-colors"
                >
                  View All Products
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 grid grid-cols-3 gap-8"
              >
                {[
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '99%', label: 'Satisfaction' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-square">
                {/* Glowing Ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="w-[90%] h-[90%] rounded-full border border-indigo-500/30"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent, rgba(99,102,241,0.3), transparent)',
                    }}
                  />
                </div>
                <div className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800"
                    alt="Tech Product"
                    className="w-full h-full object-cover opacity-90"
                  />
                </div>
                {/* Floating Elements */}
                {[Cpu, Wifi, Shield].map((Icon, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-gray-900 border border-gray-800 p-3 rounded-xl shadow-xl"
                    style={{
                      top: `${20 + i * 30}%`,
                      right: i % 2 === 0 ? '-5%' : 'auto',
                      left: i % 2 !== 0 ? '-5%' : 'auto',
                    }}
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  >
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Fast Performance', desc: 'Lightning-quick processing' },
              { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security' },
              { icon: Wifi, title: 'Connected', desc: 'Always stay connected' },
              { icon: Cpu, title: 'Smart AI', desc: 'AI-powered features' },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-indigo-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-indigo-400 uppercase tracking-wider text-sm mb-2">Products</p>
              <h2 className="text-4xl font-bold">Featured Tech</h2>
            </div>
            <Link
              to="/shop/electronics"
              className="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-indigo-500/50 transition-colors">
                  <div className="aspect-square p-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 bg-gray-900/80 backdrop-blur">
                    <p className="text-indigo-400 text-sm mb-1">{product.category}</p>
                    <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        ${product.price}
                      </p>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 p-12 lg:p-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Ready to upgrade your tech?
              </h2>
              <p className="mt-4 text-indigo-100 text-lg">
                Get 20% off your first order when you sign up for our newsletter.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-[250px] px-6 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
                />
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
