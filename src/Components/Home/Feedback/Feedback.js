import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap'



const Feedback = () => {
    const [reviews, setReviews] = useState([])
    useEffect (() =>{
        fetch('https://creative-agency-server-f.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className="bg-light text-center container-fluid" style={{ marginTop: '8%' }}>
            <h2 style={{ textColor: '#111430' }}>Clients <span className="text-success">Feedback</span></h2>
            <div className="d-flex flex-wrap justify-content-around mt-5 container">
                {
                    reviews.map(fback => <Card style={{ width: '18rem', align: 'center', marginBottom: '5%' }} className="text-center effect bg-light">
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div>
                                
                                    <Card.Img variant="top" className="image-fluid " style={{ width: '50%', borderRadius: '50px' }} src={fback.img} />
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