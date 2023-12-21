import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import { Link } from "react-router-dom";

const InfoCard = () => {
  const navigate = useNavigate();

  const navigateRecipes = () => {
    navigate("/recipes");
  };

  return (
    <div>
      <Card
        title="Sitemizde Sizleri Ne Bekliyor ?"
        headStyle={{
          textAlign: "center",
          fontSize: "26px",
          fontWeight: "bold",
        }}
      >
        <Card
          type="inner"
          title="Hazır Tatlı Tariflerine Erişim"
          headStyle={{
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          <Link to="/recipes">
            {" "}
            <p className="italic text-xl">
              {" "}
              Var olan tariflere tüm detayıyla erişim sağlayabilirsiniz.
            </p>
          </Link>
        </Card>
        <Card
          style={{
            marginTop: 16,
          }}
          type="inner"
          title="Benzersiz Tatlı Tarifi Oluşturma"
          headStyle={{
            fontSize: "24px",
            fontWeight: 500,
          }}
        >
          <Link to="/makeRecipe">
            <p className="italic text-xl">
              Elinizdeki malzemelerle hangi tatlıyı yapacağınıza karar veremiyor
              musunuz ? O halde sitemizi kullanın ve kendi benzersiz tarifinizi
              oluşturarak tatlının tadını çıkarın !
            </p>
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default InfoCard;
