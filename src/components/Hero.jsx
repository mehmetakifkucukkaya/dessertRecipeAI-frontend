import React, { useState, useEffect } from "react";
import { Row } from "antd";
import axios from "axios";
import DessertCard from "./DessertCard";

const Hero = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/hazirtarifal"
        );

        const allDesserts = response.data.tatlilar;

        const shuffledDesserts = shuffleArray(allDesserts);

        const selectedDesserts = shuffledDesserts.slice(0, 8);

        setDesserts(selectedDesserts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Diziyi karıştıran fonksiyonumuz (Sayfa her yenilendiğinde tarifler değişiyor)
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="mt-4">
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
  );
};

export default Hero;
