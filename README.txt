================================================================================

     ⚡ ShopNex – Modern Jamstack eCommerce Template
     
     ███████╗██╗  ██╗ ██████╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗
     ██╔════╝██║  ██║██╔═══██╗██╔══██╗████╗  ██║██╔════╝╚██╗██╔╝
     ███████╗███████║██║   ██║██████╔╝██╔██╗ ██║█████╗   ╚███╔╝ 
     ╚════██║██╔══██║██║   ██║██╔═══╝ ██║╚██╗██║██╔══╝   ██╔██╗ 
     ███████║██║  ██║╚██████╔╝██║     ██║ ╚████║███████╗██╔╝ ╚██╗
     ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
     
     Lightning-fast headless eCommerce built with React & Jamstack
     
     Version 2.0.0 | © 2025

================================================================================


Thank you for purchasing ShopNex! 🎉

ShopNex is a premium, modern eCommerce template featuring 12 unique homepage
demos, 35+ pages, full blog & magazine sections, and a complete shopping
experience — all built with cutting-edge web technologies.


================================================================================
📋 TABLE OF CONTENTS
================================================================================

  1.  Introduction
  2.  What's Included
  3.  Quick Start
  4.  Folder Structure
  5.  All Pages & Routes
  6.  Homepage Demos
  7.  Features
  8.  Tech Stack
  9.  Customization
  10. Dark/Light Mode
  11. Deployment
  12. Browser Support
  13. Credits
  14. Support
  15. License


================================================================================
1. INTRODUCTION
================================================================================

ShopNex is a feature-rich eCommerce template designed for:

  • Online stores and shops
  • Fashion boutiques
  • Electronics retailers
  • Marketplace platforms
  • Product showcase websites
  • Any eCommerce business

Key highlights:
  ⚡ 12 unique homepage demos
  📄 35+ total pages
  📰 8 blog posts + 8 magazine articles
  🛒 Full cart, checkout, and wishlist
  🌙 Dark/Light mode with persistence
  ✨ Premium Framer Motion animations
  📱 Fully responsive mobile-first design


================================================================================
2. WHAT'S INCLUDED
================================================================================

  ✓ Complete source code (TypeScript)
  ✓ 12 homepage demo designs
  ✓ 35+ pre-built pages
  ✓ Blog section (8 posts with individual pages)
  ✓ Magazine section (8 articles with individual pages)
  ✓ Shop with category pages
  ✓ Product detail with gallery
  ✓ Shopping cart & wishlist
  ✓ Multi-step checkout
  ✓ Dark/Light mode
  ✓ Responsive design
  ✓ Framer Motion animations
  ✓ Legal pages (Privacy, Terms, Shipping, FAQ)
  ✓ Documentation (HTML)
  ✓ Free lifetime updates
  ✓ 6 months support


================================================================================
3. QUICK START
================================================================================

Prerequisites:
  • Node.js 18.x or higher (recommended: 20.x)
  • npm 9.x or higher
  • A code editor (recommended: VS Code)

Steps:

  1. Extract the downloaded zip file

  2. Open terminal and navigate to the project:
     $ cd shopnex

  3. Install dependencies:
     $ npm install

  4. Start the development server:
     $ npm run dev

  5. Open in your browser:
     http://localhost:5173

  6. Build for production:
     $ npm run build

  7. Preview production build:
     $ npm run preview

The production build will be output to the 'dist' folder.


================================================================================
4. FOLDER STRUCTURE
================================================================================

