import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo2 from "./logo2.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t text-sm text-gray-700">
      <div className="max-w-full mx-auto px-6">

        {/* 🔹 App Download Section */}
        <div className="bg-gradient-to-r from-red-500 to-red-400 text-white md:py-10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold">Download</h2>
              <h3 className="text-2xl font-bold text-red-800">Our Mobile App</h3>
              <p className="mt-2 text-white">
                Experience the complete Sparelo journey anytime, anywhere.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="https://itunes.apple.com/in/app/id1154010647"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10 md:h-12"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.boodmo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10 md:h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Main Footer Links */}
        <div className="grid py-8 md:py-10 grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

          {/* Logo and Social */}
          <div>
            <Link to="/">
              <img
                src={logo2}
                alt="Sparelo Logo"
                className="h-15 w-[140px] cursor-pointer"
              />
            </Link>
            <p className="mt-2 text-gray-600 text-base">
              India's leading online hub for automotive spare parts, where quality meets convenience in the world of vehicle maintenance.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 text-sky-500 text-xl mt-6 py-10">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-800"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-base font-bold text-red-800 mb-3">About</h3>
            <ul className="space-y-5 font-bold text-base">
              <li><Link to="/about" className="hover:underline">About us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/investor-relations" className="hover:underline">Investor Relations</Link></li>
              <li><Link to="/suppliers" className="hover:underline">Suppliers Relations</Link></li>
              <li><Link to="/discovery-points" className="hover:underline">Discovery Points</Link></li>
              <li><Link to="/api-solution" className="hover:underline">Sparelo API Solution</Link></li>
              <li><Link to="/vendor" className="hover:underline">Become a Vendor</Link></li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="font-bold text-base text-red-800 mb-3">Policy</h3>
            <ul className="space-y-5 font-bold text-base">
              <li><Link to="/return-policy" className="hover:underline">Return Policy</Link></li>
              <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:underline">Disclaimer</Link></li>
              <li><Link to="/terms-of-use" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="/buyers-policy" className="hover:underline">Buyers Policy</Link></li>
              <li><Link to="/sellers-policy" className="hover:underline">Sellers Policy</Link></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-base font-bold text-red-800 mb-3">Useful Links</h3>
            <ul className="space-y-3 font-bold text-base">
              <li><Link to="/articles" className="hover:underline">Articles</Link></li>
              <li><Link to="/brands" className="hover:underline">Brands</Link></li>
              <li><Link to="/catalog" className="hover:underline">Catalogues</Link></li>
              <li><Link to="/vehicles" className="hover:underline">Car Makers</Link></li>
              <li><Link to="/damaged-parts" className="hover:underline">Damaged Parts</Link></li>
              <li><Link to="/offers" className="hover:underline">Best Offers</Link></li>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
              <li><Link to="/sitemap2" className="hover:underline">Sitemap2</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-4 pb-6 text-center text-sm text-gray-500">
          © 2015-2025 Smart Parts Online Pvt. Ltd. (v7.3.7 build 250715.1409)
        </div>
      </div>
    </footer>
  );
};

export default Footer;
