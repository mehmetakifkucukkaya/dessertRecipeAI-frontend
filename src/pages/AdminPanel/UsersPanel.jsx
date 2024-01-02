import React, { useEffect, useState } from "react";
import { Space, Table, Image } from "antd";
import axios from "axios";

const UsersPanel = () => {
  const [data, setData] = useState([]);

  // TODO: DB'DEKİ JSON DOYSASINA UYGUN DATAINDEX YAZILACAK
  const columns = [
    {
      title: "Kullanıcı Adı",
      dataIndex: "baslik",
      key: "baslik",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mail",
      dataIndex: "tur",
      key: "tur",
    },
    {
      title: "Rol",
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

export default UsersPanel;
