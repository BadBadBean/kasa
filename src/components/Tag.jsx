import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Tag = () => {
  const [selectedObject, setSelectedObject] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/housing.json");
        const data = await response.json();

        const object = data.find((item) => item.id === id);
        if (object) {
          setSelectedObject(object); // Stocke l'objet dans l'état
        } else {
          console.error("Aucun objet trouvé avec cet ID");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      {selectedObject ? (
        <>
          <div className="tag_content">
            <h1 className="housing_title">{selectedObject.title}</h1>
            <p className="housing_location">{selectedObject.location}</p>
            <div className="tag_container">
              {selectedObject.tags.map((tag, index) => (
                <p className="tag" key={index}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
};

export default Tag;
