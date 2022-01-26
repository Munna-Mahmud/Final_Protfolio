import React from 'react';
import './About.css'
import { Row, Col } from 'react-bootstrap';
// import { Progress } from '@nature-ui/core';

import banner from '../../../src/images/about.jpg'

const About = () => {
    return (
        <div className="ms-4 me-4">
            <div className='about_top'>
                <h4 className='text-start fw-bold mt-4 pt-4'>ABOUT ME</h4>
                <div className='mt-5  text-start '>
                    <p style={{ letterSpacing:'.05em'}}>Hello there! My name is Munna Babu. I am a Web Developer, and I'm very passionate and dedicated to my work.
                        With 1+ years experience as a professional a Front-End Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

                </div>

            </div>
            <div className='table text-start mt-5 pb-5'>
                <Row>
                    <Col>
                       
                            <h5 className='d-inline' >Name: </h5> 
                            <p className='d-inline'>Munna Babu</p> <br />
                      
                       
                            <h5 className='d-inline'>Address: </h5> 
                            <p className='d-inline'>Dhaka, Bangladesh</p> <br />
                        

                       
                       <h5 className='d-inline'>Phone:</h5> 
                            <p className='d-inline'>+8801904625620</p> <br />
                        
                        
                            <h5 className='d-inline'>Mail: </h5>
                            <p className='text-end d-inline'>munna.babu@gmail.com</p> <br />
                        
                            <h5 className='d-inline'>Nationality: </h5> 
                            <p className='text-end d-inline'>Bangladeshi</p> <br />
                    
                    </Col>
                    {/* <Col></Col> */}
                    <Col className='text-start'>
                    <img className='w-100 img-fluid ' style={{borderRedius:"10px"}} src={banner} alt="" />
                    </Col>
                </Row>
               

            </div>

            {/* services section  */}

            <div className='services_top'>
                <h4 className='text-start fw-bold  '>SERVICES</h4>
                <div className='text-start services_list pt-3 pb-3'>
                    <li><i class="fas fa-caret-square-right me-2"></i> Front-End Development</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> React Development</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Web Development</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> web Design</li>
                </div>
            </div>

            {/* programming section  */}

            <div className="programming_top">
                <h4 className='text-start fw-bold '>PROGRAMMING</h4>

                <div className='mt-5 pb-5'>
                    <h5 className='text-start fs-5 fw-bold'>HTML & CSS</h5>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar html_css_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>

                    <h5 className='text-start fs-5 fw-bold mt-3'>React JS</h5>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar react_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>

                    <h5 className='text-start fs-5 fw-bold mt-3'>Javascript</h5>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar javascript_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>

                    <h5 className='text-start fs-5 fw-bold mt-3'>Bootstrap & Tailwind</h5>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar bootstrap_tailwind_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                </div>
            </div>



            {/* languages section  */}

            <div className="language_top">
                <h4 className='text-start fw-bold '>LANGUAGE</h4>
                <div className='text-start services_list pt-3 pb-3'>
                    <li><i class="fas fa-caret-square-right me-2"></i> English : Fluent</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Bangla: Native</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Hindi/Urdu : Fluent</li>
                </div>
            </div>

            {/* EXPERIENCE  */}

            <div className="experience_top mt-5">
                <h4 className='fw-bold text-start'>EXPERIENCE</h4>
                <div className="mt-5">
                    <div class="row text-start">
                        <div class="col text-start">
                            <i class="fas fa-briefcase"></i> <li className='fs-5'> Dec-2021-Running</li>

                        </div>
                        <div class="col">

                            <h5 className='fw-bold fs-5 d-inline'>AAk Tele-Science</h5>
                            <p>Front-End Developer</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* education section  */}

            <div className="education_top">
                <h4 className='text-start fw-bold'>EDUCATION</h4>
                <div className='mt-5 pb-5'>
                    <div class="row text-start">
                        <div class="col text-start">
                            <i class="fas fa-graduation-cap"></i> <li className='fs-5'>2019-2023-Running</li>

                        </div>
                        <div class="col">

                            <h5 className='fw-bold fs-5 d-inline'>Ideal Institute of Science and Technology</h5>
                            <p>Diploma In Computer Engineering</p>
                        </div>

                    </div>
                    <div class="row text-start">
                        <div class="col text-start">
                            <i class="fas fa-graduation-cap "></i><li className='fs-5'> 2017-2019</li>

                        </div>
                        <div class="col">

                            <h5 className='fw-bold fs-5 d-inline'>Kalma Waz Ali Model School</h5>
                            <p>Secondary School Certificate</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* interest section  */}
            <div className="interest_top pb-5">
                <h4 className='fw-bold text-start'>INTERESTS</h4>
                <div className='text-start services_list pt-3 pb-3'>
                    <li><i class="fas fa-caret-square-right me-2"></i> Travelling & Photography</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Reading Books </li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Playing Cricket</li>
                    <li><i class="fas fa-caret-square-right me-2"></i> Research Islam </li>
                </div>
            </div>


        </div>
    );
};

export default About;