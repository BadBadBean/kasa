import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importation de useNavigate
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import NotFound from "../pages/NotFound";
import Tag from "../components/Tag";
import Host from "../components/Host";

const Housing = () => {
  const [housingData, setHousingData] = useState([]);
  const [housingDetail, setHousingDetail] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); // Utilisation de useNavigate

  useEffect(() => {
    const fetchHousingData = async () => {
      try {
        const response = await fetch("/housing.json");
        const data = await response.json();
        setHousingData(data);
      } catch (error) {
        console.error("Erreur de chargement des données :", error);
      }
    };

    fetchHousingData();
  }, []);

  useEffect(() => {
    if (housingData.length > 0) {
      const selectedHousing = housingData.find((item) => item.id === id);
      if (selectedHousing) {
        setHousingDetail(selectedHousing);
      } else {
        navigate("/notfound");
      }
    }
  }, [housingData, id, navigate]);

  if (!housingDetail) {
    return <NotFound />;
  }

  return (
    <div className="housing_detail">
      <Carousel />
      <div className="housing_content">
        <Tag />
        <Host />
      </div>
      <div className="collapse_container">
        <Collapse
          data={[
            {
              title: "Description",
              aboutDescription: housingDetail.description,
            },
          ]}
          titleKey="title"
          descriptionKey="aboutDescription"
        />

        <Collapse
          data={[
            {
              title: "Équipements",
              content: (
                <ul>
                  {housingDetail.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              ),
            },
          ]}
          titleKey="title"
          descriptionKey="content"
        />
      </div>
    </div>
  );
};

export default Housing;
