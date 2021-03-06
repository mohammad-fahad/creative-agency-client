import React from 'react';
import NavBar from '../../Navbar/NavBar';
import frame from '../../../images/logos/Frame.png';
import './header.css';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div className="bg">
            <NavBar />
            <main  className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: '#111430', fontWeight: 'bold' }}>Let's Grow Your<br />Brand To The <br /> Next Level</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button style={{ width: '40%' }} className="btn btn-dark btn-lg">Hire us</button>
            </div>
            <div className="col-md-5">
                <img src={frame}  className="img-fluid" alt="" style={{paddingBottom:"17%"}}/>
            </div>
        </main>
        </div>
    );
};

export default Header;