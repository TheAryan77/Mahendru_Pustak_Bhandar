# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 📚 Mahendru Pustak Bhandar - Ecommerce Website ✨

A modern, colorful, and feature-rich ecommerce website for **Mahendru Pustak Bhandar** - your trusted book and stationary shop since 1985!

## 🏪 About The Shop

- **Name**: MAHENDRU PUSTAK BHANDAR
- **Founder**: Santosh Mahendru 👨‍💼
- **Co-founder**: Nikhil Mahendru 🤝
- **Since**: 1985 🗓️
- **Specialization**: Books 📚 & Stationary Items ✏️

## ✨ Features

### 🎨 Design & UI
- **Vibrant & Funky Colors**: Custom color palette with gradients
- **Emojis Throughout**: Friendly and engaging interface
- **Smooth Animations**: Powered by Framer Motion
- **Responsive Design**: Mobile-first approach
- **Modern Layout**: Clean and professional look

### 📚 Product Categories
- **Books Section**:
  - 🕉️ Spiritual Books (Bhagavad Gita, Ramayana, etc.)
  - 📖 Novels (The Alchemist, etc.)
  - 💰 Finance Books (Rich Dad Poor Dad, etc.)
  - 🚀 Self-Help Books (Atomic Habits, etc.)

- **Stationary Section**:
  - 📝 Notebooks & Journals
  - 🖊️ Pens & Writing Instruments
  - 🎨 Art Supplies
  - 🧮 Electronics (Calculators, etc.)
  - 📁 Office Supplies

### 🛒 Ecommerce Features
- **Shopping Cart**: Add/remove items with quantity controls
- **Search & Filter**: Find products easily
- **Category Navigation**: Browse by books or stationary
- **Product Reviews**: Star ratings and customer feedback
- **Responsive Design**: Works on all devices
- **Toast Notifications**: User-friendly feedback

### 🛠️ Technical Features
- **React 18** with TypeScript
- **Vite** for fast development
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Zustand** for state management
- **Lucide React** for icons

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mahendru-pustak-bhandar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation & search
│   ├── Hero.tsx           # Hero section with stats
│   ├── ProductCard.tsx    # Individual product display
│   ├── ProductSection.tsx # Products grid & filters
│   ├── ShoppingCart.tsx   # Cart sidebar
│   └── Footer.tsx         # Footer with contact info
├── store.ts               # Zustand store for state management
├── App.tsx               # Main app component
├── index.css             # Global styles with Tailwind
└── main.tsx             # App entry point
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Color Palette

- **Primary**: Orange gradient (Warm & welcoming)
- **Secondary**: Blue gradient (Trust & reliability)
- **Accent**: Purple gradient (Creativity & innovation)

## 📱 Features Showcase

### 🏠 Homepage
- Engaging hero section with founder information
- Statistics showcase (10,000+ books, 50,000+ customers)
- Beautiful gradient backgrounds and animations

### 🔍 Product Discovery
- Smart search functionality
- Category-based filtering
- Sort by price, rating, or name
- Grid/List view toggle

### 🛒 Shopping Experience
- Smooth add-to-cart animations
- Real-time cart updates
- Quantity management
- Price calculations with tax
- Checkout simulation

### 📞 Contact & Information
- Store location and hours
- Contact information
- Social media links
- Newsletter signup

## 🌟 Future Enhancements

- [ ] User authentication
- [ ] Payment gateway integration
- [ ] Order tracking
- [ ] Product reviews system
- [ ] Wishlist functionality
- [ ] Advanced search filters
- [ ] Product recommendations
- [ ] Multi-language support

## 👥 Team

**Founder**: Santosh Mahendru  
**Co-founder**: Nikhil Mahendru  
**Developer**: Built with ❤️ for the Mahendru family business

## 📞 Contact

- **Phone**: +91 98765 43210
- **Email**: info@mahendrupustakbhandar.com
- **Address**: 123 Knowledge Street, Education Colony, Delhi - 110001

---

**Made with ❤️ for book lovers and knowledge seekers! 📚✨**

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
