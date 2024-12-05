import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArrowLeft from '../assets/images/arrow_left.png';
import ArrowRight from '../assets/images/arrow_right.png';

const Carousel = () => {
  const { id } = useParams();
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/housing.json');
        const data = await response.json();

        const selectedObject = data.find((obj) => obj.id === id);

        if (selectedObject && Array.isArray(selectedObject.pictures)) {
          setPictures(selectedObject.pictures);
        } else {
          console.error('L\'objet ou la propriété "pictures" est manquante ou mal formée');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchData();
  }, [id]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <>
          <button onClick={prevSlide} className="carousel_button prev">
            <img src={ArrowLeft} alt="Précédent" />
          </button>

          <button onClick={nextSlide} className="carousel_button next">
            <img src={ArrowRight} alt="Suivant" />
          </button>
        </>
      )}

      <div className="carousel_container">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {pictures.length > 1 && (
        <div className="carousel_counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
