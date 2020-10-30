import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import SideBar from '../Admin/SideBar/SideBar';
import './Service.css';

const ServiceList = () => {
    const {loggedInUser, newOrder} = useContext(UserContext);
    const [specific, setSpecific] = useState([]);
    // console.log(specific);

    useEffect (() =>{
        fetch(`https://creative-agency-server-f.herokuapp.com/specificOrder?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setSpecific(data))
    }, []) 
    return (
       
        <div>
             <div className="d-flex container-fluid p-3">
                <img className="img-fluid" style={{ height: '8vh' }} src={logo} alt="" />
                <h4 style={{ marginLeft: "10vw" }}>Order</h4>
                <h5 className="ml-auto">{loggedInUser.name}</h5>
               
            </div>
            <SideBar />
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
                                            <img src={`data:image/png;base64,${service.img.img}`} style={{ width: '10vw', height: '15vh'}} class="card-img-top" alt="..." />
                                            <div>
                                            <h5 class="card-title">{service.service}</h5> <br/>
                                            <p class="card-text p-2">{service.description}</p>
                                            </div>
                                        </div>
                                        
                                        <Button variant="outline-danger mt-3 ml-auto" style={{width:"25%", }}>{service.status}</Button>
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