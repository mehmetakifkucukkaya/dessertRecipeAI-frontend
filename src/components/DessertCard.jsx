import { Card, Col } from "antd";
import React from "react";
const { Meta } = Card;

const DessertCard = ({ title, description, imageUrl }) => (
  <Col xs={24} sm={24} md={12} lg={8} xl={6} className="mb-4">
    <Card
      hoverable
      style={{
        width: "100%",
      }}
      cover={<img alt="example" src={imageUrl} />}
    >
      <Meta title={title} description={description} />
    </Card>
  </Col>
);

export default DessertCard;
