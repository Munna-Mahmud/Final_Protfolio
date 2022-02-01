import React from 'react';
import './Banner.css';
import { Typewriter } from 'react-simple-typewriter'
// import { Row, Col } from 'react-bootstrap';
// import banner from ''

const Banner = () => {
    return (
        <div className="container-fluid ">
            <div className="row" >
                <div className="col-md-6 col-xl-6 col-sm-12 " >
                    <div className=" text-start mt-5 pt-5">
                        <div className='pt-5 banner'>
                            <h1 className='name_title' style={{ fontFamily: "Poppins" }}>MUNNA BABU</h1>
                            <h3 className="pb-4 " style={{ color: '#9B9BA3' }}>Creative
                                <span style={{ color: 'black', fontWeight: 'bold' }}>
                                    {/* Style will be inherited from the parent element */}
                                    <Typewriter
                                        words={[' Front-End Developer', ' UI Designer', ' MERN Stack Developer']}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        loop={10}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </span>

                            </h3>
                            <button className='pt-3 pb-3 ' ><a className='ps-2 pe-2' target="_blank" href="https://drive.google.com/file/d/16GsHo8Ze-kMyPLB3QuCgTdXXt9bWVAsr/view?usp=sharing"><i className="fas fa-arrow-down"></i> DOWNLOAD RESUME</a></button>
                        </div>
                    </div>

                </div>

                <div className="col-md-6 col-xl-6 col-sm-12">

                    <div className=" text-end pb-4 pt-4 mt-5">
                        <div className="banner_img text-end">
                            {/* img  */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;