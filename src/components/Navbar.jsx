import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  FaUserPlus,
  FaSignInAlt,
  FaBook,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const navigateSignUpPage = () => {
    navigate("/signUp");
  };
  const navigateLoginPage = () => {
    navigate("/logIn");
  };

  const navigateRecipes = () => {
    navigate("/recipes");
  };

  const navigateHomePage = () => {
    navigate("/");
  };

  const navigateMakeRecipe = () => {
    navigate("/makeRecipe");
  };

  return (
    <nav className="bg-orange-500 p-4">
      <div className="container mx-auto flex justify-between items-center text-black font-semibold">
        <button
          onClick={navigateHomePage}
          className="flex items-centerfont-bold text-xl"
        >
          <FaHome className="h-6 w-6 mr-2" />
          Dessert Symphony
        </button>
        <div>
          <button
            onClick={navigateRecipes}
            className="flex items-center  hover:text-gray-300"
          >
            <FaBook className="h-5 w-5 mr-1" />
            Tarifler
          </button>
          <button className="flex items-center  hover:text-gray-300">
            <FaInfoCircle className="h-5 w-5 mr-1" />
            Hakkımızda
          </button>
          <button
            to="/iletisim"
            className="flex items-center  hover:text-gray-300"
          >
            <FaEnvelope className="h-5 w-5 mr-1" />
            İletişim
          </button>
        </div>
        <div>
          <button
            onClick={navigateSignUpPage}
            className="flex items-center  hover:text-gray-300"
          >
            <FaUserPlus className="h-5 w-5 mr-1" />
            Kayıt Ol
          </button>
          <button
            onClick={navigateLoginPage}
            className="flex items-center  hover:text-gray-300"
          >
            <FaSignInAlt className="h-5 w-5 mr-1" />
            Giriş Yap
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
