import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";

const LogIn = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex-1 sm:p-0 md:p-8 lg:p-16 bg-white flex-shrink-0">
        <LoginForm />
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LogIn;
