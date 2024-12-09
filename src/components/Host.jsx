import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Host = () => {
  const { id } = useParams();
  const [host, setHost] = useState(null);
  const [rating, setRating] = useState(null);

  useEffect(() => {
    fetch('/housing.json')
      .then(response => response.json())
      .then(data => {
        const hostData = data.find(item => item.id === id);
        if (hostData) {
          setHost(hostData.host);
          setRating(hostData.rating);
        } else {
          setHost(null);
          setRating(null);
        }
      });
  }, [id]);

  if (!host) {
    return <div>Hôte non trouvé</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa-solid fa-star filled"></i>);
      } else {
        stars.push(<i key={i} className="fa-solid fa-star empty"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="host-details">
      <div className='host_info'>
      <h2>{host.name}</h2>
      <img src={host.picture} alt={host.name} className="host-picture" />
      </div>
      {rating && <div className="stars">{renderStars(parseInt(rating))}</div>}
    </div>
  );
};

export default Host;