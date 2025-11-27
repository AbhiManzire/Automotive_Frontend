import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBell, FaCheckCircle, FaShoppingCart, FaTruck, FaTag, FaCreditCard, FaInfoCircle, FaGift, FaCheck, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Order Confirmed',
      message: 'Your order #12345 for **Brake Pads Set** has been **confirmed** and is being processed. Expected delivery: **2-3 business days**.',
      time: '2h ago',
      read: false,
      date: 'today',
      icon: <FaShoppingCart className="text-lg" />,
      iconBg: 'bg-gray-100'
    },
    {
      id: 2,
      type: 'shipping',
      title: 'Order Shipped',
      message: 'Your order #12340 for **Engine Oil Filter** has been **shipped**. Track your package now. Estimated arrival: **Tomorrow**.',
      time: '5h ago',
      read: false,
      date: 'today',
      icon: <FaTruck className="text-lg" />,
      iconBg: 'bg-gray-100'
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Successful',
      message: 'We have received the payment of **₹2,500** for order #12340. The payment was processed **successfully**.',
      time: '7h ago',
      read: false,
      date: 'today',
      icon: <FaCreditCard className="text-lg" />,
      iconBg: 'bg-gray-100'
    },
    {
      id: 4,
      type: 'offer',
      title: 'Special Offer',
      message: 'Get **20% off** on all brake parts. Limited time offer! Valid until **December 31, 2024**.',
      time: '1 day ago',
      read: true,
      date: 'yesterday',
      icon: <FaTag className="text-lg" />,
      iconBg: 'bg-gray-100'
    },
    {
      id: 5,
      type: 'info',
      title: 'Service Reminder',
      message: 'Your vehicle service for **Honda City** is set to **expire on January 15, 2025**. Please book your appointment to continue service benefits.',
      time: '2 days ago',
      read: true,
      date: 'yesterday',
      icon: <FaClock className="text-lg" />,
      iconBg: 'bg-gray-100'
    },
    {
      id: 6,
      type: 'gift',
      title: 'Reward Points Added',
      message: 'You earned **50 reward points** for your recent purchase. Use them on your next order to get discounts.',
      time: '3 days ago',
      read: true,
      date: 'older',
      icon: <FaGift className="text-lg" />,
      iconBg: 'bg-gray-100'
    }
  ]);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })));
  };

  const markAsRead = (id) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const handleNotificationClick = (notification) => {
    markAsRead(notification.id);
    switch (notification.type) {
      case 'order':
      case 'shipping':
        navigate('/myorder');
        break;
      case 'offer':
        navigate('/category');
        break;
      case 'payment':
        navigate('/wallet');
        break;
      default:
        break;
    }
  };

  const formatMessage = (message) => {
    const parts = message.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const text = part.slice(2, -2);
        // Check if it's a date or urgent info (red color)
        if (text.includes('expire') || text.includes('January') || text.includes('December')) {
          return <span key={index} className="font-bold text-red-600">{text}</span>;
        }
        return <span key={index} className="font-bold text-gray-900">{text}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  const groupedNotifications = {
    today: notifications.filter(n => n.date === 'today'),
    yesterday: notifications.filter(n => n.date === 'yesterday'),
    older: notifications.filter(n => n.date === 'older')
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="text-gray-600 hover:text-gray-900 mb-6 flex items-center gap-2 transition-colors"
        >
          <span>←</span> Back
        </button>

        {/* Main Notification Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Notifications</h1>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
              >
                <FaCheckCircle className="text-sm" />
                <span className="text-sm sm:text-base">Mark all as read</span>
              </button>
            )}
          </div>

          {/* Notifications Content */}
          <div className="p-6">
            {/* Today Section */}
            {groupedNotifications.today.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Today</h2>
                <div className="space-y-3">
                  {groupedNotifications.today.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNotificationClick(notification)}
                      className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        !notification.read 
                          ? 'bg-green-50 hover:bg-green-100 border border-green-200' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`${notification.iconBg} p-3 rounded-full flex-shrink-0`}>
                        {notification.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2 flex-1">
                            {!notification.read && (
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                            )}
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                              {notification.title}
                            </h3>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {formatMessage(notification.message)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Yesterday Section */}
            {groupedNotifications.yesterday.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Yesterday</h2>
                <div className="space-y-3">
                  {groupedNotifications.yesterday.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNotificationClick(notification)}
                      className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        !notification.read 
                          ? 'bg-green-50 hover:bg-green-100 border border-green-200' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`${notification.iconBg} p-3 rounded-full flex-shrink-0`}>
                        {notification.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2 flex-1">
                            {!notification.read && (
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                            )}
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                              {notification.title}
                            </h3>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {formatMessage(notification.message)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Older Section */}
            {groupedNotifications.older.length > 0 && (
              <div className="mb-8">
                <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">Older</h2>
                <div className="space-y-3">
                  {groupedNotifications.older.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNotificationClick(notification)}
                      className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        !notification.read 
                          ? 'bg-green-50 hover:bg-green-100 border border-green-200' 
                          : 'bg-white hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`${notification.iconBg} p-3 rounded-full flex-shrink-0`}>
                        {notification.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-1">
                          <div className="flex items-center gap-2 flex-1">
                            {!notification.read && (
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1"></div>
                            )}
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                              {notification.title}
                            </h3>
                          </div>
                          <span className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {formatMessage(notification.message)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Empty State */}
            {notifications.length === 0 && (
              <div className="text-center py-12">
                <FaBell className="text-5xl text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Notifications</h3>
                <p className="text-gray-500">You don't have any notifications yet.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;

