import React, { useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Service.css';

const ServiceList = () => {
    const {loggedInUser, newOrder} = useContext(UserContext);
    const [specific, setSpecific] = useState([]);
    // console.log(specific);

    useEffect (() =>{
        fetch(`http://localhost:5000/specificOrder?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setSpecific(data))
    }, [])    
    const history = useHistory();
    return (
       
        <div>
             <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Order</h4>
                <h5 className="ml-auto">{loggedInUser.name}</h5>
                <button>Sign Out</button>
            </div>
            <aside className='mt-5 sidebar'>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-cart pl-5 mr-2"></i>
                    <h6> Service List</h6>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-shopping-basket pl-5 mr-2"></i>
                    <h6> Service list</h6>
                </div>
                <div className="d-flex mt-3">
                    <i class="fas fa-comment-dots fa-flip-horizontal pr-5 mr-2"></i>
                    <h6> Review</h6>
                </div>
            </aside>
            <main style={{marginLeft:"20%"}}>
                                
                    <div className="d-flex justify-content-center align-items-center">                        
                        {!specific.length ? <div className="text-center ">
                            <p>Loading from DataBase please wait... </p>
                            <img className="img-fluid" src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt=""/>
                            </div> : <div class="row row-cols-1 row-cols-md-2 m-3" >
                            {
                                specific.map(service => <div class="col-md-6" >
                                    <div className="card p-3 m-5" style={{ borderRadius: '20px', height: '20vh',color:'#000000, 70%', marginLeft: '20%'}}>
                                        <div class="card-body p-3 d-flex">
                                            <img src={`data:image/png;base64,${service.img.img}`} style={{ width: '10vw' }} class="card-img-top" alt="..." />
                                            <h5 class="card-title">{service.service}</h5>
                                        </div>
                                        <p class="card-text p-2">{service.description}</p>
                                    </div>
                                </div>)
                            }
                        </div> }
                    </div>
               
                
            </main>
        </div>
    );
};

export default ServiceList;