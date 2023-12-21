import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DessertCard from "../components/DessertCard";
import { Row } from "antd";
import axios from "axios";

const Recipes = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/hazirtarifal"
        );

        // Gelen verileri direkt olarak setDesserts ile state'e ekleyin
        setDesserts(response.data.tatlilar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div className=" h-[80px]">
        <Navbar />
      </div>

      {/* Malzemeler */}

      <div className="mt-10">
        <Row gutter={[16, 16]}>
          {desserts.map((dessert, index) => (
            <DessertCard
              key={index}
              title={dessert.baslik}
              imageUrl={dessert.resimLinki}
            />
          ))}
        </Row>
      </div>

      <div >
        <Footer />
      </div>
    </div>
  );
};

export default Recipes;
