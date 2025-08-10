
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import logo from '../assets/images/logo2.png'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <div className="navbar-start">

            <img src={logo} alt="" />
            <h1 className='text-primary ml-3 font-bold text-2xl lg:text-4xl'>Bites<span className='text-3xl lg:text-5xl text-secondary'>Share</span></h1>

          </div>
          <p className="text-sm text-gray-400">
            Share food, reduce waste, and connect with your community. One bite at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/availableFoods" className="hover:text-white">Available Foods</a></li>
            <li><a href="/myFoodRequest" className="hover:text-white">My Food Requests</a></li>
            <li><a href="/addFood" className="hover:text-white">Add Food</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/manageMyFoods" className="hover:text-white">Manage My Foods</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/volunteer" className="hover:text-white">Volunteer</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded bg-gray-800 text-white text-sm placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BitesShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
