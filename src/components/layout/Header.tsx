import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Search, Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useTheme } from '@/context/ThemeContext';

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const homeDemos = [
    { name: 'Default Home', path: '/', icon: '🏠', description: 'Modern animated homepage' },
    { name: 'Minimal Clean', path: '/demo/minimal', icon: '✨', description: 'Clean minimalist design' },
    { name: 'Luxury Fashion', path: '/demo/luxury', icon: '💎', description: 'Dark luxury with gold accents' },
    { name: 'Tech Futuristic', path: '/demo/tech', icon: '🚀', description: 'Futuristic with gradients' },
    { name: 'Marketplace', path: '/demo/marketplace', icon: '🏪', description: 'Multi-vendor with flash deals' },
    { name: 'Dark Premium', path: '/demo/dark-premium', icon: '🌙', description: 'Premium dark with emerald' },
    { name: 'Colorful Playful', path: '/demo/colorful', icon: '🎨', description: 'Fun and colorful design' },
    { name: 'Magazine Editorial', path: '/demo/editorial', icon: '📰', description: 'Serif typography editorial' },
    { name: 'Split Screen', path: '/demo/split', icon: '◧', description: 'Bold split-screen layout' },
    { name: 'Video Background', path: '/demo/video', icon: '🎬', description: 'Cinematic video style' },
    { name: 'Masonry Grid', path: '/demo/masonry', icon: '🧱', description: 'Pinterest-style masonry' },
    { name: 'Modern App', path: '/demo/app', icon: '📱', description: 'App-style with cards' },
  ];

  const shopCategories = [
    { 
      name: 'All Products', 
      path: '/shop/all', 
      icon: '🛍️',
      description: 'Browse our complete collection'
    },
    { 
      name: 'Electronics', 
      path: '/shop/electronics', 
      icon: '📱',
      description: 'Latest gadgets & tech'
    },
    { 
      name: 'Fashion', 
      path: '/shop/fashion', 
      icon: '👗',
      description: 'Trending styles & accessories'
    },
    { 
      name: 'Sports', 
      path: '/shop/sports', 
      icon: '⚽',
      description: 'Gear up for performance'
    },
  ];

  const navLinks = [
    { name: 'Blog', path: '/blog' },
    { name: 'Magazine', path: '/magazine' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const helpLinks = [
    { name: 'FAQ', path: '/faq', icon: '❓', description: 'Frequently asked questions' },
    { name: 'Shipping & Returns', path: '/shipping-returns', icon: '📦', description: 'Delivery and return info' },
    { name: 'Privacy Policy', path: '/privacy-policy', icon: '🔒', description: 'How we protect your data' },
    { name: 'Terms of Service', path: '/terms-of-service', icon: '📄', description: 'Our terms and conditions' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-white dark:bg-slate-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-slate-900 dark:text-white">
                    Shop<span className="text-indigo-600">Nex</span>
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsHomeDropdownOpen(true)}
                onMouseLeave={() => setIsHomeDropdownOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname === '/' || location.pathname.startsWith('/demo')
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
                  }`}
                >
                  Home
                  <ChevronDown className={`w-4 h-4 transition-transform ${isHomeDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isHomeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 min-w-[600px]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-slate-900 dark:text-white">Homepage Demos</h3>
                          <Link
                            to="/demos"
                            onClick={() => setIsHomeDropdownOpen(false)}
                            className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                          >
                            View All →
                          </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {homeDemos.map((demo, index) => (
                            <Link
                              key={demo.path}
                              to={demo.path}
                              onClick={() => setIsHomeDropdownOpen(false)}
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                                className={`flex items-center gap-2 p-2.5 rounded-xl transition-colors group ${
                                  location.pathname === demo.path
                                    ? 'bg-indigo-50 dark:bg-indigo-950'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-700'
                                }`}
                              >
                                <span className="text-xl">{demo.icon}</span>
                                <div className="flex-1 min-w-0">
                                  <p className={`text-sm font-medium truncate transition-colors ${
                                    location.pathname === demo.path
                                      ? 'text-indigo-600 dark:text-indigo-400'
                                      : 'text-slate-900 dark:text-white group-hover:text-indigo-600'
                                  }`}>
                                    {demo.name}
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                                    {demo.description}
                                  </p>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Shop Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    location.pathname.startsWith('/shop')
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
                  }`}
                >
                  Shop
                  <ChevronDown className={`w-4 h-4 transition-transform ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isShopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 min-w-[320px]">
                        <div className="grid gap-2">
                          {shopCategories.map((category, index) => (
                            <Link
                              key={category.path}
                              to={category.path}
                              onClick={() => setIsShopDropdownOpen(false)}
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
                              >
                                <span className="text-2xl">{category.icon}</span>
                                <div>
                                  <p className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                    {category.name}
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {category.description}
                                  </p>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                          <Link
                            to="/shop"
                            onClick={() => setIsShopDropdownOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                          >
                            View All Categories
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Help Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsHelpDropdownOpen(true)}
                onMouseLeave={() => setIsHelpDropdownOpen(false)}
              >
                <motion.button
                  whileHover={{ y: -2 }}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    ['/faq', '/shipping-returns', '/privacy-policy', '/terms-of-service'].includes(location.pathname)
                      ? 'text-indigo-600'
                      : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
                  }`}
                >
                  Help
                  <ChevronDown className={`w-4 h-4 transition-transform ${isHelpDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {isHelpDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 p-4 min-w-[320px]">
                        <div className="grid gap-2">
                          {helpLinks.map((link, index) => (
                            <Link
                              key={link.path}
                              to={link.path}
                              onClick={() => setIsHelpDropdownOpen(false)}
                            >
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"
                              >
                                <span className="text-2xl">{link.icon}</span>
                                <div>
                                  <p className="font-medium text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                                    {link.name}
                                  </p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">
                                    {link.description}
                                  </p>
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map(link => (
                <Link key={link.path} to={link.path}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className={`text-sm font-medium transition-colors ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + '/')
                        ? 'text-indigo-600'
                        : 'text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
                    }`}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Search className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </motion.button>

              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </motion.button>

              {/* Wishlist */}
              <Link to="/wishlist">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <Heart className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  {wishlistItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                      {wishlistItems.length}
                    </span>
                  )}
                </motion.div>
              </Link>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleCart}
                className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800"
            >
              <nav className="px-4 py-4 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
                {/* Home Demos Section */}
                <div className="space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Homepage Demos
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {homeDemos.map((demo) => (
                      <Link
                        key={demo.path}
                        to={demo.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          location.pathname === demo.path
                            ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                            : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                        }`}
                      >
                        <span className="text-base">{demo.icon}</span>
                        <span className="text-sm truncate">{demo.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Shop Section */}
                <div className="space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Shop
                  </p>
                  {shopCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === category.path
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 border-t dark:border-slate-800 space-y-1">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Pages
                  </p>
                  <Link
                    to="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === '/blog' || location.pathname.startsWith('/blog/')
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg">📝</span> Blog
                  </Link>
                  <Link
                    to="/magazine"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === '/magazine' || location.pathname.startsWith('/magazine/')
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg">📰</span> Magazine
                  </Link>
                  <Link
                    to="/demos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === '/demos'
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg">✨</span> All Demos
                  </Link>
                  <Link
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === '/about'
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg">ℹ️</span> About
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      location.pathname === '/contact'
                        ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span className="text-lg">📧</span> Contact
                  </Link>
                </div>

                {/* Help Section */}
                <div className="space-y-1 pt-2 border-t dark:border-slate-800">
                  <p className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Help & Support
                  </p>
                  {helpLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="w-full max-w-2xl mx-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-4"
            >
              <div className="flex items-center gap-4">
                <Search className="w-6 h-6 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  autoFocus
                  className="flex-1 text-lg bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400"
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>
              {/* Quick Links */}
              <div className="mt-4 pt-4 border-t dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Quick Links</p>
                <div className="flex flex-wrap gap-2">
                  {shopCategories.map((cat) => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      onClick={() => setIsSearchOpen(false)}
                      className="px-3 py-1 text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900 dark:hover:text-indigo-400 transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
