import React, { useState } from 'react';
import Protfolio from '../../../Protfolio';

import { Row, Col, Card, Modal, Button } from 'react-bootstrap';
import soon from '../../../../../images/ReactProject/coming soon.png'
import goSurf from '../../../../../images/Go Surf.png'

const WebDesign = () => {


    const [showw, setShoww] = useState(false);
    const handleClosee = () => setShoww(false);
    const handleShoww = () => setShoww(true);

    return (
        <div>
            <Protfolio></Protfolio>
          <div className="ms-4 me-4 ">
               {/* THIS IS WEB DESIGN SECTION  */}

               <div className="mt-5 pb-5"  data-aos="fade-up">
                    <h3 className='fs-5 pb-2 fw-bold text-start' style={{ fontFamily: "sans-serif" }}>WEB DESIGN</h3>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src={soon} />
                                <Card.Body>
                                    <Card.Title>cooming soon</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text> */}

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body text-start">
                                                    <h1>Cooming soon</h1>
                                                    {/* <img className='img-fluid w-100' src={goSurf} alt="" />
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
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card onClick={handleShoww}>
                                <Card.Img src={soon} />
                                <Card.Body>
                                    <Card.Title>Cooming Soon</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>


                            <Modal show={showw} onHide={handleClosee} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClosee}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClosee}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Col>
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src={soon} />
                                <Card.Body>
                                    <Card.Title>Cooming soon</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text> */}

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body text-start">
                                                    <h1>Cooming soon</h1>
                                                    {/* <img className='img-fluid w-100' src={goSurf} alt="" />
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
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src={soon} />
                                <Card.Body>
                                    <Card.Title>Cooming soon</Card.Title>
                                    {/* <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text> */}

                                    {/* this is modal  */}

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
                                                        <a href="https://go-surf-e8722.web.app/" className='me-3'>Live Site</a>
                                                        <a target="_blank" href="#" className='me-3'>GitHub Client Side</a>
                                                        <a target="_blank" href="#">GitHub Server Side</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
          </div>
        </div>
    );
};

export default WebDesign;