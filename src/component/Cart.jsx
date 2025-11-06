import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  MdShoppingCart,
  MdLocalShipping,
  MdDone,
  MdOutlineHome,
  MdOutlinePayment,
  MdOutlineInventory,
  MdMyLocation,
  MdPlace,
  MdDirectionsCar,
  MdSchedule,
} from "react-icons/md";

// Google Maps component
const GoogleMap = ({ driverLocation, pickupLocation, deliveryLocation, isMoving }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState({});
  const [route, setRoute] = useState(null);

  useEffect(() => {
    // Load Google Maps script
    const loadGoogleMaps = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=geometry`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
        
        script.onload = initializeMap;
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      const mapOptions = {
        center: { lat: 28.58, lng: 77.37 },
        zoom: 12,
        styles: [
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }]
          },
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }]
          }
        ]
      };

      const googleMap = new window.google.maps.Map(mapRef.current, mapOptions);
      setMap(googleMap);

      // Create markers
      const pickupMarker = new window.google.maps.Marker({
        position: pickupLocation,
        map: googleMap,
        title: "Pickup Location",
        icon: {
          url: "data:image/svg+xml;base64," + btoa(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#EF4444" stroke="white" stroke-width="3"/>
              <text x="16" y="21" text-anchor="middle" fill="white" font-size="14">P</text>
            </svg>
          `)
        }
      });

      const deliveryMarker = new window.google.maps.Marker({
        position: deliveryLocation,
        map: googleMap,
        title: "Delivery Location",
        icon: {
          url: "data:image/svg+xml;base64," + btoa(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#10B981" stroke="white" stroke-width="3"/>
              <text x="16" y="21" text-anchor="middle" fill="white" font-size="14">D</text>
            </svg>
          `)
        }
      });

      const driverMarker = new window.google.maps.Marker({
        position: driverLocation,
        map: googleMap,
        title: "Driver Location",
        icon: {
          url: "data:image/svg+xml;base64," + btoa(`
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="white" stroke-width="3"/>
              <path d="M15 25L20 15L25 25H15Z" fill="white"/>
            </svg>
          `)
        }
      });

      setMarkers({ pickup: pickupMarker, delivery: deliveryMarker, driver: driverMarker });

      // Draw route
      const routePath = new window.google.maps.Polyline({
        path: [pickupLocation, driverLocation, deliveryLocation],
        geodesic: true,
        strokeColor: "#3B82F6",
        strokeOpacity: 1.0,
        strokeWeight: 4,
        strokeDasharray: [10, 10]
      });

      routePath.setMap(googleMap);
      setRoute(routePath);

      // Fit bounds to show all points
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(pickupLocation);
      bounds.extend(deliveryLocation);
      bounds.extend(driverLocation);
      googleMap.fitBounds(bounds, { padding: 50 });
    };

    loadGoogleMaps();
  }, []);

  // Update driver position
  useEffect(() => {
    if (markers.driver && map) {
      markers.driver.setPosition(driverLocation);
      
      // Update route
      if (route) {
        route.setPath([pickupLocation, driverLocation, deliveryLocation]);
      }

      // Smooth pan to driver location if moving
      if (isMoving) {
        map.panTo(driverLocation);
      }
    }
  }, [driverLocation, isMoving, markers.driver, map, route, pickupLocation, deliveryLocation]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
  );
};

// Fallback component if Google Maps fails to load
const FallbackMap = ({ driverLocation, isMoving, setIsMoving }) => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden relative border-2 border-blue-200">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">🗺️</div>
          <h3 className="text-xl font-bold mb-2">Google Maps Loading...</h3>
          <p className="text-blue-100">Real-time driver location tracking</p>
          <p className="text-yellow-200 text-sm mt-2">Add your Google Maps API key to enable live tracking</p>
        </div>
        
        {/* Map Markers */}
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <MdPlace className="text-white text-lg" />
            </div>
            <div className="mt-1 bg-white px-2 py-1 rounded-lg shadow text-xs font-semibold">
              Pickup
            </div>
          </div>
        </div>

        <div className="absolute bottom-1/4 right-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
              <MdDone className="text-white text-lg" />
            </div>
            <div className="mt-1 bg-white px-2 py-1 rounded-lg shadow text-xs font-semibold">
              Delivery
            </div>
          </div>
        </div>

        {/* Moving Driver */}
        <div 
          className="absolute w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-pulse"
          style={{
            left: `${((driverLocation.lng - 77.37) / 0.02) * 100}%`,
            top: `${((driverLocation.lat - 28.58) / 0.05) * 100}%`,
            transition: 'all 3s ease-in-out'
          }}
        >
          <MdDirectionsCar className="text-white text-lg" />
        </div>

        {/* Route Line */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full">
            <line 
              x1="25%" y1="25%" 
              x2="75%" y2="75%" 
              stroke="white" 
              strokeWidth="3" 
              strokeDasharray="5,5"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button 
          onClick={() => setIsMoving(!isMoving)}
          className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          {isMoving ? "⏸️" : "▶️"}
        </button>
        <button className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
          <MdMyLocation className="text-gray-700" />
        </button>
      </div>
    </div>
  );
};

const shippingSteps = [
  { name: "Order Placed", icon: <MdShoppingCart /> },
  { name: "Processing", icon: <MdOutlineInventory /> },
  { name: "Payment Confirmed", icon: <MdOutlinePayment /> },
  { name: "Shipped", icon: <MdLocalShipping /> },
  { name: "Out for Delivery", icon: <MdOutlineHome /> },
  { name: "Delivered", icon: <MdDone /> },
];

const categories = [
  { name: "Electronics", link: "/catalog/electric_components" },
  { name: "Lighting", link: "/catalog/lighting" },
  { name: "Car Accessories", link: "/catalog/car_accessories" },
  { name: "Filters", link: "/catalog/filters" },
  { name: "Maintenance Service Parts", link: "/catalog/maintenance_service_parts" },
  { name: "Bearings", link: "/catalog/bearings" },
];

// Mock tracking data
const trackingData = {
  orderNumber: "ORD-7890-4567",
  driver: {
    name: "Rajesh Kumar",
    phone: "+91 98765 43210",
    vehicle: "Tata Ace",
    license: "DL01CD1234"
  },
  pickup: {
    address: "AutoCare Service Center, Sector 18, Noida",
    time: "2024-01-15T09:30:00",
    coordinates: { lat: 28.5355, lng: 77.3910 }
  },
  delivery: {
    address: "Your Location, Sector 62, Noida",
    time: "2024-01-15T14:00:00",
    coordinates: { lat: 28.6274, lng: 77.3760 }
  },
  currentLocation: {
    address: "Near DLF Mall, Sector 25, Noida",
    coordinates: { lat: 28.5840, lng: 77.3740 },
    timestamp: "2024-01-15T11:45:00"
  },
  estimatedDelivery: "30-45 minutes"
};

export default function ShippingStatus({ currentStep = 3 }) {
  const [showMap, setShowMap] = useState(false);
  const [driverLocation, setDriverLocation] = useState(trackingData.currentLocation.coordinates);
  const [isMoving, setIsMoving] = useState(true);
  const [mapsLoaded, setMapsLoaded] = useState(false);

  // Check if Google Maps is loaded
  useEffect(() => {
    const checkMaps = setInterval(() => {
      if (window.google) {
        setMapsLoaded(true);
        clearInterval(checkMaps);
      }
    }, 1000);

    return () => clearInterval(checkMaps);
  }, []);

  // Simulate driver movement
  useEffect(() => {
    if (showMap && isMoving && currentStep >= 4) {
      const interval = setInterval(() => {
        setDriverLocation(prev => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001
        }));
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [showMap, isMoving, currentStep]);

  const MapView = () => (
    <div className="w-full h-96 rounded-2xl overflow-hidden relative border-2 border-blue-200 shadow-lg">
      {mapsLoaded ? (
        <GoogleMap 
          driverLocation={driverLocation}
          pickupLocation={trackingData.pickup.coordinates}
          deliveryLocation={trackingData.delivery.coordinates}
          isMoving={isMoving}
        />
      ) : (
        <FallbackMap 
          driverLocation={driverLocation}
          isMoving={isMoving}
          setIsMoving={setIsMoving}
        />
      )}

      {/* Map Controls */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button 
          onClick={() => setIsMoving(!isMoving)}
          className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          title={isMoving ? "Pause tracking" : "Resume tracking"}
        >
          {isMoving ? "⏸️" : "▶️"}
        </button>
        <button 
          className="bg-white p-3 rounded-lg shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
          title="Center on driver"
        >
          <MdMyLocation className="text-gray-700 text-lg" />
        </button>
      </div>

      {/* Driver Info Card */}
      <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MdDirectionsCar className="text-blue-600 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{trackingData.driver.name}</h4>
              <p className="text-sm text-gray-600">{trackingData.driver.vehicle} • {trackingData.driver.license}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold text-green-600">{trackingData.estimatedDelivery}</p>
            <p className="text-xs text-gray-500">ETA</p>
          </div>
        </div>
        
        <div className="mt-3 flex gap-2">
          <a 
            href={`tel:${trackingData.driver.phone}`}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            📞 Call Driver
          </a>
          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
            💬 Message
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span>Pickup Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Delivery Location</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span>Driver Location</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ... rest of your component remains the same
  const TrackingDetails = () => (
    <div className="w-full space-y-4">
      {/* Order Info */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Order Tracking</h3>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            {trackingData.orderNumber}
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pickup Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-green-600">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <MdPlace className="text-lg" />
              </div>
              <span className="font-semibold">Pickup Location</span>
            </div>
            <p className="text-gray-700">{trackingData.pickup.address}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MdSchedule />
              <span>Pickup: {new Date(trackingData.pickup.time).toLocaleTimeString()}</span>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-red-600">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <MdOutlineHome className="text-lg" />
              </div>
              <span className="font-semibold">Delivery Location</span>
            </div>
            <p className="text-gray-700">{trackingData.delivery.address}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MdSchedule />
              <span>Est. Delivery: {new Date(trackingData.delivery.time).toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Current Status</h3>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            In Transit
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <MdDirectionsCar className="text-blue-600 text-2xl" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-900">Driver is on the way</p>
            <p className="text-gray-600 text-sm">{trackingData.currentLocation.address}</p>
            <p className="text-gray-500 text-xs">
              Last updated: {new Date(trackingData.currentLocation.timestamp).toLocaleTimeString()}
            </p>
          </div>
          <button 
            onClick={() => setShowMap(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View on Map
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-10 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 rounded-2xl shadow-2xl w-full max-w-6xl mx-auto border border-gray-200">
      <h2 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-8 sm:mb-10 text-gray-800 text-center tracking-wide">
        {showMap ? "Live Package Tracking" : "Shipping Progress Tracker"}
      </h2>

      {/* Toggle between Map and Progress */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setShowMap(false)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            !showMap 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Progress View
        </button>
        <button
          onClick={() => setShowMap(true)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            showMap 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Map View
        </button>
      </div>

      {showMap ? (
        <MapView />
      ) : (
        <>
          {/* Progress Steps */}
          <div className="relative flex flex-wrap justify-center md:justify-between items-center w-full gap-8 sm:gap-4 md:gap-2 px-2 sm:px-4 md:px-8">
            {shippingSteps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;
              return (
                <div key={index} className="flex flex-col items-center relative flex-1 min-w-[80px] sm:min-w-[100px] text-center">
                  {index < shippingSteps.length - 1 && (
                    <div
                      className={`hidden md:block absolute top-1/2 left-1/2 h-1 w-full transform -translate-y-1/2 z-0 transition-all duration-700 ${
                        index < currentStep
                          ? "bg-gradient-to-r from-green-400 to-blue-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                  <div
                    className={`z-10 w-12 h-12 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white text-xl sm:text-2xl shadow-md transition-all duration-500 transform hover:scale-110 ${
                      isCompleted
                        ? "bg-gradient-to-br from-green-500 to-emerald-600 ring-4 ring-green-200"
                        : isActive
                        ? "bg-gradient-to-br from-blue-500 to-indigo-600 ring-4 ring-blue-200 animate-pulse"
                        : "bg-gray-300"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span
                    className={`text-xs sm:text-sm mt-2 font-semibold transition-colors ${
                      isCompleted
                        ? "text-green-600"
                        : isActive
                        ? "text-blue-600"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Status Message */}
          <div className="mt-10 sm:mt-12 text-center">
            <p className="text-base sm:text-lg text-gray-700">
              Current Status:{" "}
              <span className="font-semibold text-blue-600">
                {shippingSteps[currentStep]?.name || "Delivered"}
              </span>
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 px-4">
              Your order is being processed. We'll notify you once it moves to the next stage.
            </p>
          </div>

          {/* Tracking Details */}
          {currentStep >= 3 && <TrackingDetails />}
        </>
      )}

      {/* Empty Cart */}
      <div className="mt-10 sm:mt-14 w-full text-center px-2">
        <p className="text-base sm:text-lg border-b-2 border-gray-200 py-3 text-gray-600 mb-6 font-medium">
          🛒 Your Shopping Cart is Empty
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition transform hover:scale-105 shadow-lg text-sm sm:text-base"
        >
          Continue Shopping
        </Link>
      </div>

      {/* Categories with Links */}
      <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 w-full px-2">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.link}
            className="bg-white shadow-md hover:shadow-xl rounded-xl p-3 sm:p-4 text-center cursor-pointer transition transform hover:-translate-y-2"
          >
            <p className="text-gray-700 font-semibold text-sm sm:text-base">{cat.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}