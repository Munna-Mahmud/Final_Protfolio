import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div class="container">
                <div class="row d-flex align-items-center">
                    <div class="col text-start ">
                        <h1 className='name_title'>MUNNA BABU</h1>
                        <h3 className="pb-4 text-secondary">Creative Front-End Developer</h3>
                        <button className='btn btn-dark p-3 '>Get in Touch</button>
                    </div>
                    <div class="col d-flex align-items-center mt-5 rounded">
                        <img className='rounded' src="https://avatars.githubusercontent.com/u/81243579?v=4" alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;