import React, { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    const isMobile = window.innerWidth < 992;

    const navbarStyle = {
        backgroundColor: 'rgba(255, 255, 255)', // Corrected property name and value
    };

    const navLinkStyle = {
        padding: isMobile ? '10px 15px' : '8px 16px',
        display: 'flex',
        textAlign: isMobile ? 'start' : 'right',
    };

    const navbarBrandStyle = {
        fontSize: isMobile ? '1.5rem' : '1.875rem',
    };

    const navbarToggleStyle = {
        borderColor: '#007bff',
    };

    const [showOffcanvas, setShowOffcanvas] = useState(false);

    return (
        <header>
            {/* <Navbar collapseOnSelect expand="lg" style={navbarStyle}>
                <Container fluid>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <Navbar.Brand to="/" style={navbarBrandStyle}>
                        VIDEO
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" style={navbarToggleStyle} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Link to="/" className='nav-link' style={navLinkStyle}>LONG FORM</Link>
                            <Link to="/About" className='nav-link' style={navLinkStyle}>SUBCRIBE ONLY</Link>
                            <Link to="/Contact" className='nav-link' style={navLinkStyle}>POD CAST</Link>
                            <Link to="/Contact" className='nav-link' style={navLinkStyle}>FLIX</Link>
                            <Link to="/Contact" className='nav-link' style={navLinkStyle}>NEWS LETTERS</Link>
                            <Link to="/Contact" className='nav-link' style={navLinkStyle}>SUBSCRIBE</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
            <div className='mx-3' style={{ height: "50px", overflowX: "auto", overflowY: "hidden", whiteSpace: "nowrap" }}>
                <div className='d-flex align-items-center' style={{ height: "100%" }}>
                    <div className='d-flex align-items-center' style={{ height: "100%" }}>
                        <Button
                            className='btn'
                            type='button'
                            onClick={() => setShowOffcanvas(true)}
                            style={{ backgroundColor: 'transparent', border: 'none' }} // Set background to transparent and border to black
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="black" // Set icon color to black
                                className="bi bi-list"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                                />
                            </svg>
                        </Button>

                    </div>

                    {/* Offcanvas Component */}
                    <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="start" id="offcanvasMenu">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='d-flex flex-column'>
                                <Link to="/" className='nav-link' style={navLinkStyle}>Video</Link>
                                <Link to="/long-form" className='nav-link' style={navLinkStyle}>Long Form</Link>
                                <Link to="/subscriber-only" className='nav-link' style={navLinkStyle}>Subscriber Only</Link>
                                <Link to="/podcast" className='nav-link' style={navLinkStyle}>Podcast</Link>
                                <Link to="/flix" className='nav-link' style={navLinkStyle}>Flix</Link>
                                <Link to="/newsletters" className='nav-link' style={navLinkStyle}>NewsLetters</Link>
                                <Link to="/subscribe" className='nav-link' style={navLinkStyle}>Subscribe</Link>
                                {/* Add more links here if needed */}
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <div className='d-flex align-items-center' style={{ height: "100%" }}>
                        <div className="" style={navLinkStyle}>Video</div>
                        <div className="" style={navLinkStyle}>Long Form</div>
                        <div className="" style={navLinkStyle}>Subscriber Only</div>
                        <div className="" style={navLinkStyle}>Podcast</div>
                        <div className="" style={navLinkStyle}>Flix</div>
                        <div className="" style={navLinkStyle}>NewsLetters</div>
                        <div className="" style={navLinkStyle}>Subscribe</div>
                    </div>
                    <div className='d-flex align-items-center justify-content-end' style={{ width: "100%" }}>
                        <div style={navLinkStyle}></div>
                        <div style={navLinkStyle}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar2;
