import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import './Overlay.css'; 

const Bookcard = () => {
  const [cardsData, setCardsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4008/product/list");
        setCardsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Container>
      <h1 className='d-flex justify-content-center align-items-center'>Top Destinations</h1>
      <div className="d-flex flex-wrap">
        {cardsData.length > 0 ? (
          cardsData.map(card => (
            <Card
              key={card._id}
              className="bg-dark text-white m-2"
              style={{ width: '200px', cursor: 'pointer' }}
              onClick={() => handleClick(card._id)}
            >
              <Card.Img src={`http://localhost:4008/Assets/${card.images[1]}`} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>{card.author}</Card.Title>
                <Card.Title>{card.title}</Card.Title>
              </Card.ImgOverlay>
            </Card>
          ))
        ) : (
          <p className="d-flex justify-content-center align-items-center">No products available.</p>
        )}
      </div>
    </Container>
  );
};

export default Bookcard;
