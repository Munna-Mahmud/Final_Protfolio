import React from 'react';
import './Protfolio.css'
import NastedRouter from './Router/NastedRouter';

const Protfolio = () => {
    return (
        <div className='ms-4 me-4 mt-5'>
            <div className="protfolio_top">
                <h4 className='fw-bold text-start'>CREATIVE PORTFOLIO</h4>
                <div>
                    <NastedRouter></NastedRouter>
                </div>
            </div>
        </div>
    );
};

export default Protfolio; 