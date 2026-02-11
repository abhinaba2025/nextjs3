export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  originalPrice?: number;
  salePrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  category: string;
  badge?: 'new' | 'sale' | 'hot';
  description: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  discount?: number;
  variants?: {
    colors?: string[];
    sizes?: string[];
  };
}

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    slug: 'wireless-headphones-pro',
    name: 'Wireless Headphones Pro',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    badge: 'sale',
    description: 'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
    inStock: true,
    variants: {
      colors: ['Black', 'White', 'Navy'],
      sizes: ['One Size']
    }
  },
  {
    id: 2,
    slug: 'smart-watch-ultra',
    name: 'Smart Watch Ultra',
    price: 599.99,
    rating: 4.9,
    reviews: 256,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    badge: 'new',
    description: 'Advanced smartwatch with health monitoring, GPS, and titanium case.',
    inStock: true,
    variants: {
      colors: ['Titanium', 'Black', 'Gold']
    }
  },
  {
    id: 3,
    slug: 'premium-leather-bag',
    name: 'Premium Leather Bag',
    price: 189.99,
    originalPrice: 229.99,
    rating: 4.7,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    badge: 'hot',
    description: 'Handcrafted leather bag with premium stitching and brass hardware.',
    inStock: true,
    variants: {
      colors: ['Brown', 'Black', 'Tan']
    }
  },
  {
    id: 4,
    slug: 'minimalist-sneakers',
    name: 'Minimalist Sneakers',
    price: 129.99,
    rating: 4.6,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    description: 'Clean design sneakers with memory foam insole for all-day comfort.',
    inStock: true,
    variants: {
      colors: ['White', 'Black', 'Grey'],
      sizes: ['7', '8', '9', '10', '11', '12']
    }
  },
  {
    id: 5,
    slug: 'ceramic-coffee-set',
    name: 'Ceramic Coffee Set',
    price: 79.99,
    rating: 4.5,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop'
    ],
    category: 'Home',
    badge: 'new',
    description: 'Artisan ceramic coffee set including 4 cups and pour-over dripper.',
    inStock: true,
    variants: {
      colors: ['White', 'Sage', 'Terracotta']
    }
  },
  {
    id: 6,
    slug: 'wireless-earbuds',
    name: 'Wireless Earbuds',
    price: 149.99,
    originalPrice: 179.99,
    rating: 4.4,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    badge: 'sale',
    description: 'True wireless earbuds with premium sound and 24-hour battery life.',
    inStock: true,
    variants: {
      colors: ['White', 'Black']
    }
  },
  {
    id: 7,
    slug: 'designer-sunglasses',
    name: 'Designer Sunglasses',
    price: 219.99,
    rating: 4.8,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    description: 'Premium polarized sunglasses with acetate frame.',
    inStock: true,
    variants: {
      colors: ['Black', 'Tortoise', 'Clear']
    }
  },
  {
    id: 8,
    slug: 'smart-home-speaker',
    name: 'Smart Home Speaker',
    price: 399.99,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    badge: 'hot',
    description: 'Hi-fi smart speaker with room-filling sound and voice assistant.',
    inStock: true,
    variants: {
      colors: ['Black', 'White', 'Grey']
    }
  },
  // Sports Products
  {
    id: 9,
    slug: 'pro-running-shoes',
    name: 'Pro Running Shoes',
    price: 159.99,
    originalPrice: 189.99,
    rating: 4.8,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop'
    ],
    category: 'Sports',
    badge: 'hot',
    description: 'Lightweight running shoes with responsive cushioning and breathable mesh upper.',
    inStock: true,
    isNew: false,
    isFeatured: true,
    variants: {
      colors: ['Red', 'Black', 'Blue'],
      sizes: ['7', '8', '9', '10', '11', '12']
    }
  },
  {
    id: 10,
    slug: 'yoga-mat-premium',
    name: 'Premium Yoga Mat',
    price: 79.99,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop'
    ],
    category: 'Sports',
    badge: 'new',
    description: 'Eco-friendly yoga mat with superior grip and cushioning for all yoga styles.',
    inStock: true,
    isNew: true,
    variants: {
      colors: ['Purple', 'Blue', 'Green', 'Pink']
    }
  },
  {
    id: 11,
    slug: 'fitness-tracker-band',
    name: 'Fitness Tracker Band',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.5,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600&h=600&fit=crop'
    ],
    category: 'Sports',
    badge: 'sale',
    description: 'Advanced fitness tracker with heart rate monitoring, sleep tracking, and GPS.',
    inStock: true,
    variants: {
      colors: ['Black', 'White', 'Navy']
    }
  },
  {
    id: 12,
    slug: 'dumbbell-set-adjustable',
    name: 'Adjustable Dumbbell Set',
    price: 299.99,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop'
    ],
    category: 'Sports',
    description: 'Space-saving adjustable dumbbells from 5 to 52.5 lbs with quick-change mechanism.',
    inStock: true,
    isFeatured: true,
    variants: {
      colors: ['Black/Red', 'Black/Grey']
    }
  },
  {
    id: 13,
    slug: 'tennis-racket-pro',
    name: 'Pro Tennis Racket',
    price: 189.99,
    rating: 4.6,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1617083934555-ac7d4b5bd53b?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1617083934555-ac7d4b5bd53b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=600&fit=crop'
    ],
    category: 'Sports',
    badge: 'new',
    description: 'Professional-grade tennis racket with carbon fiber frame and optimal string tension.',
    inStock: true,
    isNew: true,
    variants: {
      colors: ['White/Blue', 'Black/Orange']
    }
  },
  // More Electronics
  {
    id: 14,
    slug: 'laptop-ultrabook-pro',
    name: 'Ultrabook Pro 15"',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    badge: 'sale',
    description: 'Ultra-thin laptop with 4K display, 16GB RAM, and all-day battery life.',
    inStock: true,
    isFeatured: true,
    variants: {
      colors: ['Silver', 'Space Grey']
    }
  },
  {
    id: 15,
    slug: 'wireless-charging-pad',
    name: 'Wireless Charging Pad',
    price: 49.99,
    rating: 4.4,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&h=600&fit=crop'
    ],
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    inStock: true,
    variants: {
      colors: ['White', 'Black']
    }
  },
  // More Fashion
  {
    id: 16,
    slug: 'classic-denim-jacket',
    name: 'Classic Denim Jacket',
    price: 149.99,
    rating: 4.7,
    reviews: 289,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    badge: 'hot',
    description: 'Timeless denim jacket with premium cotton and vintage wash.',
    inStock: true,
    isFeatured: true,
    variants: {
      colors: ['Blue', 'Black', 'Light Wash'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
  },
  {
    id: 17,
    slug: 'silk-scarf-collection',
    name: 'Silk Scarf Collection',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviews: 145,
    image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    badge: 'sale',
    description: '100% pure silk scarf with hand-rolled edges and exclusive prints.',
    inStock: true,
    variants: {
      colors: ['Floral', 'Geometric', 'Abstract']
    }
  },
  {
    id: 18,
    slug: 'leather-belt-premium',
    name: 'Premium Leather Belt',
    price: 79.99,
    rating: 4.6,
    reviews: 312,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=600&h=600&fit=crop'
    ],
    category: 'Fashion',
    description: 'Full-grain leather belt with brushed metal buckle.',
    inStock: true,
    variants: {
      colors: ['Brown', 'Black', 'Tan'],
      sizes: ['30', '32', '34', '36', '38', '40']
    }
  }
];

export const categories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    count: 24,
    description: 'Discover cutting-edge technology and gadgets'
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    count: 36,
    description: 'Elevate your style with premium fashion'
  },
  {
    id: 3,
    name: 'Home & Living',
    slug: 'Home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
    count: 18,
    description: 'Transform your living space'
  },
  {
    id: 4,
    name: 'Sports',
    slug: 'Sports',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    count: 12,
    description: 'Gear up for peak performance'
  }
];
