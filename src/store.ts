import { create } from 'zustand';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'books' | 'stationary';
  subcategory: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

interface Store {
  products: Product[];
  cart: CartItem[];
  isCartOpen: boolean;
  searchQuery: string;
  selectedCategory: string;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Sample products data
const sampleProducts: Product[] = [
  // Books
  {
    id: '1',
    name: 'Bhagavad Gita',
    price: 299,
    image: '/api/placeholder/300/400',
    category: 'books',
    subcategory: 'spiritual',
    description: 'Sacred Hindu scripture with teachings of Lord Krishna',
    inStock: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'Ramayana',
    price: 450,
    image: '/api/placeholder/300/400',
    category: 'books',
    subcategory: 'spiritual',
    description: 'Epic tale of Lord Rama by Sage Valmiki',
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '3',
    name: 'The Alchemist',
    price: 350,
    image: '/api/placeholder/300/400',
    category: 'books',
    subcategory: 'novels',
    description: 'Inspiring novel by Paulo Coelho',
    inStock: true,
    rating: 4.7,
    reviews: 892
  },
  {
    id: '4',
    name: 'Rich Dad Poor Dad',
    price: 399,
    image: '/api/placeholder/300/400',
    category: 'books',
    subcategory: 'finance',
    description: 'Financial literacy book by Robert Kiyosaki',
    inStock: true,
    rating: 4.6,
    reviews: 1247
  },
  {
    id: '5',
    name: 'Atomic Habits',
    price: 425,
    image: '/api/placeholder/300/400',
    category: 'books',
    subcategory: 'self-help',
    description: 'Life-changing book on building good habits',
    inStock: true,
    rating: 4.8,
    reviews: 986
  },
  // Stationary
  {
    id: '6',
    name: 'Premium Notebook Set',
    price: 199,
    image: '/api/placeholder/300/400',
    category: 'stationary',
    subcategory: 'notebooks',
    description: 'Set of 3 premium quality notebooks',
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '7',
    name: 'Gel Pen Collection',
    price: 149,
    image: '/api/placeholder/300/400',
    category: 'stationary',
    subcategory: 'pens',
    description: 'Pack of 12 colorful gel pens',
    inStock: true,
    rating: 4.4,
    reviews: 89
  },
  {
    id: '8',
    name: 'Art Supplies Kit',
    price: 899,
    image: '/api/placeholder/300/400',
    category: 'stationary',
    subcategory: 'art',
    description: 'Complete art supplies kit for students',
    inStock: true,
    rating: 4.7,
    reviews: 124
  },
  {
    id: '9',
    name: 'Calculator (Scientific)',
    price: 649,
    image: '/api/placeholder/300/400',
    category: 'stationary',
    subcategory: 'electronics',
    description: 'Scientific calculator for students',
    inStock: true,
    rating: 4.6,
    reviews: 234
  },
  {
    id: '10',
    name: 'File Organizer Set',
    price: 299,
    image: '/api/placeholder/300/400',
    category: 'stationary',
    subcategory: 'office',
    description: 'Set of 5 colorful file organizers',
    inStock: true,
    rating: 4.3,
    reviews: 45
  }
];

export const useStore = create<Store>((set, get) => ({
  products: sampleProducts,
  cart: [],
  isCartOpen: false,
  searchQuery: '',
  selectedCategory: 'all',

  addToCart: (product: Product) => {
    const cart = get().cart;
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      set({
        cart: cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      });
    } else {
      set({
        cart: [...cart, { ...product, quantity: 1 }]
      });
    }
  },

  removeFromCart: (productId: string) => {
    set({
      cart: get().cart.filter(item => item.id !== productId)
    });
  },

  updateQuantity: (productId: string, quantity: number) => {
    if (quantity <= 0) {
      get().removeFromCart(productId);
      return;
    }
    
    set({
      cart: get().cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    });
  },

  clearCart: () => {
    set({ cart: [] });
  },

  toggleCart: () => {
    set({ isCartOpen: !get().isCartOpen });
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },

  setSelectedCategory: (category: string) => {
    set({ selectedCategory: category });
  },

  getTotalItems: () => {
    return get().cart.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));
