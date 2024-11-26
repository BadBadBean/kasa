import { useState, useEffect } from 'react';

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
      {housingData.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.cover} alt={item.title} />
          <div className="overlay"></div>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default HousingCards;
