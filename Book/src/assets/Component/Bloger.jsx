import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Bloger = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:4008/blog/list");
        console.log("API response", res.data);
        setData(res.data);
      } catch (error) {
        console.log("Error occurred", error);
      }
    };
    getdata();
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  }

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Options for formatting the date
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true // This will format the time in 12-hour format with AM/PM
    };

    // Format the date using toLocaleString
    const formattedDate = date.toLocaleString('en-GB', options);
    return formattedDate;
  };

  // Internal styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
  };

  const cardStyle = {
    position: 'relative',
    border: 'none',
    overflow: 'hidden',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    transition: 'box-shadow 0.3s, transform 0.3s',
    marginBottom: '20px',
    backgroundColor: '#fff',
    textAlign: 'left',
  };

  const cardImageContainerStyle = {
    overflow: 'hidden',
    position: 'relative',
  };

  const cardImageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    transition: 'transform 0.3s',
  };

  const cardImageHoverStyle = {
    transform: 'scale(1.05)',
  };

  const cardBodyStyle = {
    padding: '15px',
  };

  const cardTitleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  const cardDescriptionStyle = {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
    lineHeight: '1.6',
  };

  const cardAuthorStyle = {
    color: '#888',
    fontSize: '14px',
    marginBottom: '5px',
  };

  const cardDateStyle = {
    color: '#888',
    fontSize: '12px',
    marginBottom: '10px',
  };

  const cardTimeStyle = {
    fontSize: '12px',
    color: '#888',
  };

  return (
    <Container style={containerStyle}>
      <h1 className="text-center mb-4" style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Blog Posts</h1>
      <Row>
        {data.map(card => (
          <Col key={card._id} xs={12} sm={6} md={4} lg={3}>
            <div 
              style={cardStyle} 
              onClick={() => handleClick(card._id)}
            >
              <div 
                style={cardImageContainerStyle}
                onMouseOver={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
              >
                <img 
                  src={`http://localhost:4008/Assets/${card.images[0]}`} 
                  alt={card.title} 
                  style={cardImageStyle} 
                />
              </div>
              <div style={cardBodyStyle}>
                <h3 style={cardTitleStyle}>{card.title}</h3>
                <p style={cardDescriptionStyle}>{card.description || "Description not available"}</p>
                <p style={cardAuthorStyle}>By {card.author}</p>
                <p style={cardDateStyle}>{formatDate(card.createdAt)}</p>
                <p style={cardTimeStyle}>
                 
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Bloger;
