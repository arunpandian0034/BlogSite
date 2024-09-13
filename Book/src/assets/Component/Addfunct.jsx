// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';
// import './Addfunct.css'; // Ensure this CSS file exists and is correctly styled
// import { useParams } from 'react-router-dom';

// const Addfunct = () => {
//   const { id } = useParams(); // Get the id from URL parameters
//   const [card, setCard] = useState({ tourimage: [], tourname: '', touramount: '', tourdiscount: '' });
//   const [isInCart, setIsInCart] = useState(false); // Track cart status

//   // Replace with actual user ID or get it from context
//   const uid = 'user123'; // Example user ID

//   useEffect(() => {
//     const getCardDetails = async () => {
//       try {
//         const res = await axios.get(http://localhost:5000/product/list/${id});
//         console.log('API Response:', res.data); // Debugging line
//         setCard(res.data);
//       } catch (error) {
//         console.error('Error fetching card details:', error); // Improved error logging
//       }
//     };
//     getCardDetails();
//   }, [id]);

//   const handleAddToCart = async () => {
//     try {
//       const response = await axios.post(
//         http://localhost:5000/user/update/${uid},
//         { productid: String(id) }
//       );
//       alert('Added to cart successfully');
//       setIsInCart(true);
//     } catch (error) {
//       console.error('Error adding to cart:', error);
//     }
//   };

//   const handleRemoveFromCart = async () => {
//     try {
//       const response = await axios.post(
//         http://localhost:5000/user/remove/${uid},
//         { productid: String(id) }
//       );
//       alert('Removed from cart successfully');
//       setIsInCart(false);
//     } catch (error) {
//       console.error('Error removing from cart:', error);
//     }
//   };

//   return (
//     <div className="main-container">
//       <div className="gallery-grid">
//         {card.tourimage && card.tourimage.slice(0, 4).map((image, index) => (
//           <div key={index} className="small-image-container">
//             <img src={http://localhost:5000/Assests/${image}} alt={Image ${index + 1}} className="small-image" />
//           </div>
//         ))}
//       </div>
//       <div className="details-section">
//         {card.tourimage[4] && (
//           <img src={http://localhost:5000/Assests/${card.tourimage[4]}} alt="Large Image" className="large-image" />
//         )}
//         <div className="form-section">
//           <Card>
//             <Card.Body>
//               <Card.Title>{card.tourname}</Card.Title>
//               <Card.Subtitle className='d-flex mb-2' style={{ gap: '10px' }}>
//                 <span>From <del className="card-amount">₹{card.touramount}</del></span>
//                 <span className="card-amount">₹{card.tourdiscount}</span>
//               </Card.Subtitle>
//             </Card.Body>
//           </Card>
//           <div className="input-group">
//             <label htmlFor="date">Date</label>
//             <input id="date" type="date" className="date-input" />
//           </div>
//           <div className="input-group">
//             <label htmlFor="name">Name</label>
//             <input id="name" type="text" placeholder="Enter your name" className="text-input" />
//           </div>
//           {isInCart ? (
//             <button className="cart-button" onClick={handleRemoveFromCart}>Remove from Cart</button>
//           ) : (
//             <button className="cart-button" onClick={handleAddToCart}>Add to Cart</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addfunct;