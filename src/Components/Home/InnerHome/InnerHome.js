// import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import piyas from '../../../image/piyas.jpg'
import robin from '../../../image/robin.jpg'
import "./InnerHome.css"

const InnerHome = () => {
    // const [clock, setClock] = useState()

    // useEffect(() => {
    //     setInterval(() => {
    //         const date = new Date();
    //         setClock(date.toLocaleTimeString());
    //     }, 1000);
    // }, [])

    return (
        <div>
            <div className="container">
                <h1 className='text-center text-success'>Today Match</h1>

                <div className='row'>
                    <div className="col-lg-6">
                        <Card>
                            {/* <p className='text-center'>Time: {clock}</p> */}
                            <p className='text-center'>MPL-10:00 AM</p>
                            <Card.Body className='d-flex'>
                                <img className='pic ml-3' src={piyas} alt="" />
                                <span className='ml-3'>Piyas Juwaru </span>
                                <p className='px-3'>VS</p>
                                <img className='pic ml-3' src={robin} alt="" />
                                <span className='ml-3'>Piyas Juwaru </span>

                            </Card.Body>
                            <Link to='/team' className='btn btn-lg btn-success' >Win Team</Link>
                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <h1>hello</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InnerHome;