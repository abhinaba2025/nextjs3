import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, Search, ShoppingBag, Truck, CreditCard, RefreshCw, User, Shield } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  name: string;
  icon: React.ElementType;
  faqs: FAQItem[];
}

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Orders & Shipping');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqCategories: FAQCategory[] = [
    {
      name: 'Orders & Shipping',
      icon: Truck,
      faqs: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping typically takes 5-7 business days within the continental US. Express shipping delivers within 2-3 business days, and next-day delivery is available for orders placed before 2 PM EST. International shipping takes 7-14 business days depending on the destination.',
        },
        {
          question: 'How can I track my order?',
          answer: 'Once your order ships, you\'ll receive an email with a tracking number. You can use this number to track your package on the carrier\'s website, or log into your account and view your order status in the "Order History" section.',
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to over 100 countries worldwide! International shipping rates are calculated at checkout based on your location and the weight of your order. Please note that customers are responsible for any customs duties or taxes imposed by their country.',
        },
        {
          question: 'Can I change my shipping address after placing an order?',
          answer: 'If your order hasn\'t shipped yet, please contact our customer service team immediately and we\'ll do our best to update the shipping address. Once an order has shipped, the address cannot be changed.',
        },
        {
          question: 'What happens if my package is lost or damaged?',
          answer: 'If your package is lost or arrives damaged, please contact us within 48 hours of the expected delivery date. We\'ll work with the carrier to locate your package or arrange for a replacement or refund.',
        },
      ],
    },
    {
      name: 'Products',
      icon: ShoppingBag,
      faqs: [
        {
          question: 'How do I find my size?',
          answer: 'Each product page includes a detailed size guide with measurements. We recommend measuring yourself and comparing to our size charts. If you\'re between sizes, we generally suggest sizing up for a more comfortable fit.',
        },
        {
          question: 'Are your products authentic?',
          answer: 'Yes, all products sold on ShopNex are 100% authentic. We source directly from brands and authorized distributors. Every item comes with a certificate of authenticity when applicable.',
        },
        {
          question: 'How do I care for my products?',
          answer: 'Care instructions are included on the product label and in the product description on our website. Generally, we recommend following the manufacturer\'s guidelines for best results.',
        },
        {
          question: 'Do you offer gift wrapping?',
          answer: 'Yes! We offer premium gift wrapping for $5.99 per item. You can select this option during checkout. Gift messages can be included at no additional cost.',
        },
        {
          question: 'Can I get notified when an out-of-stock item is available?',
          answer: 'Absolutely! Click the "Notify Me" button on any out-of-stock product page and enter your email. You\'ll receive an automatic notification as soon as the item is back in stock.',
        },
      ],
    },
    {
      name: 'Payment',
      icon: CreditCard,
      faqs: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. For larger orders, we also offer financing options through Affirm.',
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Yes, we use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers. All transactions are processed through PCI-compliant payment processors.',
        },
        {
          question: 'Can I use multiple payment methods?',
          answer: 'Currently, we only accept one payment method per order. However, you can combine a gift card balance with another payment method.',
        },
        {
          question: 'Do you offer payment plans?',
          answer: 'Yes! We partner with Affirm to offer flexible payment plans. You can split your purchase into 4 interest-free payments or choose monthly financing for larger orders. Select "Pay with Affirm" at checkout.',
        },
        {
          question: 'When will I be charged for my order?',
          answer: 'Your payment method is charged when your order is placed. For pre-order items, you\'ll be charged at the time of purchase, not when the item ships.',
        },
      ],
    },
    {
      name: 'Returns & Refunds',
      icon: RefreshCw,
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return policy for all unused items in their original packaging. Items must have tags attached and be in resalable condition. Some exclusions apply, including final sale items and personalized products.',
        },
        {
          question: 'How do I start a return?',
          answer: 'Log into your account, go to "Order History," select the order containing the item you wish to return, and click "Start Return." Follow the prompts to generate a prepaid shipping label.',
        },
        {
          question: 'How long do refunds take?',
          answer: 'Once we receive your return, please allow 5-7 business days for inspection and processing. Refunds are issued to your original payment method and may take an additional 3-5 business days to appear in your account.',
        },
        {
          question: 'Can I exchange an item instead of returning it?',
          answer: 'Yes! During the return process, you can select "Exchange" instead of "Refund." Choose the new size, color, or product, and we\'ll ship it once we receive your return.',
        },
        {
          question: 'Do you offer free returns?',
          answer: 'Yes, returns are free for all US orders. We provide a prepaid shipping label for your convenience. International customers are responsible for return shipping costs unless the item was defective or incorrect.',
        },
      ],
    },
    {
      name: 'Account',
      icon: User,
      faqs: [
        {
          question: 'How do I create an account?',
          answer: 'Click "Sign Up" in the top right corner of our website. You can create an account using your email address or sign up with Google, Facebook, or Apple for faster access.',
        },
        {
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click "Sign In," then "Forgot Password." Enter your email address, and we\'ll send you a link to reset your password. The link expires after 24 hours for security purposes.',
        },
        {
          question: 'Can I shop without creating an account?',
          answer: 'Yes, you can checkout as a guest. However, creating an account lets you track orders, save addresses, access your order history, and receive exclusive member offers.',
        },
        {
          question: 'How do I update my account information?',
          answer: 'Log into your account and go to "Account Settings." Here you can update your name, email, password, addresses, and payment methods.',
        },
        {
          question: 'How do I delete my account?',
          answer: 'To delete your account, please contact our customer service team. Note that deleting your account is permanent and you\'ll lose access to your order history and saved information.',
        },
      ],
    },
    {
      name: 'Privacy & Security',
      icon: Shield,
      faqs: [
        {
          question: 'How do you protect my personal information?',
          answer: 'We use industry-standard security measures including SSL encryption, secure servers, and regular security audits. We never sell your personal information to third parties.',
        },
        {
          question: 'What data do you collect?',
          answer: 'We collect information necessary to process orders and improve your shopping experience, including name, email, shipping address, and browsing behavior. See our Privacy Policy for complete details.',
        },
        {
          question: 'How do I opt out of marketing emails?',
          answer: 'Click "Unsubscribe" at the bottom of any marketing email, or update your email preferences in your account settings. Note that you\'ll still receive transactional emails about your orders.',
        },
        {
          question: 'Do you use cookies?',
          answer: 'Yes, we use cookies to enhance your browsing experience, remember your preferences, and analyze site traffic. You can manage cookie preferences in your browser settings.',
        },
        {
          question: 'Is shopping on your site safe?',
          answer: 'Absolutely! We use SSL encryption for all transactions, partner with trusted payment processors, and never store sensitive payment information on our servers.',
        },
      ],
    },
  ];

  const currentCategory = faqCategories.find(cat => cat.name === activeCategory);

  const filteredFAQs = searchQuery
    ? faqCategories.flatMap(cat =>
        cat.faqs.filter(
          faq =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
    : currentCategory?.faqs || [];

  const toggleFAQ = (question: string) => {
    setOpenFAQ(openFAQ === question ? null : question);
  };

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
            <HelpCircle className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Find answers to common questions about orders, shipping, returns, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {!searchQuery && (
          <>
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {faqCategories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setOpenFAQ(null);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                    activeCategory === category.name
                      ? 'bg-indigo-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  {category.name}
                </motion.button>
              ))}
            </div>
          </>
        )}

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {searchQuery && (
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? 's' : ''} for "{searchQuery}"
            </p>
          )}
          
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.question)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === faq.question ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.question && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No results found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try searching with different keywords or browse our categories.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Our customer support team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FAQPage;
