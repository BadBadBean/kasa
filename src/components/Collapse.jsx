import { useState, useEffect } from 'react';

const Collapse = () => {
    const [collapse, setCollapse] = useState([]);
  
    useEffect(() => {
      const fetchCollapseData = async () => {
        try {
          const response = await fetch('/collapse.json');
          const data = await response.json();
          setCollapse(data); 
        } catch (error) {
          console.error('Erreur de chargement des données:', error);
        }
      };
  
      fetchCollapseData();
    }, []);

    return (
        <div className="collapse_container">
          {collapse.map((item, index) => (
            <div className="collapse" key={index}>
              <details className="collapse__details">
                <summary className="collapse__summary">{item.title}</summary>
                <p>{item.description}</p>
              </details>
            </div>
          ))}
        </div>
      );
    };
    
    export default Collapse;