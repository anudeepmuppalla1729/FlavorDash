import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const statusColors = {
  'pending': 'bg-yellow-500',
  'processing': 'bg-blue-500',
  'delivered': 'bg-green-500',
  'cancelled': 'bg-red-500'
};

function OrderCard({ order }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold text-primary tracking-tight">#{order.id.slice(-4)}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {order.deliveryInfo.name}
              </h3>
              <p className="text-sm text-gray-500">
                {new Date(order.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-white text-sm ${statusColors[order.status || 'pending']}`}>
              {(order.status || 'pending').charAt(0).toUpperCase() + (order.status || 'pending').slice(1)}
            </span>
            <span className="text-lg font-bold text-primary">${order.total.toFixed(2)}</span>
            {isExpanded ? (
              <ChevronUpIcon className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Order Items</h4>
                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                        <div className="flex items-center space-x-2">
                          <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm text-primary">
                            {item.quantity}
                          </span>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="text-gray-700">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Delivery Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                    <div className="space-y-2">
                      <p><span className="text-gray-500">Phone:</span> {order.deliveryInfo.phone}</p>
                      <p><span className="text-gray-500">Email:</span> {order.deliveryInfo.email}</p>
                    </div>
                    <div className="space-y-2">
                      <p><span className="text-gray-500">Address:</span> {order.deliveryInfo.address}</p>
                      {order.deliveryInfo.notes && (
                        <p><span className="text-gray-500">Notes:</span> {order.deliveryInfo.notes}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Order Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <div className="flex-1">
                        <p className="font-medium">Order Placed</p>
                        <p className="text-sm text-gray-500">{new Date(order.date).toLocaleTimeString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <div className="flex-1">
                        <p className="font-medium">Processing</p>
                        <p className="text-sm text-gray-500">Your order is being prepared</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          My Orders
        </motion.h1>
        <p className="text-gray-600 mb-4">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8"
      >
        My Orders
      </motion.h1>

      <div className="space-y-6">
        {orders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <OrderCard order={order} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Orders;