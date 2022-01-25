import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {  Nav } from 'react-bootstrap';

const NastedRouter = () => {
    return (
        <div className='mt-5'>
            <Nav className="justify-content-start flex-grow-1 pe-3 navber_link">
                {/* <Nav.Link as={HashLink} to="/protfolio#protfolio">All</Nav.Link> */}
                <Nav.Link as={HashLink} to="/all">All</Nav.Link>
                <Nav.Link as={HashLink} to="/youtube">YouTube</Nav.Link>
                {/* <Nav.Link as={HashLink} to="/home#exoticPlaces">ExoticPlaces</Nav.Link> */}
                <Nav.Link as={HashLink} to="/react">React Project</Nav.Link>
                <Nav.Link as={HashLink} to="/webdesign">Web Desing</Nav.Link>
                <Nav.Link as={HashLink} to="/photographs">Photographs</Nav.Link>

              </Nav>
        </div>
    );
};

export default NastedRouter;