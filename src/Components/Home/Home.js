import React, { useEffect, useState } from 'react';
import "./Home.css"
import { Button, Card, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeHerder from '../HomeHeader/HomeHerder';
import piyas from '../../image/piyas.jpg'
import robin from '../../image/robin.jpg'
import logo from '../../image/logo.png'


const Home = () => {
    const [clock, setClock] = useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, [])

    return (
        <div>
            <div>
                <HomeHerder></HomeHerder>
            </div>
            <div>
                {/* <Navbar bg="primary" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Link className='text-white' to='/innerHome'>Home</Link>
                            <Link className='text-white ml-3' to='/innerAbout'>About Us</Link>
                            <Link className='text-white ml-3' to='/innerContact'>Contact</Link>
                        </Nav>
                    </Container>
                </Navbar> */}
                <Navbar bg="danger" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img src={logo} width='70px' alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '200px' }}
                                navbarScroll
                            >
                                <Link className='text-white' to='/innerHome'>Home</Link>
                                <Link className='text-white ml-3' to='/innerAbout'>About Us</Link>
                                <Link className='text-white  px-3' to='/innerContact'>Contact</Link>
                                <NavDropdown className='' title="Balance-Option" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Deposit</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Withdraw</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >
                                        <Link to='/test'>Deposit History</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to='/test'>Withdraw History</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown className='' title="Settings" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">PassWord Change</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item >
                                        <Link to='/test'>up</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item >
                                        <Link to='/test'>Withdraw History</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#" disabled>
                                    Link
                                </Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success text-white">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div className="container mt-5">
                <h1 className='text-center text-success'>Today Match</h1>

                <div className='row gap'>
                    <div className="col-lg-6">
                        <Card>
                            <p className='text-center'>Time: {clock}</p>
                            <p className='text-center text-success'>MPL-10:00 AM</p>
                            <Card.Body className='d-flex'>
                                <img className='pic ml-3' src={piyas} alt="" />
                                <span className='ml-3'>Piyas Juwaru </span>
                                <p className='px-3'>VS</p>
                                <img className='pic ml-3' src={robin} alt="" />
                                <span className='ml-3'>robin Juwaru </span>

                            </Card.Body>
                            <Link to='/team' className='btn btn-lg btn-success' >Win Team</Link>
                        </Card>
                    </div>
                    <div className="col-lg-6 ">
                        <h1>Notice Here</h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;