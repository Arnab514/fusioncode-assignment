import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#fffef2] sm:px-4 lg:px-10">
      <div className="font-semibold cursor-pointer flex justify-between items-center py-6 sm:py-8">
        {/* Left Menu */}
        <div className="flex gap-4 items-center sm:text-base">
          {/* For Desktop */}
          <div className="hidden md:flex text-sm gap-4">
            <h2 className="text-[#333] hover:text-gray-800">New & Notable</h2>
            <a href="#" className="hover:text-gray-800">
              Gifts
            </a>
            <a href="#" className="hover:text-gray-800">
              Skin Care 
            </a>
            <a href="#" className="hover:text-gray-800">
              Hand & Body
            </a>
            <a href="#" className="hover:text-gray-800">
              Home
            </a>
            <a href="#" className="hover:text-gray-800">
              Hair
            </a>
            <a href="#" className="hover:text-gray-800">
              Fragrance
            </a>
            <a href="#" className="hover:text-gray-800">
              Kits & Travel
            </a>
            <a href="#" className="hover:text-gray-800">
              Read
            </a>
            <a href="#" className="hover:text-gray-800">
              Stores
            </a>
            <a href="#" className="hover:text-gray-800">
              Facial Appointments
            </a>
          </div>

          {/* For Tablet */}
          <div className="md:hidden flex gap-4">
            <h2 className="text-[#333] hover:text-gray-800">Shop</h2>
            <a href="#" className="hover:text-gray-800">
              Read
            </a>
            <a href="#" className="hover:text-gray-800">
              Stores
            </a>
          </div>

          {/* Search Icon */}
          <a href="#" className="hover:text-gray-800 flex items-center">
            <AiOutlineSearch className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </a>
        </div>

        {/* Right Menu */}
        <div className="flex gap-4 items-center text-sm sm:text-base">
          <a href="#" className="hover:text-gray-800">
            Log in
          </a>
          <a href="#" className="hover:text-gray-800">
            Cabinet
          </a>
          <a href="#" className="hover:text-gray-800">
            Cart
          </a>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
