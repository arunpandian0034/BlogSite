// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Overlay.css';

// const Overlay = () => {
//   const [cardsData, setCardsData] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/product/list");
//         setCardsData(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//   const selectTourss = (array) => array.sort(() => Math.random() - 0.5);

//   const shuffleTourss = selectTourss(cardsData.filter(product => product.tourcategory === "Overlay")).slice(0, 10);
  
//   const handleClick = (id) => {
//     navigate(/addfun/${id});
//   };

//   return (
//     <Container>
//       <h1 className='d-flex justify-content-center align-items-center'>Top Destinations</h1>
//       <div className="d-flex flex-wrap">
//         {shuffleTourss.map(card => (
//           <Card key={card._id} className="bg-dark text-white m-2" style={{ width: '200px' }} onClick={() => handleClick(card._id)}>
//             <Card.Img src={http://localhost:5000/Assests/${card.tourimage[0]}} alt="Card image" />
//             <Card.ImgOverlay>
//               <Card.Title>{card.tourname}</Card.Title>
//             </Card.ImgOverlay>
//           </Card>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Overlay;