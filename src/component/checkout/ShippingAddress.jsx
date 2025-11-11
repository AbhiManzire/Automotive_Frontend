import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt, FaFileAlt, FaCreditCard, FaArrowLeft, FaFileInvoice, FaPlus } from "react-icons/fa";
import LocationConfirmModal from "./LocationConfirmModal";
import AddAddressModal from "./AddAddressModal";

const ShippingAddress = () => {
  const navigate = useNavigate();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [showAddAddressModal, setShowAddAddressModal] = useState(false);
  const [showAddressSelection, setShowAddressSelection] = useState(false);
  const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
  const [pendingAddressData, setPendingAddressData] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    address: "",
    postalCode: "412406",
    cityState: "Pune, MAHARASHTRA, India",
    addressTitle: "",
  });

  // Load saved addresses from localStorage
  const [savedAddresses, setSavedAddresses] = useState(() => {
    const saved = localStorage.getItem('savedAddresses');
    return saved ? JSON.parse(saved) : [];
  });

  // Load selected address ID from localStorage
  const [selectedAddressId, setSelectedAddressId] = useState(() => {
    const saved = localStorage.getItem('shippingAddress');
    if (saved) {
      const address = JSON.parse(saved);
      return address.id || null;
    }
    return null;
  });

  const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);

  // Auto-show address selection if addresses exist
  useEffect(() => {
    if (savedAddresses.length > 0 && !showAddressSelection) {
      setShowAddressSelection(true);
      // If no address is selected but addresses exist, select the first one
      if (!selectedAddressId && savedAddresses.length > 0) {
        setSelectedAddressId(savedAddresses[0].id);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Step 1: Form submission - opens map confirmation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Show location confirmation modal
    setShowLocationModal(true);
  };

  // Handler for when AddAddressModal wants to confirm location
  const handleNewAddressConfirmLocation = (addressFormData) => {
    // Store pending address data
    setPendingAddressData(addressFormData);
    setIsAddingNewAddress(true);
    // Close AddAddressModal and open LocationModal
    setShowAddAddressModal(false);
    setShowLocationModal(true);
  };

  // Step 2: After map confirmation, save address and show selection page
  const handleConfirmLocation = () => {
    // Determine which data to use (initial form or new address)
    const dataToUse = isAddingNewAddress ? pendingAddressData : formData;
    
    // Create address object from form data
    const newAddress = {
      id: Date.now(),
      title: dataToUse.addressTitle || `${dataToUse.firstName}'s Address`,
      name: `${dataToUse.firstName} ${dataToUse.lastName}`,
      mobile: dataToUse.mobile,
      address: dataToUse.address,
      cityState: dataToUse.cityState,
      postalCode: dataToUse.postalCode,
    };

    // Add to saved addresses
    setSavedAddresses(prev => {
      const updated = [...prev, newAddress];
      // Save to localStorage
      localStorage.setItem('savedAddresses', JSON.stringify(updated));
      return updated;
    });
    // Select this address
    setSelectedAddressId(newAddress.id);
    
    // Reset flags
    setIsAddingNewAddress(false);
    setPendingAddressData(null);
    
    // Close modal
    setShowLocationModal(false);
    
    // If this is the first address (from initial form), show address selection page
    // If this is a new address (from AddAddressModal), stay on address selection page
    if (!showAddressSelection) {
      setShowAddressSelection(true);
    }
  };

  // Step 3: Final proceed from address selection page
  const handleFinalProceed = () => {
    if (selectedAddress) {
      // Save selected address and proceed to review
      localStorage.setItem('shippingAddress', JSON.stringify(selectedAddress));
      navigate('/checkout/review');
    }
  };

  const handleBack = () => {
    if (showAddressSelection) {
      // Go back to form
      setShowAddressSelection(false);
    } else {
      // Go back to cart
      navigate('/cart');
    }
  };

  // Open Google Maps with address
  const handleOpenMap = (address, e) => {
    if (e) {
      e.stopPropagation(); // Prevent card selection when clicking map icon
    }
    const fullAddress = `${address.address}, ${address.cityState}, ${address.postalCode}`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
    window.open(googleMapsUrl, '_blank');
  };

  // Show Address Selection Page (after map confirmation)
  if (showAddressSelection) {
    return (
      <div className="min-h-screen bg-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Progress Bar */}
          <div className="mt-12 md:mt-16 mb-8">
            <div className="flex items-center justify-center space-x-4 md:space-x-8">
              <button
                onClick={() => navigate('/cart')}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                  <FaShoppingCart className="text-blue-600 text-lg" />
                </div>
                <span className="text-sm text-blue-600 font-medium">Cart</span>
              </button>
              <div className="h-1 w-16 md:w-24 bg-blue-600"></div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-lg" />
                </div>
                <span className="text-sm text-blue-600 font-semibold">Address</span>
              </div>
              <div className="h-1 w-16 md:w-24 bg-blue-200"></div>
              <button
                onClick={() => {
                  const savedAddress = localStorage.getItem('shippingAddress');
                  if (savedAddress) {
                    navigate('/checkout/review');
                  }
                }}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                  <FaFileAlt className="text-blue-600 text-lg" />
                </div>
                <span className="text-sm text-gray-500">Review</span>
              </button>
              <div className="h-1 w-16 md:w-24 bg-blue-200"></div>
              <button
                onClick={() => {
                  const savedAddress = localStorage.getItem('shippingAddress');
                  if (savedAddress) {
                    navigate('/checkout/payment');
                  }
                }}
                className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                  <FaCreditCard className="text-blue-600 text-lg" />
                </div>
                <span className="text-sm text-gray-500">Pay</span>
              </button>
            </div>
          </div>

          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            <span className="text-blue-900">Shipping</span>{" "}
            <span className="text-blue-500">Address</span>
          </h1>

          {/* Address Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Saved Address Cards */}
            {savedAddresses.map((address) => (
              <div 
                key={address.id}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedAddressId === address.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => setSelectedAddressId(address.id)}
              >
                <div className="flex items-start gap-3 mb-4">
                  <button
                    onClick={(e) => handleOpenMap(address, e)}
                    className="text-xl mt-1 flex-shrink-0 hover:opacity-80 transition-colors cursor-pointer"
                    title="Open in Google Maps"
                    style={{ color: '#EA4335' }}
                  >
                    <FaMapMarkerAlt />
                  </button>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2">
                      {address.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1">
                      {address.name} - {address.mobile}
                    </p>
                    <p className="text-xs text-gray-600">
                      {address.address}, {address.cityState}, {address.postalCode}
                    </p>
                  </div>
                </div>
                {selectedAddressId === address.id && (
                  <button className="w-full py-2 bg-blue-100 text-blue-600 rounded-lg text-xs font-medium hover:bg-blue-200 transition-colors">
                    SELECTED ADDRESS
                  </button>
                )}
              </div>
            ))}

            {/* Add New Address Card */}
            <div 
              className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col items-center justify-center min-h-[200px]"
              onClick={() => setShowAddAddressModal(true)}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaPlus className="text-blue-600 text-2xl" />
              </div>
              <p className="text-sm text-blue-600 font-medium">Add New Address</p>
            </div>

            {/* Register as Business Card */}
            <div className="border-2 border-gray-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-all flex flex-col items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FaFileInvoice className="text-blue-600 text-2xl" />
              </div>
              <p className="text-sm text-blue-600 font-medium text-center">
                Register as Business with <span className="font-semibold">Sparelo.com</span>
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold bg-white"
            >
              <FaArrowLeft />
              Back
            </button>
            <button
              onClick={handleFinalProceed}
              disabled={!selectedAddress}
              className={`px-8 py-3 rounded-lg text-sm font-semibold transition-colors ${
                selectedAddress
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Proceed
            </button>
          </div>
        </div>

        {/* Add Address Modal */}
        <AddAddressModal
          isOpen={showAddAddressModal}
          onClose={() => setShowAddAddressModal(false)}
          onConfirmLocation={handleNewAddressConfirmLocation}
        />
      </div>
    );
  }

  // Show Form Entry Page (initial state)
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mt-12 md:mt-16 bg-blue-50 py-6 mb-8 rounded-lg">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            <button
              onClick={() => navigate('/cart')}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaShoppingCart className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-medium">Cart</span>
            </button>
            <div className="h-1 w-16 md:w-24 bg-blue-600"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>
              <span className="text-sm text-blue-600 font-semibold">Address</span>
            </div>
            <div className="h-1 w-16 md:w-24 bg-blue-200"></div>
            <button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/review');
                }
              }}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaFileAlt className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-gray-500">Review</span>
            </button>
            <div className="h-1 w-16 md:w-24 bg-blue-200"></div>
            <button
              onClick={() => {
                const savedAddress = localStorage.getItem('shippingAddress');
                if (savedAddress) {
                  navigate('/checkout/payment');
                }
              }}
              className="flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                <FaCreditCard className="text-blue-600 text-lg" />
              </div>
              <span className="text-sm text-gray-500">Pay</span>
            </button>
          </div>
        </div>

        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-bold mb-8">
          <span className="text-blue-900">Shipping</span>{" "}
          <span className="text-blue-500">Address</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Form */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 md:p-8">
            <form onSubmit={handleFormSubmit}>
              {/* Contact Details Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">
                  Contact Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="flex gap-2">
                  <div className="w-20">
                    <input
                      type="text"
                      value="+91"
                      readOnly
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-center font-medium"
                    />
                  </div>
                  <div className="flex-1">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile"
                      required
                      pattern="[0-9]{10}"
                      maxLength="10"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Address Section */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">
                  Address
                </h2>
                
                {/* Address Textarea */}
                <div className="mb-4">
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                    rows="4"
                    maxLength="110"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  />
                  <div className="text-right text-xs text-gray-500 mt-1">
                    {formData.address.length}/110
                  </div>
                </div>

                {/* Postal Code and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Postal Code"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="cityState"
                      value={formData.cityState}
                      onChange={handleChange}
                      placeholder="City, State, Country"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Address Title */}
                <div>
                  <input
                    type="text"
                    name="addressTitle"
                    value={formData.addressTitle}
                    onChange={handleChange}
                    placeholder="Address Title (Optional)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-semibold"
                >
                  <FaArrowLeft />
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-semibold"
                >
                  Proceed
                </button>
              </div>
            </form>
          </div>

          {/* Right Sidebar - Business Registration */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg border border-blue-200 shadow-sm p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <FaFileInvoice className="text-blue-600 text-2xl" />
                </div>
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Register as Business with{" "}
                  <span className="text-blue-600">Sparelo.com</span>
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                  Get exclusive business benefits and bulk pricing
                </p>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs font-medium">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location Confirmation Modal */}
      <LocationConfirmModal
        isOpen={showLocationModal}
        onClose={() => {
          setShowLocationModal(false);
          // If we were adding a new address, reset the flag
          if (isAddingNewAddress) {
            setIsAddingNewAddress(false);
            setPendingAddressData(null);
          }
        }}
        onConfirm={handleConfirmLocation}
        address={isAddingNewAddress ? pendingAddressData : formData}
      />
    </div>
  );
};

export default ShippingAddress;