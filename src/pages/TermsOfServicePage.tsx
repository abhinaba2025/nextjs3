import { motion } from 'framer-motion';
import { FileText, AlertTriangle, ShoppingCart, CreditCard, Truck, RotateCcw, Scale, Mail } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      id: 'acceptance',
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: `
        <p class="mb-4">By accessing and using the ShopNex website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
        <p class="mb-4">If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
        <p>We reserve the right to modify these terms at any time. Your continued use of the website following the posting of changes constitutes your acceptance of such changes.</p>
      `,
    },
    {
      id: 'eligibility',
      icon: AlertTriangle,
      title: '2. Eligibility',
      content: `
        <p class="mb-4">To use our services, you must:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Be at least 18 years of age, or the age of majority in your jurisdiction</li>
          <li>Have the legal capacity to enter into a binding contract</li>
          <li>Not be prohibited from using our services under applicable law</li>
          <li>Provide accurate and complete registration information</li>
        </ul>
        <p>If you are using our services on behalf of a business or organization, you represent that you have the authority to bind that entity to these terms.</p>
      `,
    },
    {
      id: 'account',
      icon: FileText,
      title: '3. Account Registration',
      content: `
        <p class="mb-4">When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of these Terms.</p>
        <p class="mb-4"><strong>Account Security:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>You are responsible for safeguarding your password and any activities under your account</li>
          <li>You must notify us immediately of any unauthorized access or security breach</li>
          <li>You may not use another person's account without permission</li>
          <li>We reserve the right to disable any account at any time for any reason</li>
        </ul>
        <p>You may delete your account at any time by contacting our customer service team.</p>
      `,
    },
    {
      id: 'products',
      icon: ShoppingCart,
      title: '4. Products and Services',
      content: `
        <p class="mb-4"><strong>Product Descriptions:</strong></p>
        <p class="mb-4">We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.</p>
        <p class="mb-4"><strong>Availability:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>All products are subject to availability</li>
          <li>We reserve the right to discontinue any product at any time</li>
          <li>We reserve the right to limit quantities of products purchased</li>
          <li>Product colors may vary due to monitor settings</li>
        </ul>
        <p class="mb-4"><strong>Product Sizing:</strong></p>
        <p>Size guides are provided for reference only. Actual fit may vary depending on individual body measurements and manufacturer specifications.</p>
      `,
    },
    {
      id: 'pricing',
      icon: CreditCard,
      title: '5. Pricing and Payment',
      content: `
        <p class="mb-4"><strong>Pricing:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>All prices are displayed in US Dollars unless otherwise specified</li>
          <li>Prices are subject to change without notice</li>
          <li>We reserve the right to correct pricing errors</li>
          <li>Promotional prices are valid for the specified promotional period only</li>
        </ul>
        <p class="mb-4"><strong>Payment:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>We accept major credit cards, PayPal, Apple Pay, and Google Pay</li>
          <li>Payment is required at the time of order placement</li>
          <li>Your credit card will be charged when you place your order</li>
          <li>We use secure encryption to protect your payment information</li>
        </ul>
        <p class="mb-4"><strong>Taxes:</strong></p>
        <p>Applicable sales tax will be calculated and added at checkout based on your shipping address. International customers may be responsible for customs duties and taxes.</p>
      `,
    },
    {
      id: 'shipping',
      icon: Truck,
      title: '6. Shipping and Delivery',
      content: `
        <p class="mb-4"><strong>Shipping Methods:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Standard Shipping: 5-7 business days</li>
          <li>Express Shipping: 2-3 business days</li>
          <li>Next Day Delivery: 1 business day (order before 2 PM EST)</li>
          <li>International Shipping: 7-14 business days</li>
        </ul>
        <p class="mb-4"><strong>Delivery:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Delivery times are estimates and not guaranteed</li>
          <li>Risk of loss passes to you upon delivery to the carrier</li>
          <li>We are not responsible for delays caused by the carrier or customs</li>
          <li>Signature may be required for high-value orders</li>
        </ul>
        <p><strong>P.O. Boxes:</strong> We can ship to P.O. Boxes via USPS for standard shipping only. Express and next-day delivery require a physical address.</p>
      `,
    },
    {
      id: 'returns',
      icon: RotateCcw,
      title: '7. Returns and Refunds',
      content: `
        <p class="mb-4"><strong>Return Policy:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Items may be returned within 30 days of delivery</li>
          <li>Items must be unused, unwashed, and in original packaging</li>
          <li>Tags must be attached for clothing items</li>
          <li>Return shipping is free for US orders</li>
        </ul>
        <p class="mb-4"><strong>Non-Returnable Items:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Final sale items marked as non-returnable</li>
          <li>Personalized or custom-made items</li>
          <li>Intimate apparel and swimwear (for hygiene reasons)</li>
          <li>Gift cards</li>
        </ul>
        <p class="mb-4"><strong>Refund Process:</strong></p>
        <p>Refunds are processed within 5-7 business days of receiving the return. Refunds are issued to the original payment method. Original shipping charges are non-refundable unless the return is due to our error.</p>
      `,
    },
    {
      id: 'intellectual-property',
      icon: Scale,
      title: '8. Intellectual Property',
      content: `
        <p class="mb-4">All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of ShopNex or its content suppliers and is protected by international copyright laws.</p>
        <p class="mb-4"><strong>Permitted Use:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>You may view and download content for personal, non-commercial use only</li>
          <li>You must retain all copyright and proprietary notices</li>
          <li>You may not modify, copy, distribute, transmit, display, or sell any content</li>
        </ul>
        <p class="mb-4"><strong>Trademarks:</strong></p>
        <p>ShopNex, our logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ShopNex. You may not use these marks without our prior written permission.</p>
      `,
    },
    {
      id: 'prohibited-uses',
      icon: AlertTriangle,
      title: '9. Prohibited Uses',
      content: `
        <p class="mb-4">You agree not to use our website or services:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>For any unlawful purpose or to violate any laws</li>
          <li>To harass, abuse, or harm another person</li>
          <li>To impersonate any person or entity</li>
          <li>To interfere with or circumvent security features</li>
          <li>To transmit viruses, malware, or other malicious code</li>
          <li>To scrape or collect data without our consent</li>
          <li>For any commercial purpose not authorized by us</li>
          <li>To submit false or misleading information</li>
          <li>To engage in fraudulent transactions</li>
          <li>To resell products purchased from us without authorization</li>
        </ul>
      `,
    },
    {
      id: 'limitation-liability',
      icon: Scale,
      title: '10. Limitation of Liability',
      content: `
        <p class="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>ShopNex shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
          <li>Our total liability shall not exceed the amount you paid for the product or service giving rise to the claim</li>
          <li>We are not liable for any damages resulting from your use of, or inability to use, our services</li>
          <li>We are not responsible for the actions of third parties, including shipping carriers</li>
        </ul>
        <p class="mb-4"><strong>Disclaimer of Warranties:</strong></p>
        <p>Our website and services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
      `,
    },
    {
      id: 'dispute-resolution',
      icon: Scale,
      title: '11. Dispute Resolution',
      content: `
        <p class="mb-4"><strong>Informal Resolution:</strong></p>
        <p class="mb-4">Before filing a claim, you agree to contact us to attempt to resolve any dispute informally. Most concerns can be quickly resolved through our customer service team.</p>
        <p class="mb-4"><strong>Arbitration:</strong></p>
        <p class="mb-4">Any dispute arising out of or relating to these Terms shall be resolved by binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in San Francisco, California.</p>
        <p class="mb-4"><strong>Class Action Waiver:</strong></p>
        <p>You agree that any claims will be brought only in your individual capacity, and not as a plaintiff or class member in any purported class or representative proceeding.</p>
      `,
    },
    {
      id: 'contact',
      icon: Mail,
      title: '12. Contact Information',
      content: `
        <p class="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 space-y-3">
          <p><strong>ShopNex Legal Team</strong></p>
          <p><strong>Email:</strong> legal@shopnex.com</p>
          <p><strong>Phone:</strong> 1-800-SHOPNEX (1-800-746-7639)</p>
          <p><strong>Address:</strong><br/>123 Commerce Street<br/>San Francisco, CA 94102<br/>United States</p>
        </div>
      `,
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
            <FileText className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-white/60 mt-4">
              Last updated: January 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 max-h-[calc(100vh-140px)] overflow-y-auto">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Welcome to ShopNex
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                These Terms of Service ("Terms") govern your access to and use of the ShopNex website, 
                mobile applications, and services (collectively, the "Services"). By accessing or using 
                our Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Important:</strong> These Terms contain an arbitration agreement and class action 
                    waiver that affect your legal rights. Please read Section 11 carefully.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 scroll-mt-28"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <div
                  className="text-gray-600 dark:text-gray-400 prose dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </motion.div>
            ))}

            {/* Agreement Confirmation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-4">Agreement</h3>
              <p className="text-white/90 mb-6">
                By using ShopNex, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms of Service. If you do not agree to these terms, please do not 
                use our services.
              </p>
              <p className="text-white/70 text-sm">
                © 2024 ShopNex. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
