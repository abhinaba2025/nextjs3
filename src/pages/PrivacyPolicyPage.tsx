import { motion } from 'framer-motion';
import { Shield, Eye, Database, Lock, Bell, Users, Globe, Mail } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'information-collected',
      icon: Database,
      title: 'Information We Collect',
      content: `
        <p class="mb-4">We collect information you provide directly to us, including:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Account Information:</strong> Name, email address, password, phone number, and shipping addresses when you create an account.</li>
          <li><strong>Purchase Information:</strong> Billing address, payment method details, and purchase history when you make a purchase.</li>
          <li><strong>Communication Data:</strong> Information you provide when you contact us, participate in surveys, or communicate with us via social media.</li>
          <li><strong>Profile Information:</strong> Preferences, wishlist items, and other information you add to your profile.</li>
        </ul>
        <p class="mb-4">We also automatically collect certain information, including:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Device Information:</strong> Browser type, operating system, device identifiers, and IP address.</li>
          <li><strong>Usage Data:</strong> Pages visited, products viewed, time spent on pages, and click patterns.</li>
          <li><strong>Location Data:</strong> General location based on IP address or more precise location if you enable location services.</li>
          <li><strong>Cookies and Tracking:</strong> Information collected through cookies, pixels, and similar technologies.</li>
        </ul>
      `,
    },
    {
      id: 'how-we-use',
      icon: Eye,
      title: 'How We Use Your Information',
      content: `
        <p class="mb-4">We use the information we collect for various purposes, including:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Processing and fulfilling your orders, including shipping and returns</li>
          <li>Communicating with you about orders, products, services, and promotions</li>
          <li>Personalizing your shopping experience and providing product recommendations</li>
          <li>Improving our website, products, and services</li>
          <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
          <li>Complying with legal obligations and enforcing our terms of service</li>
          <li>Analyzing trends and user behavior to improve our marketing strategies</li>
          <li>Providing customer support and responding to your inquiries</li>
        </ul>
      `,
    },
    {
      id: 'information-sharing',
      icon: Users,
      title: 'Information Sharing',
      content: `
        <p class="mb-4">We may share your information with:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Service Providers:</strong> Companies that help us with payment processing, shipping, marketing, and other business operations.</li>
          <li><strong>Business Partners:</strong> Trusted partners who offer products or services that may interest you.</li>
          <li><strong>Legal Requirements:</strong> When required by law, court order, or government request.</li>
          <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of our business.</li>
          <li><strong>With Your Consent:</strong> When you have given us explicit permission to share your information.</li>
        </ul>
        <p class="mb-4 font-semibold">We do NOT sell your personal information to third parties for their marketing purposes.</p>
      `,
    },
    {
      id: 'cookies',
      icon: Globe,
      title: 'Cookies and Tracking Technologies',
      content: `
        <p class="mb-4">We use cookies and similar tracking technologies to:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Remember your preferences and login information</li>
          <li>Understand how you interact with our website</li>
          <li>Personalize content and advertisements</li>
          <li>Analyze website traffic and performance</li>
          <li>Detect and prevent fraud</li>
        </ul>
        <p class="mb-4"><strong>Types of cookies we use:</strong></p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
        <p>You can manage cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality.</p>
      `,
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      content: `
        <p class="mb-4">We implement comprehensive security measures to protect your information:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Encryption:</strong> All data transmitted between your browser and our servers is encrypted using SSL/TLS technology.</li>
          <li><strong>Secure Storage:</strong> Personal data is stored on secure servers with restricted access.</li>
          <li><strong>Payment Security:</strong> We are PCI-DSS compliant and never store complete credit card information.</li>
          <li><strong>Access Controls:</strong> Employee access to personal data is limited and monitored.</li>
          <li><strong>Regular Audits:</strong> We conduct regular security assessments and penetration testing.</li>
          <li><strong>Incident Response:</strong> We have procedures in place to address potential data breaches.</li>
        </ul>
        <p>While we strive to protect your information, no method of transmission over the internet is 100% secure. We encourage you to use strong passwords and keep your account credentials confidential.</p>
      `,
    },
    {
      id: 'your-rights',
      icon: Shield,
      title: 'Your Rights and Choices',
      content: `
        <p class="mb-4">You have certain rights regarding your personal information:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request that we delete your personal information (subject to legal requirements).</li>
          <li><strong>Portability:</strong> Request your data in a portable format.</li>
          <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
          <li><strong>Restrict Processing:</strong> Request that we limit how we use your data.</li>
        </ul>
        <p class="mb-4">To exercise these rights, please contact us at privacy@shopnex.com or through your account settings.</p>
        <p><strong>California Residents:</strong> Under the CCPA, you have additional rights including the right to know what personal information is collected and the right to opt-out of the sale of personal information.</p>
      `,
    },
    {
      id: 'communications',
      icon: Bell,
      title: 'Marketing Communications',
      content: `
        <p class="mb-4">We may send you marketing communications if you have opted in to receive them. These include:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4">
          <li>Promotional emails about sales and new products</li>
          <li>Newsletters with style tips and trends</li>
          <li>Personalized product recommendations</li>
          <li>SMS notifications (if you've opted in)</li>
        </ul>
        <p class="mb-4"><strong>How to opt out:</strong></p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Click "Unsubscribe" at the bottom of any marketing email</li>
          <li>Update your preferences in your account settings</li>
          <li>Reply STOP to any SMS message</li>
          <li>Contact our customer service team</li>
        </ul>
        <p class="mt-4">Note: You will still receive transactional emails about your orders even if you opt out of marketing communications.</p>
      `,
    },
    {
      id: 'contact',
      icon: Mail,
      title: 'Contact Us',
      content: `
        <p class="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
        <div class="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 space-y-3">
          <p><strong>Email:</strong> privacy@shopnex.com</p>
          <p><strong>Phone:</strong> 1-800-SHOPNEX (1-800-746-7639)</p>
          <p><strong>Mail:</strong> ShopNex Privacy Team<br/>123 Commerce Street<br/>San Francisco, CA 94102</p>
        </div>
        <p class="mt-4">We aim to respond to all privacy-related inquiries within 30 days.</p>
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
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
            <div className="sticky top-28 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Quick Navigation
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm"
                  >
                    <section.icon className="w-4 h-4" />
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
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Welcome to ShopNex. We are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy describes how we collect, use, disclose, 
                and safeguard your information when you visit our website, use our mobile application, or 
                make a purchase from us.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                By using our services, you agree to the collection and use of information in accordance 
                with this policy. If you do not agree with our policies and practices, please do not use 
                our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
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

            {/* Policy Updates Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Policy Updates</h3>
              <p className="text-white/90">
                We may update this Privacy Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any material 
                changes by posting the new policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
