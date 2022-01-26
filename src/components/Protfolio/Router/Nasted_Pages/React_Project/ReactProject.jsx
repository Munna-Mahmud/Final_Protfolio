import React, { useState } from 'react';
import Protfolio from '../../../Protfolio';
import { Row, Col, Card, Modal } from 'react-bootstrap';
// import { Row, Col, Card } from 'react-bootstrap';

import goSurf from '../../../../../images/Go Surf.png'
import travely from '../../../../../images/ReactProject/Traveliy.png'
import nordis from '../../../../../images/ReactProject/nordis (2).png'
import soon from '../../../../../images/ReactProject/coming soon.png'


const ReactProject = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Protfolio></Protfolio>
            <div className="ms-4 me-4">
                {/* THIS IS REACT PROJECT SECTION  */}

                <div className='mt-5 pb-5 '>
                    <h3 className='fs-5 pb-2 fw-bold text-start' style={{ fontFamily: "sans-serif" }}>REACT PROJECT</h3>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src={goSurf} />
                                <Card.Body>
                                    <Card.Title className='text-start fw-bold'>Skateboarding</Card.Title>

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body text-start">
                                                    <img className='img-fluid w-100' src={goSurf} alt="" />
                                                    <h5 className='text-start fw-bold pt-3 '>Skateboarding React Projct</h5>
                                                    <li>Full Responsive React Skateboard Project.</li>
                                                    <li>This Project with an Admin Dashboard and full stack react app with a dynamic Routing system .</li>
                                                    <li>Admin can add, delete, edit, see all orders status , Customer Review system, and Admin can make a new Admin etc.</li>
                                                    <p>Technologies : Node JS , MongoDB, Express.Js, React js, React Route, Bootstrap, CSS, Material UI, and API firebase authentication, Heroku etc.</p>

                                                    <div className='d-flex '>
                                                        <a target="_blank" href="https://go-surf-e8722.web.app/" className='me-3'>Live Site</a>
                                                        <a target="_blank" href="https://github.com/programming-hero-web-course-4/niche-website-client-side-Munna-Mahmud" className='me-3'>GitHub Client Side</a>
                                                        <a target="_blank" href="https://github.com/programming-hero-web-course-4/niche-website-server-side-Munna-Mahmud">GitHub Server Side</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* travely done  */}
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                                <Card.Img src={travely} />
                                <Card.Body >
                                    <Card.Title className='text-start fw-bold'>Travel with Travely</Card.Title>


                                    {/* this is modal  */}
                                    {/* <Button ref={btnRef} color='purple-500' onClick={onOpen}>
                                        Open
                                    </Button> */}


                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    {/* <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5> */}
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <div className="modal-body text-start">
                                                        <img className='img-fluid w-100' src={travely} alt="" />
                                                        <h5 className='text-start fw-bold pt-3 '>Travel With Traveliy</h5>
                                                        <li>Full Responsive React Travel Agency related Project .</li>
                                                        <li>This is Full authentication and the user can book a travel place where theuser wants to travel.</li>
                                                        <li>Treveliy is a full stack project where users can manage their Orders .</li>
                                                        <p>Technologies : Node JS , MongoDB, Express.Js, React js, React Route, Bootstrap, CSS, Material UI, and API firebase authentication, Heroku etc.</p>

                                                        <div className='d-flex '>
                                                            <a href="https://travel-with-traveliy.netlify.app/" className='me-3'>Live Site</a>
                                                            <a target="_blank" href="https://github.com/Munna-Mahmud/traveliy-client-site" className='me-3'>GitHub Client Side</a>
                                                            <a target="_blank" href="https://github.com/programming-hero-web-course1/tourism-or-delivery-website-server-side-Munna-Mahmud">GitHub Server Side</a>
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {/* nordis done  */}
                        <Col>
                            <Card data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                                <Card.Img src={nordis} />
                                <Card.Body>
                                    <Card.Title className='text-start fw-bold'>Nordis</Card.Title>


                                    {/* this is modal  */}
                                    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    {/* <h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5> */}
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body text-start">
                                                    <img className='img-fluid w-100' src={nordis} alt="" />
                                                    <h5 className='text-start fw-bold pt-3 '>Skateboarding React Projct</h5>
                                                    <li>Fully Responsive Health Center Services React APP.</li>
                                                    <li>Customers can see all doctors services and also can book doctorsappointments.</li>
                                                    <li>Nordis Health Center is a totally front-end focused app with a third party API.</li>
                                                    <p> <span className='fw-bold'>Technologies :</span> React js, React Route, Bootstrap, CSS, and API firebase authentication, Netlify etc.</p>

                                                    <div className='d-flex '>
                                                        <a target="_blank" href="https://nordis-health-care-center.web.app/" className='me-3'>Live Site</a>
                                                        <a target="_blank" href="https://github.com/Munna-Mahmud/nordis-health-care" className='me-3'>GitHub Client Side</a>
                                                        {/* <a target="_blank" href="#">GitHub Server Side</a> */}
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* it's done  */}
                        <Col>
                            <Card onClick={handleShow}>
                                <Card.Img src={soon} />
                                <Card.Body >
                                    <Card.Title className='fw-bold text-start'>Coming Soon</Card.Title>

                                </Card.Body>

                            </Card>
                            {/* this is modal  */}

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    {/* <Modal.Title>Modal heading</Modal.Title> */}
                                </Modal.Header>
                                {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
                                <div className="modal-body text-start">

                                    <h1>Coming soon</h1>
                                    {/* <img className='img-fluid w-100' src={nordis} alt="" />
                                    <h5 className='text-start fw-bold pt-3 '>Skateboarding React Projct</h5>
                                    <li>Full Responsive React Skateboard Project.</li>
                                    <li>This Project with an Admin Dashboard and full stack react app with a dynamic Routing system .</li>
                                    <li>Admin can add, delete, edit, see all orders status , Customer Review system, and Admin can make a new Admin etc.</li>
                                    <p>Technologies : Node JS , MongoDB, Express.Js, React js, React Route, Bootstrap, CSS, Material UI, and API firebase authentication, Heroku etc.</p>

                                    <div className='d-flex '>
                                        <a href="https://go-surf-e8722.web.app/" className='me-3'>Live Site</a>
                                        <a target="_blank" href="#" className='me-3'>GitHub Client Side</a>
                                        <a target="_blank" href="#">GitHub Server Side</a>
                                    </div> */}

                                </div>
                            </Modal>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ReactProject;