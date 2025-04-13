import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  const featuredRestaurants = [
    {
      id: 1,
      name: 'Burger Palace',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500',
      cuisine: 'American',
      rating: 4.8,
      deliveryTime: '20-30 min'
    },
    {
      id: 2,
      name: 'Pizza Heaven',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
      cuisine: 'Italian',
      rating: 4.6,
      deliveryTime: '25-35 min'
    },
    {
      id: 3,
      name: 'Sushi Master',
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500',
      cuisine: 'Japanese',
      rating: 4.9,
      deliveryTime: '30-40 min'
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative text-center space-y-6 max-w-3xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-shadow"
          >
            Delicious Food Delivered to Your Door
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl"
          >
            Order from the best local restaurants with easy, on-demand delivery.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link to="/restaurants" className="btn-primary text-lg">
              Browse Restaurants
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredRestaurants.map((restaurant) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card"
            >
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{restaurant.name}</h3>
                <p className="text-gray-600">{restaurant.cuisine}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">⭐ {restaurant.rating}</span>
                  <span className="text-gray-600">{restaurant.deliveryTime}</span>
                </div>
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
      </section>

      {/* Special Offers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                20%
              </div>
              <div>
                <h3 className="text-xl font-semibold">First Order Discount</h3>
                <p className="text-gray-600">Get 20% off on your first order!</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card flex items-center space-x-4"
            >
              <div className="flex-shrink-0 w-24 h-24 bg-secondary rounded-full flex items-center justify-center text-white text-3xl font-bold">
                Free
              </div>
              <div>
                <h3 className="text-xl font-semibold">Free Delivery</h3>
                <p className="text-gray-600">On orders above $30</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;