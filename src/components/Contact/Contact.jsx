import emailjs from '@emailjs/browser';

// import Navigation from './../Home/Navigation/Navigation';
// import Footer from '../Footer/Footer';
import { Form } from 'react-bootstrap';
import React, { useState } from "react";
// import React from 'react';

import './Contact.css';

const Result = () => {
    return (
        <p className='fw-bold'>Your Message has been Succesfully</p>
    )
}

const Contact = () => {
    const [result, showResult] = useState(false)


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ed983dc', 'template_dctjaig', e.target, 'user_yeb0Gq8kQLShqLU1WSJf3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        showResult(true);

    };

    return (
        <div id="contact" className=' ms-4 me-4 contact_top pb-5 mb-5' data-aos="fade-up" >
            <h4 className='text-start fw-bold mt-4 pt-4'>GET IN TOUCH</h4>
            <section className='mt-5 pt-5' >
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: " 15px" }}>
                                    <div className=" p-5 ">
                                        <h3 className=" text-center mb-5">Send Your Massage</h3>

                                        <form onSubmit={sendEmail} >

                                            <div className="form-outline mb-4">
                                                <input type="text" id="form3Example1cg" className="form-control form-control-lg" name="client_name" placeholder="Your Name" />
                                                {/* <label className="form-label" for="form3Example1cg">Your Name</label> */}
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name="email" placeholder="Your Email" />
                                                {/* <label className="form-label" for="form3Example3cg" placeholder="Your Email">Your Email</label> */}
                                            </div>

                                            <div className="form-outline mb-4">

                                                <textarea className="form-control form-control-lg" id="form3Example4cg" rows="4" name="message" placeholder="Your Message" ></textarea>

                                                {/* <label className="form-label" for="form3Example4cg">Your Message</label> */}
                                            </div>

                                            <div className="d-flex  justify-content-center">
                                                <input className="btn  send_btn " type="submit" value="Send" />

                                            </div>
                                            <div className="row text-center  text-success">
                                                {result ? <Result /> : null}
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5 pt-3 pb-5'>
                <div className="mt-10 pb-5">
                    <div className="cust-map">
                        <div className="mapouter"><div className="gmap_canvas"><iframe width={1080} height={504} id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392431.5972680272!2d90.25651407052888!3d23.961974005321608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c29a88755503%3A0x55faa82f5f93b6e8!2sGhosbag!5e0!3m2!1sen!2sbd!4v1643874740531!5m2!1sen!2sbd" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://fmovies-online.net" /><br /><style dangerouslySetInnerHTML={{ __html: ".mapouter{position:relative;text-align:right;height:504px;width:1080px;}" }} /><a href="https://www.embedgooglemap.net">google embed map</a><style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:504px;width:1080px;}" }} /></div></div>
                    </div>

                    {/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                </div>
            </section>
        </div>
    );
};

export default Contact;