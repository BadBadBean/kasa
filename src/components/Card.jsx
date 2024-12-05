import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HousingCards = () => {
  const [housingData, setHousingData] = useState([]);

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

  return (
    <div className="housing-cards">
      {housingData.map((item, id) => (
        <Link to={`/logement/${item.id}`} key={id}>
          <div className="card">
            <img src={item.cover} alt={item.title} />
            <div className="overlay"></div>
            <h2>{item.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HousingCards;
