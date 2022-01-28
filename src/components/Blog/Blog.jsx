import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='ms-4 me-4 mt-5 ' data-aos="fade-up"
        data-aos-duration="3000">
            <div className="blog_top">
                <h4 className='fw-bold text-start'>LATEST BLOG</h4>
                <div className="mt-5">
                    <Row xs={1} md={2} className="g-4">
                      
                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08vQa93AAR_biOQwY1e0N4bBmSHgZFKEM9n53mVBIws7tJGgSyL7WNGrLKInK5nBMFNM&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                               <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OPLhSlOx3qWfJQe5LC8BAbzU3RCNhSHLHG2o05O10H1qLC94F-4WhqKQ0bujNxbb9a0&usqp=CAU" alt="" />
                                                    <h5 className='text-start fw-bold'>React Router</h5>
                                                    <p className='text-start fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta incidunt soluta expedita, delectus officia corrupti eligendi eius laboriosam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam eaque nulla molestiae nihil adipisci similique eligendi voluptate maxime delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, suscipit at iste assumenda odio mollitia libero quae voluptatum laboriosam repellat fugiat nulla temporibus et doloremque numquam, similique dolor aperiam. <br /> <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere assumenda aut natus eum cum ea explicabo esse, nesciunt at nihil quasi voluptates nam quis dolores molestiae debitis expedita quae excepturi doloribus, ab laborum, maiores omnis. Porro cum consequatur quasi.</p>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08vQa93AAR_biOQwY1e0N4bBmSHgZFKEM9n53mVBIws7tJGgSyL7WNGrLKInK5nBMFNM&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                               <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OPLhSlOx3qWfJQe5LC8BAbzU3RCNhSHLHG2o05O10H1qLC94F-4WhqKQ0bujNxbb9a0&usqp=CAU" alt="" />
                                                    <h5 className='text-start fw-bold'>React Router</h5>
                                                    <p className='text-start fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta incidunt soluta expedita, delectus officia corrupti eligendi eius laboriosam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam eaque nulla molestiae nihil adipisci similique eligendi voluptate maxime delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, suscipit at iste assumenda odio mollitia libero quae voluptatum laboriosam repellat fugiat nulla temporibus et doloremque numquam, similique dolor aperiam. <br /> <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere assumenda aut natus eum cum ea explicabo esse, nesciunt at nihil quasi voluptates nam quis dolores molestiae debitis expedita quae excepturi doloribus, ab laborum, maiores omnis. Porro cum consequatur quasi.</p>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08vQa93AAR_biOQwY1e0N4bBmSHgZFKEM9n53mVBIws7tJGgSyL7WNGrLKInK5nBMFNM&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                    </Card.Text>

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                               <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OPLhSlOx3qWfJQe5LC8BAbzU3RCNhSHLHG2o05O10H1qLC94F-4WhqKQ0bujNxbb9a0&usqp=CAU" alt="" />
                                                    <h5 className='text-start fw-bold'>React Router</h5>
                                                    <p className='text-start fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta incidunt soluta expedita, delectus officia corrupti eligendi eius laboriosam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam eaque nulla molestiae nihil adipisci similique eligendi voluptate maxime delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, suscipit at iste assumenda odio mollitia libero quae voluptatum laboriosam repellat fugiat nulla temporibus et doloremque numquam, similique dolor aperiam. <br /> <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere assumenda aut natus eum cum ea explicabo esse, nesciunt at nihil quasi voluptates nam quis dolores molestiae debitis expedita quae excepturi doloribus, ab laborum, maiores omnis. Porro cum consequatur quasi.</p>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08vQa93AAR_biOQwY1e0N4bBmSHgZFKEM9n53mVBIws7tJGgSyL7WNGrLKInK5nBMFNM&usqp=CAU" />
                                <Card.Body>
                                    <Card.Title><p className='text-start'>10 December 2021</p></Card.Title>
                                    <Card.Text>
                                        <h3 className='text-start fw-bold'>Let's see React Router </h3>
                                    </Card.Text>

                                    {/* this is modal  */}

                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                               <div className="modal-header">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8OPLhSlOx3qWfJQe5LC8BAbzU3RCNhSHLHG2o05O10H1qLC94F-4WhqKQ0bujNxbb9a0&usqp=CAU" alt="" />
                                                    <h5 className='text-start fw-bold'>React Router</h5>
                                                    <p className='text-start fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dicta incidunt soluta expedita, delectus officia corrupti eligendi eius laboriosam debitis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quam eaque nulla molestiae nihil adipisci similique eligendi voluptate maxime delectus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quis, suscipit at iste assumenda odio mollitia libero quae voluptatum laboriosam repellat fugiat nulla temporibus et doloremque numquam, similique dolor aperiam. <br /> <br />
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla facere assumenda aut natus eum cum ea explicabo esse, nesciunt at nihil quasi voluptates nam quis dolores molestiae debitis expedita quae excepturi doloribus, ab laborum, maiores omnis. Porro cum consequatur quasi.</p>
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

export default Blog;