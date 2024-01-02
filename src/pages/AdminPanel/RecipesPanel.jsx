import React, { useEffect, useState } from "react";
import { Space, Table, Image } from "antd";
import axios from "axios";

const RecipesPanel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/hazirtarifal"
        );
        setData(response.data.tatlilar); // API'den gelen veriyi state'e set et
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Veriler yükleniyor...</p>;
  }

  if (error) {
    return <p>Hata oluştu: {error.message}</p>;
  }

  const columns = [
    {
      title: "Tarif Adı",
      dataIndex: "baslik",
      key: "baslik",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tarif Türü",
      dataIndex: "tur",
      key: "tur",
    },
    {
      title: "Resim",
      dataIndex: "resimLinki",
      key: "resimLinki",
      render: (text) => <Image src={text} alt="Resim" width={50} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default RecipesPanel;
