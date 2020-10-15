import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/logos/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="mr-5 ml-5  pr-5 pl-5">
            <Navbar  variant="transparent">
                <img style={{width: '10vw'}} src={logo} alt=""/>
                <Nav className="ml-auto">
                    <Nav.Link className="mr-5 text-dark" to="/home">Home</Nav.Link>
                    <Nav.Link className="mr-5 text-dark" to="/features">Our Portfolio</Nav.Link>
                    <Nav.Link className="mr-5 text-dark" to="/pricing">Our Team</Nav.Link>
                    <Nav.Link className="mr-5 text-dark" to="/pricing">Contact Us</Nav.Link>
                    <Link to="/login" style={{textDecoration: 'none'}}>
                    <button className="text-white p-2 pr-5 pl-5 mr-5" style={{borderRadius: '8%', background:"#111430"}}>Log In</button>
                    </Link>
                </Nav>               
            </Navbar>
        </div>
    );
};

export default NavBar;