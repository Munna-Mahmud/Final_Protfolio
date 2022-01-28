import React from 'react';
import './About.css'
import { Row, Col } from 'react-bootstrap';
// import { Progress } from '@nature-ui/core';

import banner from '../../../src/images/about.jpg'

const About = () => {
    return (
        <div className="ms-4 me-4" >
            <div data-aos="fade-up">
                <div className='about_top'>
                    <h4 className='text-start fw-bold mt-4 pt-4'>ABOUT ME</h4>
                    <div className='mt-5  text-start '>
                        <p style={{ letterSpacing: '.05em' }}>Hello there! My name is Munna Babu. I am a Web Developer, and I'm very passionate and dedicated to my work.
                            With 1+ years experience as a professional a Front-End Developer, I have acquired the skills and knowledge necessary to make your project a success.</p>

                    </div>

                </div>
                <div className='text-start mt-5 pb-5'>
                    <div class="row">
                        <div class="col-md-6">
                            <div className="d-flex ">
                                <h5 className='d-inline pe-5 me-5' >Name: </h5>
                                <p className='d-inline '>Munna Babu</p>
                            </div>

                            <div className="d-flex">
                                <h5 className='d-inline pe-5 me-4'>Address: </h5>
                                <p className='d-inline'>Dhaka, Bangladesh</p> <br />
                            </div>

                            <div className="d-flex">
                                <h5 className='d-inline '>Phone:</h5>
                                <p className='d-inline ms-5 ps-4'>+8801904625620</p> <br />
                            </div>

                            <div className="d-flex">
                                <h5 className='d-inline me-5 pe-5'>Mail: </h5>
                                <p className=' d-inline'>munna.babu@gmail.com</p> <br />
                            </div>

                            <div className="d-flex">
                                <h5 className='d-inline '>Nationality: </h5>
                                <p className=' d-inline ms-4'>Bangladeshi</p> <br />
                            </div>

                        </div>
                        <div class="col-md-6 mt-3">
                            <img className='w-100 img-fluid ' style={{ borderRedius: "10px" }} src={banner} alt="" />

                        </div>
                    </div>

                </div>

                {/* services section  */}

                <div className='services_top'>
                    <h4 className='text-start fw-bold  '>SERVICES</h4>
                    <div className='text-start services_list pt-3 pb-3'>
                        <li><i className="fas fa-caret-square-right me-2"></i> Front-End Development</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> React Development</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Web Development</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> web Design</li>
                    </div>
                </div>

                {/* programming section  */}

                <div className="programming_top">
                    <h4 className='text-start fw-bold '>PROGRAMMING</h4>

                    <div className='mt-5 pb-5'>
                        <h5 className='text-start fs-6 fw-bold'>HTML & CSS</h5>
                        {/* <p className='text-end d-inline'>80%</p> */}
                        <div className="progress">
                            <div className="progress-bar html_css_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">95%</div>
                        </div>

                        <h5 className='text-start fs-6 fw-bold mt-3'>React JS</h5>
                        {/* <p className='text-end d-inline'>80%</p> */}
                        <div className="progress">
                            <div className="progress-bar react_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </div>

                        <h5 className='text-start fs-6 fw-bold mt-3'>Javascript</h5>
                        {/* <p className='text-end d-inline'>80%</p> */}
                        <div className="progress">
                            <div className="progress-bar javascript_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>

                        <h5 className='text-start fs-6 fw-bold mt-3'>Bootstrap & Tailwind</h5>
                        {/* <p className='text-end d-inline'>80%</p> */}
                        <div className="progress">
                            <div className="progress-bar bootstrap_tailwind_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                    </div>
                </div>



                {/* languages section  */}

                <div className="language_top">
                    <h4 className='text-start fw-bold '>LANGUAGE</h4>
                    <div className='text-start services_list pt-3 pb-3'>
                        <li><i className="fas fa-caret-square-right me-2"></i> English : Fluent</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Bangla: Native</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Hindi/Urdu : Fluent</li>
                    </div>
                </div>

                {/* EXPERIENCE  */}

                <div className="experience_top mt-5">
                    <h4 className='fw-bold text-start'>EXPERIENCE</h4>
                    <div className="mt-5">
                        <div className="row text-start">
                            <div className="col text-start">
                                <i className="fas fa-briefcase"></i> <li> Dec-2021-Running</li>

                            </div>
                            <div className="col">

                                <h5 className='fw-bold  d-inline'>AAk Tele-Science</h5>
                                <p>Front-End Developer</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* education section  */}

                <div className="education_top">
                    <h4 className='text-start fw-bold'>EDUCATION</h4>
                    <div className='mt-5 pb-5'>
                        <div className="row text-start">
                            <div className="col text-start">
                                <i className="fas fa-graduation-cap"></i> <li>2019-2023-Running</li>

                            </div>
                            <div className="col">

                                <h5 className='fw-bold d-inline'>Ideal Institute of Science and Technology</h5>
                                <p>Diploma In Computer Engineering</p>
                            </div>

                        </div>
                        <div className="row text-start">
                            <div className="col text-start">
                                <i className="fas fa-graduation-cap "></i><li> 2017-2019</li>

                            </div>
                            <div className="col">

                                <h5 className='fw-bold d-inline'>Kalma Waz Ali Model School</h5>
                                <p>Secondary School Certificate</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* interest section  */}
                <div className="interest_top pb-5">
                    <h4 className='fw-bold text-start'>INTERESTS</h4>
                    <div className='text-start services_list pt-3 pb-3'>
                        <li><i className="fas fa-caret-square-right me-2"></i> Travelling & Photography</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Reading Books </li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Playing Cricket</li>
                        <li><i className="fas fa-caret-square-right me-2"></i> Research Islam </li>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default About;