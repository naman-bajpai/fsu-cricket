import React from 'react';
import fsulogo from "@/app/images/fsulogo.png"; 
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* FSU Logo and Address */}
          <div className="w-full md:w-1/3 mb-6">
            <p className="text-sm">
              Florida State University<br />
              Tallahassee, FL 32306<br />
              Phone: (850) 644-2525
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="https://www.fsu.edu/" className="hover:underline">
                  FSU Home
                </a>
              </li>
              <li>
                <a href="https://www.fsu.edu/about/" className="hover:underline">
                  About FSU
                </a>
              </li>
              <li>
                <a href="https://www.fsu.edu/admissions/" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="https://www.fsu.edu/contact/" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/floridastate"
                aria-label="Facebook"
                className="hover:underline"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                  className="h-6"
                  alt="Facebook"
                />
              </a>
              <a
                href="https://twitter.com/floridastate"
                aria-label="Twitter"
                className="hover:underline"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                  className="h-6"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://www.instagram.com/floridastateuniversity/"
                aria-label="Instagram"
                className="hover:underline"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                  className="h-6"
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 pt-4 mt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Florida State University. All Rights Reserved.</p>
          <p>
            <a href="https://www.fsu.edu/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="https://www.fsu.edu/terms" className="hover:underline">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;