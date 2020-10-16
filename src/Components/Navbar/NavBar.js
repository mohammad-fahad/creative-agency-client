import React from 'react';
import logo from '../../images/logos/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav style={{backgroundColor:'#FBD062'}} className="navbar navbar-expand-lg navbar-light offset-md-1">
            <img style={{ width: '15%'}} className="navbar-brand img-fluid" src={logo} alt="Logo"/>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link to="/home" className="nav-link mr-5 font-weight-bold" href="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Our Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 font-weight-bold" href="#">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/AdminSevice" className="nav-link mr-5 font-weight-bold">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login"> <button type="button" className=" mr-5 font-weight-bold btn btn-dark btn-lg">Login</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;