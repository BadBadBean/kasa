import Banner from "../components/Banner"
import Collapse from "../components/Collapse"
import { useState, useEffect } from 'react';

const About = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('../collapse.json');
        if (!response.ok) {
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <>
    <Banner 
          backgroundImage='./src/assets/images/about_banner.png'
          className="banner_about"
      />
      {loading && <p>Chargement des données...</p>}
      {error && <p>Erreur : {error}</p>}
      <Collapse
            data={data}
            titleKey="title"
            descriptionKey="aboutDescription"
          />
    </>
  );
};

export default About;
