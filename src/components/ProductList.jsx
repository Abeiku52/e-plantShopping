import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

// Plant data with 3 categories and 6+ plants each
const plantsData = {
  "Indoor Plants": [
    {
      id: "indoor-1",
      name: "Snake Plant",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    },
    {
      id: "indoor-2", 
      name: "Monstera Deliciosa",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    },
    {
      id: "indoor-3",
      name: "Fiddle Leaf Fig",
      price: 65.99,
      image: "https://images.unsplash.com/photo-1586093248292-4e6636b4e3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    },
    {
      id: "indoor-4",
      name: "Peace Lily",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    },
    {
      id: "indoor-5",
      name: "Rubber Plant",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1586093248292-4e6636b4e3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    },
    {
      id: "indoor-6",
      name: "ZZ Plant",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Indoor Plants"
    }
  ],
  "Outdoor Plants": [
    {
      id: "outdoor-1",
      name: "Rose Bush",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    },
    {
      id: "outdoor-2",
      name: "Lavender",
      price: 15.99,
      image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    },
    {
      id: "outdoor-3",
      name: "Sunflower",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1597848212624-e6f9e1d7e5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    },
    {
      id: "outdoor-4",
      name: "Tomato Plant",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1592841200221-21e1c4e6e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    },
    {
      id: "outdoor-5",
      name: "Marigold",
      price: 6.99,
      image: "https://images.unsplash.com/photo-1597848212624-e6f9e1d7e5d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    },
    {
      id: "outdoor-6",
      name: "Basil Plant",
      price: 9.99,
      image: "https://images.unsplash.com/photo-1592841200221-21e1c4e6e8e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Outdoor Plants"
    }
  ],
  "Succulents": [
    {
      id: "succulent-1",
      name: "Aloe Vera",
      price: 16.99,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    },
    {
      id: "succulent-2",
      name: "Jade Plant",
      price: 22.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    },
    {
      id: "succulent-3",
      name: "Echeveria",
      price: 14.99,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    },
    {
      id: "succulent-4",
      name: "String of Pearls",
      price: 18.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    },
    {
      id: "succulent-5",
      name: "Barrel Cactus",
      price: 25.99,
      image: "https://images.unsplash.com/photo-1509423350716-97f2360af2e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    },
    {
      id: "succulent-6",
      name: "Haworthia",
      price: 13.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Succulents"
    }
  ]
};

// PlantItem component
const PlantItem = ({ plant, isInCart, onAddToCart }) => {
  return (
    <div className="plant-item">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-price">${plant.price}</p>
        <button 
          className="add-to-cart-btn"
          onClick={() => onAddToCart(plant)}
          disabled={isInCart}
        >
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  
  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };
  
  const isPlantInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list">
      <h1>Our Plant Collection</h1>
      
      {Object.entries(plantsData).map(([categoryName, plants]) => (
        <div key={categoryName} className="category-section">
          <h2 className="category-title">{categoryName}</h2>
          <div className="plants-grid">
            {plants.map(plant => (
              <PlantItem
                key={plant.id}
                plant={plant}
                isInCart={isPlantInCart(plant.id)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;