import { motion } from 'framer-motion';
import { Truck, Package, RefreshCw, Clock, MapPin, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const ShippingReturnsPage = () => {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      time: '5-7 Business Days',
      price: 'Free on orders over $50',
      icon: Package,
    },
    {
      name: 'Express Shipping',
      time: '2-3 Business Days',
      price: '$9.99',
      icon: Truck,
    },
    {
      name: 'Next Day Delivery',
      time: '1 Business Day',
      price: '$19.99',
      icon: Clock,
    },
    {
      name: 'International Shipping',
      time: '7-14 Business Days',
      price: 'Calculated at checkout',
      icon: MapPin,
    },
  ];

  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log into your account and select the item you wish to return from your order history.',
    },
    {
      step: 2,
      title: 'Print Label',
      description: 'Download and print the prepaid return shipping label we provide.',
    },
    {
      step: 3,
      title: 'Pack & Ship',
      description: 'Pack the item securely in its original packaging and drop it off at any shipping location.',
    },
    {
      step: 4,
      title: 'Get Refund',
      description: 'Once we receive and inspect the item, your refund will be processed within 5-7 business days.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Truck className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shipping & Returns
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Fast, reliable shipping and hassle-free returns. Your satisfaction is our priority.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Shipping Options */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Shipping Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingOptions.map((option, index) => (
              <motion.div
                key={option.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-4">
                  <option.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {option.name}
                </h3>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">
                  {option.time}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {option.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Shipping Policy Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Shipping Policy
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Order Processing
                </h3>
                <p>
                  All orders are processed within 1-2 business days. Orders placed on weekends or holidays 
                  will be processed on the next business day. You will receive a confirmation email with 
                  tracking information once your order has shipped.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delivery Timeframes
                </h3>
                <p>
                  Delivery times are estimates and may vary based on location and carrier availability. 
                  During peak seasons or promotional periods, delivery may take longer than usual. 
                  We recommend placing orders early to ensure timely delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  International Shipping
                </h3>
                <p>
                  We ship to over 100 countries worldwide. International customers are responsible for 
                  any customs duties, taxes, or fees imposed by their country. These charges are not 
                  included in our shipping rates and will be collected upon delivery.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Tracking Your Order
                </h3>
                <p>
                  Once your order ships, you'll receive an email with a tracking number. You can use 
                  this number to track your package on the carrier's website or in your account dashboard.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Returns Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Easy Returns Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg h-full">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < returnSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Return Policy Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-indigo-600" />
              Return Policy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Eligible for Returns
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Items returned within 30 days of delivery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Unused items in original packaging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Items with tags still attached
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Defective or damaged items
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    Incorrect items received
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Not Eligible for Returns
                </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Items returned after 30 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Used or worn items
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Items without original packaging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Personalized or custom items
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    Final sale items
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Refund Information */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <Shield className="w-12 h-12 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Guarantee</h2>
                <p className="text-white/90 mb-4">
                  We stand behind the quality of our products. If you're not completely satisfied with 
                  your purchase, we'll make it right. Our customer service team is available 24/7 to 
                  assist you with any concerns.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">30</p>
                    <p className="text-white/80 text-sm">Day Returns</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">Free</p>
                    <p className="text-white/80 text-sm">Return Shipping</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold">24/7</p>
                    <p className="text-white/80 text-sm">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;
