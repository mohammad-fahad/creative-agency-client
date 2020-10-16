import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="" style={{backgroundColor: ' #FBD062', paddingTop:"5%", paddingLeft:"5%", paddingRight:"5%"}}>
            <div className="d-flex flex-wrap mt-5" >
            <div className="col-md-6 container container-fluid d-flex align-items-center">
                <div className="container-fluid col-md-6 col-sm-6">
                <h1>
                    <strong>
                    Let us handle your <br /> project, professionally.
                    </strong>
                </h1> <br/>
                <p>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general.</p>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 container container-fluid">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email address" className="p-4"/>
                        
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Your name:</Form.Label>
                        <Form.Control type="name" placeholder="Your name or company name" className="p-4"/>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your message:</Form.Label>
                        <Form.Control as="textarea" rows={10} placeholder="Your message" />
                        <Button variant="dark" type="submit" style={{borderRadius:"5px"}} className="mb-5 mt-3 pr-5 pl-5">
                            Submit
                    </Button>
                    </Form.Group>
                </Form>
            </div>
            
            </div>
            <div className="text-center pb-2">
                <p>copyright Orange labs 2020</p>
            </div>
        </div>
    );
};

export default Footer;

