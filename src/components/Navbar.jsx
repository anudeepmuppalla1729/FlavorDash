import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';

function Navbar({ cartCount }) {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-opacity-80 transition-colors duration-300">
            FlavorDash
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/" 
              className={`text-dark hover:text-primary transition-colors duration-300 ${location.pathname === '/' ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/restaurants" 
              className={`text-dark hover:text-primary transition-colors duration-300 pr-3 ${location.pathname === '/restaurants' ? 'text-primary font-semibold' : ''}`}
            >
              Restaurants
            </Link>
            <Link 
              to="/orders" 
              className={`text-dark hover:text-primary transition-colors duration-300 ${location.pathname === '/orders' ? 'text-primary font-semibold' : ''}`}
            >
              Orders
            </Link>
            <Link 
              to="/cart" 
              className={`relative pl-7 ${location.pathname === '/cart' ? 'text-primary' : ''}`}
            >
              <ShoppingCartIcon className="h-6 w-6 text-dark hover:text-primary transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;