import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { products } from '../data/products';

// HomePage3 - Luxury Fashion Style
export default function HomePage3() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const luxuryProducts = products.filter(p => p.category === 'Fashion').slice(0, 4);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600',
      subtitle: 'Haute Couture',
      title: 'Elegance Redefined',
      desc: 'Discover the new collection'
    },
    {
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600',
      subtitle: 'Fall/Winter 2024',
      title: 'Timeless Beauty',
      desc: 'Premium fashion essentials'
    },
    {
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600',
      subtitle: 'Exclusive Collection',
      title: 'Modern Classics',
      desc: 'Crafted with precision'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Full Screen Hero Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className={`absolute inset-0 ${currentSlide === index ? 'z-10' : 'z-0'}`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ delay: 0.3 }}
                  className="text-amber-400 uppercase tracking-[0.5em] text-sm"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 30 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 text-6xl lg:text-8xl font-serif"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ delay: 0.7 }}
                  className="mt-4 text-gray-300 text-lg"
                >
                  {slide.desc}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                  transition={{ delay: 0.9 }}
                  className="mt-10"
                >
                  <Link
                    to="/shop/fashion"
                    className="inline-flex items-center gap-3 border-2 border-amber-400 text-amber-400 px-10 py-4 uppercase tracking-wider text-sm hover:bg-amber-400 hover:text-black transition-all duration-300"
                  >
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-8">
          <button onClick={prevSlide} className="text-white/60 hover:text-white transition-colors">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <div className="flex gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-12 h-1 transition-colors ${currentSlide === index ? 'bg-amber-400' : 'bg-white/30'}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="text-white/60 hover:text-white transition-colors">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Marquee Banner */}
      <section className="py-6 bg-amber-400 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black uppercase tracking-widest text-sm font-medium">
              ★ Luxury Fashion ★ Premium Quality ★ Exclusive Designs ★ Limited Edition
            </span>
          ))}
        </motion.div>
      </section>

      {/* Split Section */}
      <section className="grid lg:grid-cols-2 min-h-screen">
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
            alt="Women Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-sm">Women</p>
              <h3 className="mt-2 text-4xl font-serif">New Arrivals</h3>
              <Link
                to="/shop/fashion"
                className="mt-6 inline-flex items-center gap-2 text-white uppercase tracking-wider text-sm hover:text-amber-400 transition-colors"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800"
            alt="Men Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-12">
            <div>
              <p className="text-amber-400 uppercase tracking-widest text-sm">Men</p>
              <h3 className="mt-2 text-4xl font-serif">Signature Pieces</h3>
              <Link
                to="/shop/fashion"
                className="mt-6 inline-flex items-center gap-2 text-white uppercase tracking-wider text-sm hover:text-amber-400 transition-colors"
              >
                Shop Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 bg-[#111]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">Featured</p>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif">Editor's Choice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {luxuryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-gray-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="text-white uppercase tracking-wider text-sm border border-white px-6 py-3">
                        Quick View
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-white font-medium">{product.name}</h3>
                    <p className="mt-2 text-amber-400">${product.price}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600"
          alt="Fashion Show"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 rounded-full bg-amber-400 flex items-center justify-center mb-8"
            >
              <Play className="w-10 h-10 text-black ml-1" fill="black" />
            </motion.button>
            <p className="text-white/60 uppercase tracking-widest text-sm">Watch</p>
            <h3 className="mt-2 text-4xl font-serif">The Making Of</h3>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <p className="text-amber-400 uppercase tracking-[0.3em] text-sm">Newsletter</p>
          <h2 className="mt-4 text-3xl font-serif">Join The Elite</h2>
          <p className="mt-4 text-gray-400">Subscribe to receive exclusive offers and early access to new collections.</p>
          <form className="mt-10 flex gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent border-b border-gray-700 py-4 text-white placeholder:text-gray-500 focus:border-amber-400 outline-none transition-colors"
            />
            <button className="text-amber-400 uppercase tracking-wider text-sm hover:text-amber-300 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
