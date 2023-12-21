import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MakeRecipe from "../components/MakeRecipe";

const AIRecipe = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div className="h-[80px]">
        <Navbar />
      </div>

      <MakeRecipe />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AIRecipe;
