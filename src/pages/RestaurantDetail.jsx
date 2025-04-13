import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function RestaurantDetail({ cart, setCart }) {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  // Simulated restaurant data
  useEffect(() => {
    // In a real application, this would be an API call
    const restaurants = {
      1: {
        id: 1,
        name: 'Burger Palace',
        image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200',
        cuisine: 'American',
        rating: 4.8,
        deliveryTime: '20-30 min',
        menu: [
          {
            id: 1,
            category: 'Burgers',
            items: [
              {
                id: 101,
                name: 'Classic Cheeseburger',
                description: 'Beef patty, cheddar cheese, lettuce, tomato, onions, pickles',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500'
              },
              {
                id: 102,
                name: 'Bacon BBQ Burger',
                description: 'Beef patty, bacon, BBQ sauce, cheddar cheese, onion rings',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Sides',
            items: [
              {
                id: 201,
                name: 'French Fries',
                description: 'Crispy golden fries with sea salt',
                price: 4.99,
                image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500'
              },
              {
                id: 202,
                name: 'Onion Rings',
                description: 'Crispy battered onion rings with dipping sauce',
                price: 5.99,
                image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500'
              }
            ]
          }
        ]
      },
      2: {
        id: 2,
        name: 'Pizza Heaven',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200',
        cuisine: 'Italian',
        rating: 4.6,
        deliveryTime: '25-35 min',
        menu: [
          {
            id: 1,
            category: 'Pizzas',
            items: [
              {
                id: 301,
                name: 'Margherita Pizza',
                description: 'Fresh tomato sauce, mozzarella, basil',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=500'
              },
              {
                id: 302,
                name: 'Pepperoni Supreme',
                description: 'Pepperoni, mushrooms, bell peppers, olives',
                price: 17.99,
                image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Pasta',
            items: [
              {
                id: 401,
                name: 'Spaghetti Carbonara',
                description: 'Creamy sauce with pancetta and parmesan',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500'
              },
              {
                id: 402,
                name: 'Fettuccine Alfredo',
                description: 'Rich cream sauce with parmesan cheese',
                price: 12.99,
                image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500'
              }
            ]
          }
        ]
      },
      3: {
        id: 3,
        name: 'Sushi Master',
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=1200',
        cuisine: 'Japanese',
        rating: 4.9,
        deliveryTime: '30-40 min',
        menu: [
          {
            id: 1,
            category: 'Sushi Rolls',
            items: [
              {
                id: 501,
                name: 'Dragon Roll',
                description: 'Eel, cucumber, avocado, topped with tobiko',
                price: 16.99,
                image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=500'
              },
              {
                id: 502,
                name: 'Rainbow Roll',
                description: 'California roll topped with assorted sashimi',
                price: 18.99,
                image: 'https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Appetizers',
            items: [
              {
                id: 601,
                name: 'Miso Soup',
                description: 'Traditional Japanese soup with tofu and seaweed',
                price: 3.99,
                image: 'https://images.unsplash.com/photo-1607301405390-d831c242f59b?w=500'
              },
              {
                id: 602,
                name: 'Edamame',
                description: 'Steamed soybeans with sea salt',
                price: 4.99,
                image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=500'
              }
            ]
          }
        ]
      },
      4: {
        id: 4,
        name: 'Taco Fiesta',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200',
        cuisine: 'Mexican',
        rating: 4.7,
        deliveryTime: '20-35 min',
        menu: [
          {
            id: 1,
            category: 'Tacos',
            items: [
              {
                id: 701,
                name: 'Classic Street Tacos',
                description: 'Three corn tortillas with seasoned beef, onions, cilantro',
                price: 9.99,
                image: 'https://images.unsplash.com/photo-1613514785940-daed07799d9b?w=500'
              },
              {
                id: 702,
                name: 'Fish Tacos',
                description: 'Grilled fish, cabbage slaw, chipotle crema',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1512838243191-e81e8f66f1fd?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Sides',
            items: [
              {
                id: 801,
                name: 'Mexican Rice',
                description: 'Traditional Mexican rice with vegetables',
                price: 3.99,
                image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=500'
              },
              {
                id: 802,
                name: 'Refried Beans',
                description: 'Creamy refried pinto beans',
                price: 3.99,
                image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?w=500'
              }
            ]
          }
        ]
      },
      5: {
        id: 5,
        name: 'Pasta Paradise',
        image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200',
        cuisine: 'Italian',
        rating: 4.5,
        deliveryTime: '25-40 min',
        menu: [
          {
            id: 1,
            category: 'Pasta',
            items: [
              {
                id: 901,
                name: 'Classic Lasagna',
                description: 'Layers of pasta, meat sauce, and cheese',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500'
              },
              {
                id: 902,
                name: 'Penne Arrabbiata',
                description: 'Spicy tomato sauce with garlic and red chili',
                price: 13.99,
                image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Appetizers',
            items: [
              {
                id: 1001,
                name: 'Bruschetta',
                description: 'Toasted bread with tomatoes and basil',
                price: 7.99,
                image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500'
              },
              {
                id: 1002,
                name: 'Garlic Bread',
                description: 'Fresh bread with garlic butter and herbs',
                price: 5.99,
                image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=500'
              }
            ]
          }
        ]
      },
      6: {
        id: 6,
        name: 'Dragon Wok',
        image: 'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?w=1200',
        cuisine: 'Chinese',
        rating: 4.6,
        deliveryTime: '20-35 min',
        menu: [
          {
            id: 1,
            category: 'Main Dishes',
            items: [
              {
                id: 1101,
                name: 'Kung Pao Chicken',
                description: 'Spicy diced chicken with peanuts and vegetables',
                price: 14.99,
                image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'
              },
              {
                id: 1102,
                name: 'Beef with Broccoli',
                description: 'Tender beef slices with fresh broccoli in brown sauce',
                price: 15.99,
                image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=500'
              }
            ]
          },
          {
            id: 2,
            category: 'Rice & Noodles',
            items: [
              {
                id: 1201,
                name: 'Special Fried Rice',
                description: 'Rice with eggs, vegetables, and choice of protein',
                price: 11.99,
                image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'
              },
              {
                id: 1202,
                name: 'Lo Mein',
                description: 'Stir-fried noodles with vegetables',
                price: 10.99,
                image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500'
              }
            ]
          }
        ]
      }
    };

    const restaurantData = restaurants[parseInt(id)];
    setRestaurant(restaurantData);
  }, [id]);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  if (!restaurant) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Restaurant Header */}
      <div className="relative h-[300px] rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${restaurant.image})`,
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold text-shadow">{restaurant.name}</h1>
            <div className="mt-2 space-x-4">
              <span>⭐ {restaurant.rating}</span>
              <span>•</span>
              <span>{restaurant.cuisine}</span>
              <span>•</span>
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      {restaurant.menu.map((section) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                className="card flex space-x-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <div className="flex-grow space-y-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">${item.price.toFixed(2)}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 w-80"
        >
          <h3 className="text-lg font-semibold mb-2">Your Cart</h3>
          <div className="space-y-2 mb-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>
                ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
              </span>
            </div>
            <Link to="/cart" className="btn-primary w-full text-center mt-4 block">
              Proceed to Checkout
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default RestaurantDetail;