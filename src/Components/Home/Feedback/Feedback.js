import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';



const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect (() =>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="bg-light text-center" style={{ marginTop: '8%' }}>
            <h2 style={{ textColor: '#111430' }}>Clients <span className="text-success">Feedback</span></h2>
            <div className="d-flex justify-content-around mt-5">
                {
                    reviews.map(fback => <Card style={{ width: '18rem', align: 'center', marginBottom: '5%' }} className="text-center effect bg-light">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div>
                                
                                    <Card.Img variant="top" className="image-fluid " style={{ width: '25%', borderRadius: '50px'}} src={fback.img} />
                                </div>
                                <div className="text-left">
                                    <Card.Title>{fback.name} <br/> <small>{fback.designation}</small></Card.Title>
                                    
                                </div>
                                </div>


                           

                            <Card.Text>
                                {fback.comment}
                            </Card.Text>
                        </Card.Body>
                    </Card>)
                }
            </div>
        </div>
    );
};

export default Feedback;        