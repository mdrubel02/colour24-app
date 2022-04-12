import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Card } from 'react-bootstrap';

const InnerContact = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="text-success">Send us a Message</h3>
                        <div className="contact-form">
                            <div className="card text-center border-0 shadow">
                                <div className="card-body">

                                    <form >
                                        <input type="Email" className="form-control form-control-lg py-3" placeholder="Type your email" />
                                        <div className="row py-3">
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control form-control-lg" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className="form-control form-control-lg" placeholder="Your phone" />
                                            </div>
                                        </div>
                                        <textarea name="" id="" className="form-control form-control-lg" placeholder="Massege"></textarea>
                                        <button className="btn btn-lg  btn-outline-info mt-3">Contact us</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className='text-success'>Contact Us</h2>
                        <Card>
                            <Card.Body >
                                <h3>Email:</h3>
                                <div className='d-flex '>
                                    <FontAwesomeIcon className='text-success fs-1 ' icon={faEnvelope} />
                                    <p className='ml-3 mt-1 fw-bold text-danger'>Sultan01@gmail.com</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body >
                                <h3>Address:</h3>
                                <div className='d-flex '>
                                    <FontAwesomeIcon className='text-success fs-1 ' icon={faLocationDot} />
                                    <p className='ml-3 mt-1 fw-bold text-danger'>Malacho,Melandh,Jamalpur</p>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Body >
                                <h3>Phone:</h3>
                                <div className='d-flex '>
                                    <FontAwesomeIcon className='text-success fs-1 ' icon={faPhone} />
                                    <p className='ml-3 mt-1 fw-bold text-danger'>01784762876</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InnerContact;