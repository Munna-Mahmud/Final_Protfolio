import React from 'react';
import './About.css'
// import { Progress } from '@nature-ui/core';

const About = () => {
    return (
        <div className="ms-4 me-4">
            <div className='about_top'>
                <h4 className='text-start fw-bold mt-4 pt-4'>ABOUT ME</h4>
                <div className='mt-5  text-start fs-5'>
                    <p>Hello there! My name is Munna Babu. I am a graphic designer, and I'm very passionate and dedicated to my work.
                        With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>

                </div>

            </div>
            <div className='table text-start mt-5 pb-5'>

                <ul className=''>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                    <li>
                        <span className="first">Name:</span>
                        <span className="second">Munna Babu</span>
                    </li>
                </ul>

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
                    <p className='text-start fs-5 fw-bold'>HTML & CSS</p>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar html_css_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">95%</div>
                    </div>

                    <p className='text-start fs-5 fw-bold mt-3'>React JS</p>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar react_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>

                    <p className='text-start fs-5 fw-bold'>Javascript</p>
                    {/* <p className='text-end d-inline'>80%</p> */}
                    <div class="progress">
                        <div class="progress-bar javascript_bar bg-secondary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>

                    <p className='text-start fs-5 fw-bold'>Bootstrap & Tailwind</p>
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
                            <i class="fas fa-briefcase"></i> <li> Dec-2021-Running</li>

                        </div>
                        <div class="col">

                            <p className='fw-bold fs-5 d-inline'>AAk Tele-Science</p>
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
                            <i class="fas fa-graduation-cap"></i> <li>2019-2023-Running</li>

                        </div>
                        <div class="col">

                            <p className='fw-bold fs-5 d-inline'>Ideal Institute of Science and Technology</p>
                            <p>Diploma In Computer Engineering</p>
                        </div>

                    </div>
                    <div class="row text-start">
                        <div class="col text-start">
                            <i class="fas fa-graduation-cap"></i><li> 2017-2019</li>

                        </div>
                        <div class="col">

                            <p className='fw-bold fs-5 d-inline'>Kalma Waz Ali Model School</p>
                            <p>Secondary School Certificate</p>
                        </div>

                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default About;