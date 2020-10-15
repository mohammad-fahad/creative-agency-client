import React from 'react';
import NavBar from '../../Navbar/NavBar';
import frame from '../../../images/logos/Frame.png';
import './header.css';
import { Link } from 'react-router-dom';



const Header = () => {

    return (
        <div className="bg">
            <NavBar />
            <div className="d-flex mt-5 mr-5 ml-5 pr-5 pl-5 align-items-center">
                <div className="col-md-4 ">
                    <h1 style={{fontSize:'4em'}}><strong>Let’s Grow Your </strong><br />
                        Brand To The <br />
                        Next Level</h1>
                        <p className="mt-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                       
                        <button className="text-white p-2 pr-5 pl-5" style={{borderRadius: '8%', background:"#111430"}}>Hire Us</button>
                   
                </div>

                <div className="col-md-6 ml-auto">
                    <img className="img-fluid" style={{paddingBottom: '23%'}}height="100%" src={frame} alt=""/>
                </div>                
            </div>
        </div>
    );
};

export default Header;