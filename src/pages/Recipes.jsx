import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DessertCard from "../components/DessertCard";
import { Row, Modal, Col } from "antd";
import axios from "axios";

const Recipes = () => {
  const [desserts, setDesserts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDessert, setSelectedDessert] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/hazirtarifal"
        );

        setDesserts(response.data.tatlilar);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  
  const openModal = (dessert) => {
    setSelectedDessert(dessert);
    console.log("Modal will be opened");
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedDessert({});
    setModalVisible(false);
  };

  return (
    <div className="flex flex-col min-h-screen justify-between ">
      <div className=" h-[80px]">
        <Navbar />
      </div>

      {/* Tatlılar */}

      <div className="mt-10">
        <Row gutter={[16, 16]}>
          {desserts.map((dessert, index) => (
            <DessertCard
              title={dessert.baslik}
              imageUrl={dessert.resimLinki}
              onClick={() => openModal(dessert)}
            />
          ))}
        </Row>
      </div>
      {/* Modal */}

      {modalVisible && selectedDessert && (
        <Modal
          title={selectedDessert.baslik}
          centered
          visible={modalVisible}
          onOk={closeModal}
          onCancel={closeModal}
          footer={null}
          width={["100%", "100%", "100%", "60%"]}
        >
          <div>
            {/* Malzemeler */}
            <div className="flex">
              <div className="flex-1">
                <p className="text-gray-600 p-1 text-lg capitalize font-bold decoration-2 underline">
                  Malzemeler
                </p>

                <ul className="list-disc pl-4 font-semibold">
                  {selectedDessert.malzemeler.map((malzeme, index) => (
                    <li
                      className="text-gray-600 text-base capitalize"
                      key={index}
                    >
                      {malzeme}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tarif Adımları */}
              <div className="flex-1 pl-4">
                <p className="text-gray-600 p-1 text-lg capitalize font-bold decoration-2 underline">
                  Tarif Adımları
                </p>

                <ol className="list-decimal pl-4 font-semibold">
                  {selectedDessert.tarif.map((adim, index) => (
                    <li
                      className="text-gray-600 text-base capitalize"
                      key={index}
                    >
                      {adim}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <img
            className="mt-4 mx-auto max-h-[420px]"
            src={selectedDessert.resimLinki}
            alt=""
          />
        </Modal>
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Recipes;
