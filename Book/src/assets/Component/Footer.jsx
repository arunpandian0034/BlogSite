import React from 'react';
// import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Correct FaInstagram import
import './Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className='row container'>
                <div className='col-6 d-flex justify-content-center align-items-center'>
                    <h1>The NEWS minute</h1>
                </div>
                <div className='col-6 text-end'>
                    <h5 className="footer-subheading">about Us | terms and Contitions | privacy policy |Grievance Redressal |</h5>
                    <h6 className="footer-address">Disclaimer | Contact us</h6>
                   
                    <h5 className="footer-subheading">TheNewsminute 2024</h5>
                    <h6 className="footer-hours">powered by quintype</h6>
     
                </div>
            </div>

            <div className="footer-bottom">
                <p>TheNewsminute 2024 </p>
            </div>
        </footer>
    );
};

export default Footer;
