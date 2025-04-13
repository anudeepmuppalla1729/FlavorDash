import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">FlavorDash</h3>
            <p className="text-gray-300">Bringing delicious food right to your doorstep.</p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-200 tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/restaurants" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Restaurants
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-primary transition-colors duration-300">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-gray-200 tracking-wide">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: support@flavordash.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Delivery Street</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>© {new Date().getFullYear()} FlavorDash. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;