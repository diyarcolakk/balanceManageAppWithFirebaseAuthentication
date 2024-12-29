import React from "react";
import { Link } from "react-router-dom"; // React Router ile sayfa yönlendirmeleri

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold">MyApp</h1>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/dashboard"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Anasayfa
            </Link>
            <Link
              to="/balances"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Balance Tablosu
            </Link>
            <Link
              to="/coupons"
              className="hover:bg-blue-500 px-3 py-2 rounded-md text-lg font-medium"
            >
              Coupons
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Hidden by default, shown when hamburger is clicked) */}
      <div className="md:hidden bg-blue-700 space-y-4 py-4 px-6">
        <Link
          to="/dashboard"
          className="block text-lg text-white hover:bg-blue-500 py-2 px-4 rounded-md"
        >
          Dashboard
        </Link>
        <Link
          to="/balances"
          className="block text-lg text-white hover:bg-blue-500 py-2 px-4 rounded-md"
        >
          Balance Tablosu
        </Link>
        <Link
          to="/coupons"
          className="block text-lg text-white hover:bg-blue-500 py-2 px-4 rounded-md"
        >
          Coupons
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
