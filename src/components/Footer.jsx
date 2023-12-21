import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-orange-500 p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center text-black font-semibold">
        <div>
          <p className="text-sm mb-2">&copy; Bahar & Mehmet Akif</p>
        </div>
        <div className="flex items-center">
          <a className="text-white mr-2 hover:text-gray-300 cursor-pointer">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a className="text-white mr-2 hover:text-gray-300 cursor-pointer">
            <FaTwitter className="h-5 w-5" />
          </a>
          <a className="text-white mr-2 hover:text-gray-300 cursor-pointer">
            <FaInstagram className="h-5 w-5" />
          </a>
          <a className="text-white hover:text-gray-300 cursor-pointer">
            <FaLinkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
