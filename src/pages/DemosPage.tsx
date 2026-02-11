import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

// Demos Page - Showcase all homepage variations
export default function DemosPage() {
  const demos = [
    {
      id: 1,
      name: 'Default',
      description: 'Modern eCommerce with animated hero, featured products, and testimonials',
      image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600',
      path: '/',
      tags: ['Modern', 'Animated', 'Colorful'],
    },
    {
      id: 2,
      name: 'Minimal Clean',
      description: 'Minimalist design with clean typography and whitespace',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600',
      path: '/demo/minimal',
      tags: ['Minimal', 'Clean', 'Elegant'],
    },
    {
      id: 3,
      name: 'Luxury Fashion',
      description: 'Dark luxury theme with gold accents and premium feel',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600',
      path: '/demo/luxury',
      tags: ['Dark', 'Luxury', 'Fashion'],
    },
    {
      id: 4,
      name: 'Tech Futuristic',
      description: 'Futuristic design with gradients and tech aesthetics',
      image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600',
      path: '/demo/tech',
      tags: ['Tech', 'Futuristic', 'Gradient'],
    },
    {
      id: 5,
      name: 'Marketplace',
      description: 'Multi-vendor marketplace style with flash deals',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600',
      path: '/demo/marketplace',
      tags: ['Marketplace', 'Deals', 'Vibrant'],
    },
    {
      id: 6,
      name: 'Dark Premium',
      description: 'Premium dark theme with emerald accents',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600',
      path: '/demo/dark-premium',
      tags: ['Dark', 'Premium', 'Modern'],
    },
    {
      id: 7,
      name: 'Colorful Playful',
      description: 'Fun and colorful design with playful animations',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600',
      path: '/demo/colorful',
      tags: ['Colorful', 'Playful', 'Fun'],
    },
    {
      id: 8,
      name: 'Magazine Editorial',
      description: 'Editorial style with serif typography and magazine layout',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600',
      path: '/demo/editorial',
      tags: ['Editorial', 'Magazine', 'Serif'],
    },
    {
      id: 9,
      name: 'Split Screen',
      description: 'Bold split-screen layout with contrasting sections',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600',
      path: '/demo/split',
      tags: ['Split', 'Bold', 'Creative'],
    },
    {
      id: 10,
      name: 'Video Background',
      description: 'Cinematic design with video background elements',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600',
      path: '/demo/video',
      tags: ['Video', 'Cinematic', 'Dynamic'],
    },
    {
      id: 11,
      name: 'Masonry Grid',
      description: 'Pinterest-style masonry layout with filtering',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600',
      path: '/demo/masonry',
      tags: ['Masonry', 'Grid', 'Pinterest'],
    },
    {
      id: 12,
      name: 'Modern App',
      description: 'App-style design with smooth transitions and cards',
      image: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600',
      path: '/demo/app',
      tags: ['App', 'Modern', 'Gradient'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-widest text-sm">
            Homepage Demos
          </span>
          <h1 className="mt-4 text-5xl font-bold text-gray-900 dark:text-white">
            12 Stunning Homepages
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Choose from our collection of beautifully designed homepage templates,
            each with unique style and features.
          </p>
        </motion.div>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                {/* Preview Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={demo.image}
                    alt={demo.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Link
                      to={demo.path}
                      className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold transform scale-90 group-hover:scale-100 transition-transform"
                    >
                      <Eye className="w-5 h-5" />
                      Preview
                    </Link>
                  </div>
                  {/* Demo Number */}
                  <div className="absolute top-4 left-4 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    {demo.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{demo.name}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">{demo.description}</p>
                  
                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Link
                    to={demo.path}
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    View Demo <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-4 text-indigo-100 max-w-xl mx-auto">
              Choose your favorite homepage design and start building your dream eCommerce store today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                Browse Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
