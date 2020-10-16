import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import { Card } from 'react-bootstrap';
import './Home.css';
import Body from './Body/Body';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import { Link } from 'react-router-dom';
import '../ServiceList/Service.css';


const sponsors = [
    { img: "https://i.imgur.com/SWKHK1V.png" },
    { img: "https://i.imgur.com/r1nFGRu.png" },
    { img: "https://i.imgur.com/0H3CNzW.png" },
    { img: "https://i.imgur.com/DuLBBqk.png" },
    { img: "https://i.imgur.com/yz5WH8X.png" }
];

const Home = () => {
    const [services, setServices] = useState([])
    useEffect (() =>{
        fetch('https://creative-agency-server-f.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="bg-light">
            <Header />
            <div className="mr-5 ml-5 pl- pr-5 mt-5 text-center ">
                {
                    sponsors.map(sponsor => <img style={{ width: '8vw', marginRight: "4%" }}  src={sponsor.img} alt="sponsors logo" />)
                }
            </div>
            <div className="text-center mt-5" >
                <h2>Provide awesome <span className="text-success"> services</span> </h2>
            </div>
            <div className="mt-5 d-flex flex-wrap justify-content-around">
                {
                    services.map(service => <Link style={{textDecoration: 'none', color:'black'}} to={`/order/${service._id}`}>
                        <Card key={services._id} style={{ width: '18rem', border: 'none', align: 'center' }} className="text-center effect bg-light service">
                        <Card.Body>
                            {service.img ? <Card.Img variant="top" className="image-fluid mb-4" style={{ width: '25%' }} src={service.img} /> 
                            :
                            <Card.Img variant="top" className="image-fluid mb-4" style={{ width: '25%' }} src={`data:image/png;base64,${service.image.img}`}/> }

                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text>
                                {service.details}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Link>)
                }
            </div>
            <Body />
           <Feedback />
           <Footer />
        </div>
    );
};

export default Home;