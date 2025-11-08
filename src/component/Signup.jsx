import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, USER_ROLES } from "../auth/AuthContext";
import createAccountOffice from "../assets/img/create-account-office.jpeg";
import createAccountOfficeDark from "../assets/img/create-account-office-dark.jpeg";

const Signup = () => {
  const navigate = useNavigate();
  const { register, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    agreeToTerms: false
  });
  const [localError, setLocalError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setLocalError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError("");

    // Validation
    if (!formData.name || !formData.email || !formData.password || !formData.role) {
      setLocalError("All fields are required");
      return;
    }

    if (formData.password.length < 6) {
      setLocalError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setLocalError("Passwords do not match");
      return;
    }

    if (!formData.agreeToTerms) {
      setLocalError("You must agree to the privacy policy");
      return;
    }

    try {
      const user = await register(formData.name, formData.email, formData.password, formData.role);
      
      // Navigate to appropriate dashboard based on role
      const dashboardPaths = {
        [USER_ROLES.CUSTOMER]: "/",
        [USER_ROLES.VENDOR]: "/vendor/dashboard",
        [USER_ROLES.MECHANICS]: "/mechanics/dashboard",
        [USER_ROLES.GARAGE]: "/garage/dashboard",
        [USER_ROLES.SHIPPING]: "/shipping/dashboard",
        [USER_ROLES.SUPER_ADMIN]: "/admin/dashboard"
      };
      
      navigate(dashboardPaths[formData.role] || "/");
    } catch (err) {
      setLocalError(err.message || "Registration failed. Please try again.");
    }
  };

  const displayError = localError || error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 p-6">
      <div className="flex flex-col md:flex-row w-full max-w-5xl overflow-hidden rounded-xl shadow-2xl bg-white">
        {/* Left Image Section */}
        <div className="md:w-1/2 h-60 md:h-auto relative">
          <img
            aria-hidden="true"
            src={createAccountOffice}
            alt="Office"
            className="object-cover w-full h-full rounded-l-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent rounded-l-xl"></div>
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-bold">Join Us</h2>
            <p className="text-gray-200 mt-2 text-sm">Create your account and get started</p>
          </div>
        </div>

        {/* Right Form Section */}
        <main className="md:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
          <div className="w-full max-w-md">
            <h1 className="mb-6 text-3xl font-bold text-primary-600">Create Account</h1>

            {displayError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {displayError}
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input-field"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="input-field"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field"
                  required
                  minLength={6}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input-field"
                  required
                />
              </div>

              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select account type</option>
                  <option value={USER_ROLES.CUSTOMER}>Customer</option>
                  <option value={USER_ROLES.VENDOR}>Vendor</option>
                  <option value={USER_ROLES.MECHANICS}>Mechanics</option>
                  <option value={USER_ROLES.GARAGE}>Garage</option>
                  <option value={USER_ROLES.SHIPPING}>Shipping</option>
                  <option value={USER_ROLES.SUPER_ADMIN}>Super Admin</option>
                </select>
              </div>

              {/* Privacy Policy */}
              <div className="mt-4">
                <label className="inline-flex items-center text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="form-checkbox text-primary-600 rounded focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <span className="ml-2">
                    I agree to the{" "}
                    <a href="/privacy-policy" className="text-primary-600 hover:underline">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="/terms-of-use" className="text-primary-600 hover:underline">
                      terms of use
                    </a>
                  </span>
                </label>
              </div>

              {/* Create account button */}
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 space-y-2">
              <button
                disabled
                className="w-full h-12 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign up with Facebook
              </button>
              <button
                disabled
                className="w-full h-12 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Sign up with Google
              </button>
            </div>

            <p className="mt-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-primary-600 hover:underline font-semibold">
                Login
              </a>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Signup;
