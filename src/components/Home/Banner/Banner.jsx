import React from 'react';
import './Banner.css';
// import { Row, Col } from 'react-bootstrap';
// import banner from ''

const Banner = () => {
    return (
        <div className='ms-4 me-4 '>
            <div class="row">
                <div class="col-md-6 text-start mt-5 pt-5">
                    <div className='pt-5 banner'>
                        <h1 className='name_title'>MUNNA BABU</h1>
                        <h3 className="pb-4 text-secondary">Creative Front-End Developer</h3>
                        <button ><a className='btn  ps-3 pe-3 p-3 '  target="_blank" href="https://drive.google.com/file/d/16GsHo8Ze-kMyPLB3QuCgTdXXt9bWVAsr/view?usp=sharing">DOWNLOAD RESUME</a></button>
                    </div>
                </div>
                <div class="col-md-6  text-end pb-4 pt-4 mt-5">
                    <div className="banner_img text-end">
                        {/* img  */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;