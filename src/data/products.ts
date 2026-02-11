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
  }
];

export const categories = [
  {
    id: 1,
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
    count: 24
  },
  {
    id: 2,
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop',
    count: 36
  },
  {
    id: 3,
    name: 'Home & Living',
    slug: 'home',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop',
    count: 18
  },
  {
    id: 4,
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1461896836934- voices?w=800&h=600&fit=crop',
    count: 12
  }
];
