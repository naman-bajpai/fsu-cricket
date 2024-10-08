import React from "react";

export default function CSNavbar() {
  return (
    <nav className="bg-white text-black shadow-lg fixed w-full z-40 top-9 left-0">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center py-4">
          {/* Brand Logo and Name */}
          <div className="flex items-center space-x-3">
            <img
              src="https://keriganmarketing.com/uploads/2014/04/seminole-head-garnet-1178x1200.png"
              alt="CS Dept Logo"
              className="h-8 w-8"
            />
            <h1 className="text-2xl font-semibold tracking-wider">
              Cricket@FSU
            </h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-black hover:text-red-900 transition">
              Home
            </a>
            <a href="/upcomingevents" className="text-black hover:text-red-900 transition">
              Upcoming events
            </a>
            <a href="/faculty" className="text-black hover:text-red-900 transition">
              Members
            </a>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/contactus"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-end px-4 py-2">
        <button className="text-gray-300 hover:text-white focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}