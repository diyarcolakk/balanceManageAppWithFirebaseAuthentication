import React from "react";
import { Link } from "react-router-dom"; // React Router ile sayfa yönlendirmeleri
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobil menü açık mı kapalı mı kontrolü için state tanımlanır

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-semibold">Bakiye Yönetimi</h1>
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
              Kuponlar
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75 border border-white rounded p-1"
              aria-label="Toggle menu"
              onClick={toggleMenu}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8" // Increased size for the icon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Change icon based on menu state */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Açılabilir menü) */}
      <div
        className={`md:hidden bg-blue-700 space-y-4 py-4 px-6 ${
          isOpen ? "block" : "hidden"
        }`}
      >
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
