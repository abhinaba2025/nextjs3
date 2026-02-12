import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';

// Main Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AllProductsPage from './pages/AllProductsPage';
import ShopElectronicsPage from './pages/ShopElectronicsPage';
import ShopFashionPage from './pages/ShopFashionPage';
import ShopSportsPage from './pages/ShopSportsPage';
import ShopHomeLivingPage from './pages/ShopHomeLiving';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import WishlistPage from './pages/WishlistPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import DemosPage from './pages/DemosPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Auth Pages
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// Blog & Magazine
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import MagazinePage from './pages/MagazinePage';
import MagazineArticlePage from './pages/MagazineArticlePage';

// Homepage Demos
import HomePage2 from './pages/HomePage2';
import HomePage3 from './pages/HomePage3';
import HomePage4 from './pages/HomePage4';
import HomePage5 from './pages/HomePage5';
import HomePage6 from './pages/HomePage6';
import HomePage7 from './pages/HomePage7';
import HomePage8 from './pages/HomePage8';
import HomePage9 from './pages/HomePage9';
import HomePage10 from './pages/HomePage10';
import HomePage11 from './pages/HomePage11';
import HomePage12 from './pages/HomePage12';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
              <Header />
              <CartDrawer />
              <main>
                <AnimatePresence mode="wait">
                  <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route path="/shop/all" element={<AllProductsPage />} />
                  <Route path="/shop/electronics" element={<ShopElectronicsPage />} />
                  <Route path="/shop/fashion" element={<ShopFashionPage />} />
                  <Route path="/shop/sports" element={<ShopSportsPage />} />
                  <Route path="/shop/home-living" element={<ShopHomeLivingPage />} />
                  <Route path="/product/:slug" element={<ProductPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/demos" element={<DemosPage />} />
                  <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                  <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                  
                  {/* Auth Pages */}
                  <Route path="/sign-in" element={<SignInPage />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                  
                  {/* Blog & Magazine */}
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/magazine" element={<MagazinePage />} />
                  <Route path="/magazine/:slug" element={<MagazineArticlePage />} />
                  
                  {/* Homepage Demos */}
                  <Route path="/demo/minimal" element={<HomePage2 />} />
                  <Route path="/demo/luxury" element={<HomePage3 />} />
                  <Route path="/demo/tech" element={<HomePage4 />} />
                  <Route path="/demo/marketplace" element={<HomePage5 />} />
                  <Route path="/demo/dark-premium" element={<HomePage6 />} />
                  <Route path="/demo/colorful" element={<HomePage7 />} />
                  <Route path="/demo/editorial" element={<HomePage8 />} />
                  <Route path="/demo/split" element={<HomePage9 />} />
                  <Route path="/demo/video" element={<HomePage10 />} />
                  <Route path="/demo/masonry" element={<HomePage11 />} />
                  <Route path="/demo/app" element={<HomePage12 />} />
                  
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