shopnex/
│
├── public/                         # Static assets
│
├── src/
│   ├── components/
│   │   ├── cart/
│   │   │   └── CartDrawer.tsx      # Slide-out cart drawer
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero slideshow
│   │   │   ├── FeaturedProducts.tsx # Product tabs
│   │   │   ├── Categories.tsx      # Category cards
│   │   │   ├── Testimonials.tsx    # Customer reviews
│   │   │   ├── Newsletter.tsx      # Email signup
│   │   │   └── Features.tsx        # Benefits section
│   │   ├── layout/
│   │   │   ├── Header.tsx          # Sticky header + mega menu
│   │   │   └── Footer.tsx          # Full footer
│   │   ├── product/
│   │   │   ├── ProductCard.tsx     # Product card
│   │   │   ├── ProductGallery.tsx  # Image gallery + zoom
│   │   │   └── QuickView.tsx       # Quick view modal
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable button
│   │       └── Modal.tsx           # Modal component
│   │
│   ├── context/
│   │   ├── CartContext.tsx          # Cart state management
│   │   ├── WishlistContext.tsx      # Wishlist state
│   │   └── ThemeContext.tsx         # Dark/Light theme
│   │
│   ├── data/
│   │   ├── products.ts             # Product & category data
│   │   ├── blogData.ts             # Blog posts data
│   │   └── magazineData.ts         # Magazine articles data
│   │
│   ├── pages/
│   │   ├── HomePage.tsx            # Default home
│   │   ├── HomeMinimal.tsx         # Minimal clean demo
│   │   ├── HomeLuxury.tsx          # Luxury fashion demo
│   │   ├── HomeTech.tsx            # Tech futuristic demo
│   │   ├── HomeMarketplace.tsx     # Marketplace demo
│   │   ├── HomeDarkPremium.tsx     # Dark premium demo
│   │   ├── HomeColorful.tsx        # Colorful playful demo
│   │   ├── HomeEditorial.tsx       # Magazine editorial demo
│   │   ├── HomeSplit.tsx           # Split screen demo
│   │   ├── HomeVideo.tsx           # Video background demo
│   │   ├── HomeMasonry.tsx         # Masonry grid demo
│   │   ├── HomeApp.tsx             # Modern app demo
│   │   ├── DemosPage.tsx           # Demos showcase
│   │   ├── ShopPage.tsx            # Main shop
│   │   ├── ShopElectronics.tsx     # Electronics category
│   │   ├── ShopFashion.tsx         # Fashion category
│   │   ├── ShopSports.tsx          # Sports category
│   │   ├── ShopAllProducts.tsx     # All products
│   │   ├── ProductPage.tsx         # Product detail
│   │   ├── CartPage.tsx            # Shopping cart
│   │   ├── CheckoutPage.tsx        # Multi-step checkout
│   │   ├── WishlistPage.tsx        # Wishlist
│   │   ├── BlogPage.tsx            # Blog listing
│   │   ├── BlogPostPage.tsx        # Individual blog post
│   │   ├── MagazinePage.tsx        # Magazine listing
│   │   ├── MagazineArticlePage.tsx # Individual article
│   │   ├── AboutPage.tsx           # About us
│   │   ├── ContactPage.tsx         # Contact form
│   │   ├── ShippingReturnsPage.tsx # Shipping & returns
│   │   ├── FAQPage.tsx             # FAQ
│   │   ├── PrivacyPolicyPage.tsx   # Privacy policy
│   │   ├── TermsOfServicePage.tsx  # Terms of service
│   │   └── NotFoundPage.tsx        # 404 page
│   │
│   ├── App.tsx                     # Root component + routes
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles + theme
│
├── documentation/
│   ├── index.html                  # Full documentation
│   └── assets/
│       └── style.css               # Doc styles
│
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript config
├── LICENSE.txt                     # License agreement
├── README.txt                      # This file
└── CHANGELOG.txt                   # Version history


================================================================================
5. ALL PAGES & ROUTES (35+)
================================================================================

HOMEPAGE DEMOS (12):
  /                         Default Home
  /demo/minimal             Minimal Clean
  /demo/luxury              Luxury Fashion
  /demo/tech                Tech Futuristic
  /demo/marketplace         Marketplace
  /demo/dark-premium        Dark Premium
  /demo/colorful            Colorful Playful
  /demo/editorial           Magazine Editorial
  /demo/split               Split Screen
  /demo/video               Video Background
  /demo/masonry             Masonry Grid
  /demo/app                 Modern App
  /demos                    Demos Showcase

SHOP PAGES (5):
  /shop                     Main Shop (filters, sorting, grid)
  /shop/all                 All Products
  /shop/electronics         Electronics Category
  /shop/fashion             Fashion Category
  /shop/sports              Sports Category

ECOMMERCE PAGES (4):
  /product/:slug            Product Detail
  /cart                     Shopping Cart
  /checkout                 Multi-Step Checkout
  /wishlist                 Wishlist

