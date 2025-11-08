import React from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaYoutube, 
  FaPinterest 
} from "react-icons/fa";
import logo2 from "./logo2.png";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t-2 border-gray-200 text-sm text-gray-700">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        {/* 🔹 App Download Section */}
        <div className="gradient-primary text-white py-12 md:py-16">
          <div className="section-container flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Download</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Our Mobile App</h3>
              <p className="mt-2 text-white/90 text-lg max-w-md">
                Experience the complete Sparelo journey anytime, anywhere.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <a
                href="https://itunes.apple.com/in/app/id1154010647"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-200"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-12 md:h-14"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.boodmo"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-all duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-12 md:h-14"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Main Footer Links */}
        <div className="section-container grid py-12 md:py-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Logo and Social */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo2}
                alt="Sparelo Logo"
                className="h-12 w-auto cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              India's leading online hub for automotive spare parts, where quality meets convenience in the world of vehicle maintenance.
            </p>

            <div className="flex justify-center md:justify-start gap-3 text-xl mt-8 flex-wrap">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="YouTube"
              >
                <FaYoutube />
              </a>
              <a 
                href="https://pinterest.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-800 transform hover:scale-110 transition-all shadow-md hover:shadow-lg"
                title="Pinterest"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-lg font-bold text-primary-700 mb-4">About</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-gray-800 transition-colors">FAQ</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-800 transition-colors">Careers</Link></li>
              <li><Link to="/investor-relations" className="text-gray-600 hover:text-gray-800 transition-colors">Investor Relations</Link></li>
              <li><Link to="/suppliers" className="text-gray-600 hover:text-gray-800 transition-colors">Suppliers Relations</Link></li>
              <li><Link to="/discovery-points" className="text-gray-600 hover:text-gray-800 transition-colors">Discovery Points</Link></li>
              <li><Link to="/api-solution" className="text-gray-600 hover:text-gray-800 transition-colors">Sparelo API Solution</Link></li>
              <li><Link to="/vendor" className="text-gray-600 hover:text-gray-800 transition-colors">Become a Vendor</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-lg font-bold text-primary-700 mb-4">Policy</h3>
            <ul className="space-y-3">
              <li><Link to="/return-policy" className="text-gray-600 hover:text-gray-800 transition-colors">Return Policy</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-800 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="text-gray-600 hover:text-gray-800 transition-colors">Disclaimer</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-600 hover:text-gray-800 transition-colors">Terms of Use</Link></li>
              <li><Link to="/buyers-policy" className="text-gray-600 hover:text-gray-800 transition-colors">Buyers Policy</Link></li>
              <li><Link to="/sellers-policy" className="text-gray-600 hover:text-gray-800 transition-colors">Sellers Policy</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-700 mb-4">Useful Links</h3>
            <ul className="space-y-3">
              <li><Link to="/articles" className="text-gray-600 hover:text-gray-800 transition-colors">Articles</Link></li>
              <li><Link to="/brands" className="text-gray-600 hover:text-gray-800 transition-colors">Brands</Link></li>
              <li><Link to="/catalog" className="text-gray-600 hover:text-gray-800 transition-colors">Catalogues</Link></li>
              <li><Link to="/vehicles" className="text-gray-600 hover:text-gray-800 transition-colors">Car Makers</Link></li>
              <li><Link to="/damaged-parts" className="text-gray-600 hover:text-gray-800 transition-colors">Damaged Parts</Link></li>
              <li><Link to="/offers" className="text-gray-600 hover:text-gray-800 transition-colors">Best Offers</Link></li>
              <li><Link to="/sitemap" className="text-gray-600 hover:text-gray-800 transition-colors">Sitemap</Link></li>
              <li><Link to="/sitemap2" className="text-gray-600 hover:text-gray-800 transition-colors">Sitemap2</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-200 bg-gray-50 py-6">
          <div className="section-container text-center text-sm text-gray-600">
            © 2015-2025 Smart Parts Online Pvt. Ltd. (v7.3.7 build 250715.1409)
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
