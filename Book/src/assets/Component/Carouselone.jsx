import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Carouselone() {
  return (
    <Container fluid>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-3 mb-md-0">
          <img 
            src="./images/carousel3.jpg" 
            className="img-fluid" 
            alt="Carousel" 
            style={{ width: '100%', borderRadius: '8px' }} 
          />
        </Col>
        <Col xs={12} md={6}>
          <h6 className="text-muted">Tamil Nadu</h6>
          <h2 className="font-weight-bold mb-3">Indian Racing League: Chennai hosts India's first night street F4 race</h2>
          <h6 className="text-secondary mb-2">TNM Staff</h6>
          <h6 className="text-secondary mb-2">4 hours ago</h6>
          <h6 className="text-secondary">1 min read</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Carouselone;
