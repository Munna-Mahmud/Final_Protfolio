import React from 'react';
import Protfolio from '../../../Protfolio';
import { Row, Col, Card } from 'react-bootstrap';

import photo1 from '../../../../../images/instrapic/munna babu (1).jpg'
import photo2 from '../../../../../images/instrapic/munna babu (2).jpg'
import photo3 from '../../../../../images/instrapic/munna babu (3).jpg'
import photo4 from '../../../../../images/instrapic/munna babu (4).png'


const Photographs = () => {
    return (
        <div>
            <Protfolio></Protfolio>
            <div className="ms-4 me-4">
            <div className="mt-5 pb-4">
                    <h3 className='fs-5 pb-2 fw-bold text-start' style={{ fontFamily: "sans-serif" }}>PHOTOGRAPHS</h3>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img src={photo1} />

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <Card.Img src={photo2} />

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <Card.Img src={photo3} />

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <Card.Img src={photo4} />

                            </Card>
                        </Col>


                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Photographs;