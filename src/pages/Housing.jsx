import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Collapse from "../components/Collapse";
import Carousel from '../components/Carousel';
import NotFound from '../pages/NotFound';
import Tag from '../components/Tag';
import Host from '../components/Host';

const Housing = () => {
  const [housingData, setHousingData] = useState([]);
  const [housingDetail, setHousingDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchHousingData = async () => {
      try {
        const response = await fetch('/housing.json');
        const data = await response.json();
        setHousingData(data);
      } catch (error) {
        console.error('Erreur de chargement des données:', error);
      }
    };

    fetchHousingData();
  }, []);

  useEffect(() => {
    if (housingData.length > 0) {
      const selectedHousing = housingData.find(item => item.id === id);
      setHousingDetail(selectedHousing);
    }
  }, [housingData, id]);

  if (!housingDetail) {
    return <NotFound />
  }

  return (
    <div className="housing-detail">
      <Carousel />
      <div className='housing_content'>
      <Tag />
      <Host />
      </div>
      <div className='collapse_container'>
        <Collapse
          data={[{ title: "Description", aboutDescription: housingDetail.description }]}
          titleKey="title"
          descriptionKey="aboutDescription"
        />

        <Collapse
          data={[{ title: "Équipements", content: (
            <ul>
              {housingDetail.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) }]}
          titleKey="title"
          descriptionKey="content"
        />
      </div>
    </div>
  );
};

export default Housing;
