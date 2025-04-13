import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Restaurants() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const restaurants = [
    {
      id: 1,
      name: 'Burger Palace',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
      cuisine: 'American',
      rating: 4.8,
      deliveryTime: '20-30 min',
      minOrder: 15
    },
    {
      id: 2,
      name: 'Pizza Heaven',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      cuisine: 'Italian',
      rating: 4.6,
      deliveryTime: '25-35 min',
      minOrder: 20
    },
    {
      id: 3,
      name: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
      cuisine: 'Japanese',
      rating: 4.9,
      deliveryTime: '30-40 min',
      minOrder: 25
    },
    {
      id: 4,
      name: 'Taco Fiesta',
      image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500',
      cuisine: 'Mexican',
      rating: 4.7,
      deliveryTime: '20-35 min',
      minOrder: 18
    },
    {
      id: 5,
      name: 'Pasta Paradise',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500',
      cuisine: 'Italian',
      rating: 4.5,
      deliveryTime: '25-40 min',
      minOrder: 22
    },
    {
      id: 6,
      name: 'Dragon Wok',
      image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=500',
      cuisine: 'Chinese',
      rating: 4.6,
      deliveryTime: '20-35 min',
      minOrder: 20
    }
  ];

  const cuisines = ['all', ...new Set(restaurants.map(r => r.cuisine))];

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCuisine = selectedCuisine === 'all' || restaurant.cuisine === selectedCuisine;
    return matchesSearch && matchesCuisine;
  });

  return (
    <div className="space-y-8">
      {/* Search and Filter Section */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search restaurants or cuisines..."
            className="input-field md:w-1/4 bg-white text-gray-700 placeholder-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="input-field md:w-1/4 bg-white text-gray-700 placeholder-gray-400"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            {cuisines.map(cuisine => (
              <option key={cuisine} value={cuisine}>
                {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="card"
          >
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4 space-y-3">
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <p className="text-gray-600">{restaurant.cuisine}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-semibold">⭐ {restaurant.rating}</span>
                <span className="text-gray-600">{restaurant.deliveryTime}</span>
              </div>
              <p className="text-sm text-gray-500">Minimum order: ${restaurant.minOrder}</p>
              <Link
                to={`/restaurant/${restaurant.id}`}
                className="btn-secondary w-full text-center mt-4 block"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-8">
          <p className="text-xl text-gray-600">No restaurants found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default Restaurants;