import React, { useEffect, useState } from "react";
import { Space, Table, Image } from "antd";
import axios from "axios";

const UsersPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchUserList = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:5000/api/user/list");
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.error("Error fetching user list:", error);
  //       setError(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchUserList();
  // }, []);

  // if (loading) {
  //   return <p>Kullanıcı listesi yükleniyor...</p>;
  // }

  // if (error) {
  //   return <p>Hata oluştu: {error.message}</p>;
  // }

  const dataSource = [
    {
      username: "admin",
      email: "admin@example.com",
      role: "admin",
    },
    {
      username: "denemeUser",
      email: "denemeUser@example.com",
      role: "uye",
    },
    {
      username: "bahar",
      email: "bahar@gmail.com",
      role: "uye",
    },
    { username: "akif", email: "akiff@gmail.com", role: "uye" },
  ];

  const columns = [
    {
      title: "Kullanıcı Adı",
      dataIndex: "username",
      key: "username",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mail",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Rol",
      dataIndex: "role",
      key: "role",
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default UsersPanel;
