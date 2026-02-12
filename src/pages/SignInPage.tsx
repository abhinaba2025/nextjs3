import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Check, AlertCircle } from 'lucide-react';

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Demo validation
    if (formData.email === 'demo@shopnex.com' && formData.password === 'demo123') {
      alert('Sign in successful! (Demo)');
    } else {
      setError('Invalid email or password. Try demo@shopnex.com / demo123');
    }
    setIsLoading(false);
  };

  const socialLogins = [
    { name: 'Google', icon: '/images/logos/google.svg', color: 'hover:border-red-400', bgColor: 'hover:bg-red-50 dark:hover:bg-red-900/20' },
    { name: 'Facebook', icon: '/images/logos/facebook.svg', color: 'hover:border-blue-400', bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20' },
    { name: 'Apple', icon: '/images/logos/apple.svg', color: 'hover:border-gray-600', bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-800' }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-28 lg:pt-8 bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <img src="/images/logos/logo-icon.svg" alt="ShopNex" className="h-10 w-10" />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Shop<span className="text-indigo-600">Nex</span>
            </span>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to access your account and continue shopping
            </p>
          </div>

          {/* Demo Credentials Info */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 mb-6"
          >
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              <strong>Demo Credentials:</strong><br />
              Email: demo@shopnex.com<br />
              Password: demo123
            </p>
          </motion.div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl p-4 mb-6 flex items-center gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-500" />
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${
                    rememberMe
                      ? 'bg-indigo-600 border-indigo-600'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {rememberMe && <Check className="w-3 h-3 text-white" />}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-indigo-700 hover:to-violet-700 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-3 gap-3">
            {socialLogins.map((social) => (
              <motion.button
                key={social.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-center gap-2 py-3 border border-gray-300 dark:border-gray-600 rounded-xl transition-all ${social.color} ${social.bgColor}`}
              >
                <span className="text-xl">
                  {social.name === 'Google' && '🔴'}
                  {social.name === 'Facebook' && '🔵'}
                  {social.name === 'Apple' && '⚫'}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Sign Up Link */}
          <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <Link
              to="/sign-up"
              className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold"
            >
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Image & Features */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-12 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-white rounded-full" />
          <div className="absolute top-32 right-20 w-60 h-60 border border-white rounded-full" />
          <div className="absolute bottom-20 left-32 w-32 h-32 border border-white rounded-full" />
          <div className="absolute bottom-40 right-40 w-48 h-48 border border-white rounded-full" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-20 h-20 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-4xl">🛒</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 left-20 w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-3xl">⚡</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 left-32 w-14 h-14 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center"
        >
          <span className="text-2xl">💎</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-white relative z-10 max-w-md"
        >
          <h2 className="text-4xl font-bold mb-6">
            Welcome to ShopNex
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Sign in to enjoy exclusive deals, track your orders, and get personalized recommendations.
          </p>

          {/* Features */}
          <div className="space-y-4 text-left">
            {[
              { icon: '🎁', text: 'Exclusive member discounts' },
              { icon: '🚚', text: 'Track your orders in real-time' },
              { icon: '❤️', text: 'Save your favorite items' },
              { icon: '⭐', text: 'Earn rewards on every purchase' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
              >
                <span className="text-2xl">{feature.icon}</span>
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;
