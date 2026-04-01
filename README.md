# Paradise Nursery Shopping Application

A comprehensive e-commerce web application for Paradise Nursery, an online plant shop. This React-based application provides a complete shopping experience with Redux state management, responsive design, and intuitive cart functionality.

## Project Overview

Paradise Nursery Shopping Application allows users to browse through a curated collection of plants organized by categories, add items to their shopping cart, and manage their selections with full cart functionality. The application emphasizes user experience with responsive design and smooth interactions.

## Features

### Core Functionality
- **Landing Page**: Welcome page with company branding and navigation entry point
- **Product Catalog**: Browse plants organized in 3+ categories with 6+ plants each
- **Shopping Cart**: Full cart management with Redux state persistence
- **Responsive Design**: Optimized for desktop and mobile devices
- **Navigation System**: Seamless navigation with dynamic cart counter

### Detailed Features
- **Plant Categories**: Indoor Plants, Outdoor Plants, and Succulents
- **Product Display**: Each plant shows thumbnail, name, and price
- **Add to Cart**: One-click addition with button state management
- **Cart Management**: Increase/decrease quantities, remove items
- **Total Calculation**: Real-time cart total and item count updates
- **Checkout Process**: Placeholder checkout with "Coming Soon" message
- **Company Information**: Dedicated About Us section

## Technology Stack

- **Frontend Framework**: React 18 with functional components and hooks
- **State Management**: Redux Toolkit for cart operations
- **Routing**: React Router DOM for single-page application navigation
- **Styling**: CSS3 with responsive design and CSS variables
- **Build Tool**: Create React App
- **Package Manager**: npm

## Installation and Setup

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd paradise-nursery-shopping-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner in interactive watch mode
- `npm run build`: Builds the app for production to the `build` folder
- `npm run eject`: Removes Create React App abstraction (one-way operation)

## Project Structure

```
paradise-nursery-shopping-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Navigation.jsx
│   │   └── ProductList.jsx
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Component Descriptions

### Core Components

- **App.js**: Root component with routing configuration and Redux Provider
- **Navigation.jsx**: Site-wide navigation with dynamic cart counter
- **LandingPage.jsx**: Welcome page with company branding
- **ProductList.jsx**: Plant catalog with categorized display
- **CartPage.jsx**: Shopping cart management interface
- **CartItem.jsx**: Individual cart item with quantity controls
- **AboutUs.jsx**: Company information and values

### Redux Components

- **store.js**: Redux store configuration
- **CartSlice.jsx**: Cart state management with Redux Toolkit

### Styling

- **App.css**: Comprehensive responsive styling with CSS variables

## Usage Instructions

### Browsing Plants
1. Start on the landing page
2. Click "Get Started" to view the plant catalog
3. Browse through three categories: Indoor Plants, Outdoor Plants, and Succulents
4. Each category contains 6+ unique plants with images, names, and prices

### Shopping Cart Operations
1. Click "Add to Cart" on any plant to add it to your cart
2. Button becomes disabled and shows "Added to Cart"
3. Cart counter in navigation updates automatically
4. Navigate to cart page to manage items

### Cart Management
1. View all cart items with thumbnails and details
2. Use +/- buttons to adjust quantities
3. Click "Delete" to remove items completely
4. View real-time total calculations
5. Use "Continue Shopping" to return to catalog
6. Click "Checkout" for placeholder checkout message

## Development Workflow

### Adding New Plants
1. Edit the `plantsData` object in `ProductList.jsx`
2. Follow the existing plant object structure
3. Ensure proper categorization and unique IDs

### Modifying Styles
1. Update CSS variables in `App.css` for global changes
2. Component-specific styles are organized by component
3. Responsive breakpoints are defined for mobile compatibility

### Redux State Management
1. Cart operations are handled through `CartSlice.jsx`
2. Actions include: addToCart, removeFromCart, increaseQuantity, decreaseQuantity
3. State automatically calculates totals and item counts

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The application is fully responsive with breakpoints at:
- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: 767px and below

## Future Enhancements

- User authentication and accounts
- Payment processing integration
- Plant care guides and tips
- Wishlist functionality
- Product reviews and ratings
- Inventory management
- Order history and tracking

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for educational purposes as part of a web development course.

## Support

For questions or issues, please refer to the course materials or contact your instructor.

---

**Paradise Nursery Shopping Application** - Bringing nature's beauty to your digital doorstep.