BLOG SECTION (9):
  /blog                     Blog Listing
  /blog/top-10-fashion-trends-2024
  /blog/ultimate-guide-smart-home
  /blog/sustainable-living-eco-friendly
  /blog/home-workout-equipment
  /blog/photography-tips-beginners
  /blog/minimalist-wardrobe-guide
  /blog/ultimate-gaming-setup
  /blog/coffee-brewing-methods

MAGAZINE SECTION (9):
  /magazine                 Magazine Listing
  /magazine/future-sustainable-fashion
  /magazine/ai-revolution-everyday-life
  /magazine/architecture-of-tomorrow
  /magazine/wellness-revolution-2024
  /magazine/rise-remote-work-culture
  /magazine/culinary-travel-world-flavors
  /magazine/evolution-street-style
  /magazine/art-interior-design

UTILITY & LEGAL PAGES (8):
  /about                    About Us
  /contact                  Contact Form
  /shipping-returns         Shipping & Returns
  /faq                      FAQ
  /privacy-policy           Privacy Policy
  /terms-of-service         Terms of Service
  /demos                    Demos Showcase
  /*                        404 Not Found


================================================================================
6. HOMEPAGE DEMOS
================================================================================

ShopNex includes 12 unique homepage designs:

  #1  Default Home      – Full-featured modern layout with all sections
  #2  Minimal Clean     – Whitespace-focused minimalist design
  #3  Luxury Fashion    – Dark luxury theme with gold accents
  #4  Tech Futuristic   – Gradient-rich futuristic look
  #5  Marketplace       – Multi-vendor layout with flash deals
  #6  Dark Premium      – Premium dark theme with emerald accents
  #7  Colorful Playful  – Fun, bright, and playful design
  #8  Magazine Editorial – Serif typography editorial style
  #9  Split Screen      – Bold split-screen layout
  #10 Video Background  – Cinematic video-style design
  #11 Masonry Grid      – Pinterest-style masonry layout
  #12 Modern App        – App-style with card-based UI

All demos are accessible from the Home dropdown in the header navigation.


================================================================================
7. FEATURES
================================================================================

DESIGN & UI:
  ✓ 12 unique homepage demos
  ✓ Clean, modern, professional design
  ✓ Premium Framer Motion animations
  ✓ Fully responsive mobile-first
  ✓ Dark/Light mode with persistence
  ✓ Custom scrollbar styling
  ✓ Smooth page transitions
  ✓ Hover effects and micro-interactions

ECOMMERCE:
  ✓ Product grid with filters & sorting
  ✓ Product detail with image gallery & zoom
  ✓ Shopping cart (page + slide-out drawer)
  ✓ Wishlist functionality
  ✓ Multi-step checkout form
  ✓ Quick view modal
  ✓ Product cards with animations
  ✓ Category-based shopping

NAVIGATION:
  ✓ Sticky header
  ✓ Home mega dropdown (12 demos)
  ✓ Shop dropdown (categories)
  ✓ Help dropdown (utility pages)
  ✓ Search overlay
  ✓ Cart icon with item count badge
  ✓ Mobile hamburger menu
  ✓ Theme toggle button

CONTENT:
  ✓ Blog section (8 posts)
  ✓ Magazine section (8 articles)
  ✓ About Us page
  ✓ Contact page with form
  ✓ FAQ page with search
  ✓ Shipping & Returns
  ✓ Privacy Policy
  ✓ Terms of Service
  ✓ Custom 404 page

TECHNICAL:
  ✓ TypeScript for type safety
  ✓ React Context for state management
  ✓ React Router for navigation
  ✓ React Hook Form for forms
  ✓ Vite for fast builds
  ✓ Tailwind CSS utility classes
  ✓ SEO-friendly meta tags
  ✓ Clean, organized code


================================================================================
8. TECH STACK
================================================================================

  React          18.x     UI Framework
  TypeScript     5.x      Type Safety
  Vite           5.x      Build Tool & Dev Server
  Tailwind CSS   4.x      Utility-First CSS Framework
  Framer Motion  11.x     Animation Library
  React Router   6.x      Client-Side Routing
  React Hook Form 7.x     Form Handling
  Lucide React   Latest   Icon Library
  Swiper         11.x     Touch Slider
  Axios          1.x      HTTP Client


================================================================================
9. CUSTOMIZATION
================================================================================

COLORS:
  Edit CSS variables in src/index.css:
  
  --color-primary: #4F46E5    (Indigo – main brand color)
  --color-accent: #F59E0B     (Amber – CTA/accent color)
  --color-dark: #0F172A       (Dark background)
  --color-light: #F8FAFC      (Light background)

LOGO:
  Replace the SVG icon and "ShopNex" text in:
  src/components/layout/Header.tsx

FONTS:
  Default: Poppins (Google Fonts)
  Update in: index.html (font link) and src/index.css

PRODUCTS:
  Edit product data in: src/data/products.ts
  Each product: id, name, slug, price, image, category, rating, etc.

BLOG POSTS:
  Edit in: src/data/blogData.ts

MAGAZINE ARTICLES:
  Edit in: src/data/magazineData.ts

ADD NEW PAGES:
  1. Create component in src/pages/
  2. Add route in src/App.tsx
  3. Add nav link in src/components/layout/Header.tsx


================================================================================
10. DARK/LIGHT MODE
================================================================================

ShopNex defaults to Light Mode. Users can toggle using the sun/moon icon
in the header. Theme preference is saved to localStorage.

Technical details:
  • ThemeContext manages global theme state
  • Toggle adds/removes 'dark' class on <html>
  • Tailwind dark: variant applies dark styles
  • CSS variables update colors per theme
  • Smooth 300ms transition between themes

To change default theme:
  Edit src/context/ThemeContext.tsx and change the initial state.


================================================================================
11. DEPLOYMENT
================================================================================

VERCEL (Recommended):
  1. Push to GitHub
  2. Go to vercel.com
  3. Import repository
  4. Framework: Vite
  5. Deploy

NETLIFY:
  1. npm run build
  2. Drag 'dist' folder to Netlify
  3. Add _redirects file: /*  /index.html  200

DOCKER:
  See documentation/index.html for Dockerfile example.

STATIC HOSTING:
  Upload contents of 'dist/' to any static host.
  Configure SPA redirect: all routes → index.html


================================================================================
12. BROWSER SUPPORT
================================================================================

  ✓ Google Chrome     (latest 2 versions)
  ✓ Mozilla Firefox   (latest 2 versions)
  ✓ Apple Safari      (latest 2 versions)
  ✓ Microsoft Edge    (latest 2 versions)
  ✓ Opera             (latest 2 versions)


================================================================================
13. CREDITS
================================================================================

Fonts:
  • Poppins – Google Fonts (SIL Open Font License)

Icons:
  • Lucide React – ISC License

Images:
  • Unsplash (Demo images – Free to use)

Libraries:
  • React – MIT License
  • Vite – MIT License
  • Tailwind CSS – MIT License
  • Framer Motion – MIT License
  • React Router – MIT License
  • React Hook Form – MIT License
  • Swiper – MIT License
  • Axios – MIT License


================================================================================
14. SUPPORT
================================================================================

Need help? We're here for you!

  📧 Email Support:      support@shopnex.com
  📖 Documentation:      documentation/index.html
  🔄 Updates:            Free lifetime updates
  🛡️ Support Period:     6 months included
  ⏰ Response Time:      24-48 hours (business days)

Support includes:
  • Bug fixes and issue resolution
  • Technical questions about features
  • Installation and setup assistance

Support does NOT include:
  • Custom development or modifications
  • Third-party integration help
  • Design customization services


================================================================================
15. LICENSE
================================================================================

See LICENSE.txt for full license agreement.

Standard License: Use in one project for yourself or one client.
Extended License: Contact us for multi-use or SaaS licensing.


================================================================================

Thank you for choosing ShopNex! ❤️

We're committed to providing you with the best eCommerce template
experience. If you love ShopNex, please leave a rating!

⭐⭐⭐⭐⭐

================================================================================

© 2025 ShopNex. All rights reserved.
Made with ❤️ by the ShopNex Team

================================================================================
