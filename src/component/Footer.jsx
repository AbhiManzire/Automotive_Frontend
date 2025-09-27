import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo2 from "./logo2.png";

const Footer = () => {
    return (
        <footer className="bg-white border-t text-sm text-gray-600">
            <div className="max-w-full mx-auto  px-6">

                {/* 🔹 Blue App Download Section */}
                <div className="bg-red-400 text-white md:py-10">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                        {/* Left text */}
                        <div>
                            <h2 className="text-2xl font-bold">Download</h2>
                            <h3 className="text-2xl font-bold text-red-800">Our Mobile App</h3>
                            <p className="mt-2 text-white ">
                            Experience the complete Sparelo journey anytime, anywhere.
                            </p>
                        </div>

                        {/* App Store & Play Store buttons */}
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

                {/* 🔹 Main Links Section */}
                <div className="grid py-8 md:py-10 grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

                    {/* Logo and description */}
                    <div>
                        <img

                            src={logo2}
                            alt="Sparelo Logo "
                            className="h-15 w-[140px] cursor-pointer"
                        />
                        <p className="mt-2 text-gray-600 text-base">
                            Discover India's premier destination for automotive spare parts online.
                        </p>

                        {/* 🔹 Social Media */}
                        <div className="flex justify-center md:justify-start space-x-4 text-sky-500 text-xl mt-6 py-10">
                            <a href="#"><FaFacebookF /></a>
                            <div className="text-pink-800">  <a href="#"><FaInstagram /></a> </div>
                            <a href="#"><FaLinkedinIn /></a>
                        </div>
                    </div>

                    {/* About links */}
                    <div >
                        <h3 className="text-base font-semibold text-red-800 mb-3">About</h3>
                        <ul className="space-y-5">
                            {[
                                "About us", "Contact us", "FAQ", "Careers",
                                "Investor Relations", "Suppliers Relations",
                                "Discovery Points", "boodmo API Solution", "Become a Vendor"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Policy links */}
                    <div>
                        <h3 className="text-base font-semibold text-red-800 mb-3">Policy</h3>
                        <ul className="space-y-5">
                            {[
                                "Return Policy", "Privacy Policy", "Disclaimer",
                                "Terms of Use", "Buyers Policy", "Sellers Policy"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Useful links */}
                    <div>
                        <h3 className="text-base font-semibold text-red-800 mb-3">Useful links</h3>
                        <ul className="space-y-3">
                            {[
                                "Articles", "Brands", "Catalogues", "Car Makers",
                                "Damaged Parts", "Best Offers", "Sitemap", "Sitemap2"
                            ].map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="hover:underline">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                {/* 🔹 Bottom bar */}
                <div className="border-t pt-4 pb-6 text-center text-xs text-gray-500">
                    © 2015-2025 Smart Parts Online Pvt. Ltd. (v7.3.7 build 250715.1409)
                </div>
            </div>
        </footer>
    );
};

export default Footer;
