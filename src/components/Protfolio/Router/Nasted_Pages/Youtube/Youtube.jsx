import React from 'react';
import Protfolio from '../../../Protfolio';
import { Row, Col, Card } from 'react-bootstrap';


const Youtube = () => {
    return (
        <div>
            <Protfolio></Protfolio>
          <div className="ms-4 me-4" data-aos="fade-up">
                {/* THIS IS YOUTUBE SECTION  */}

                <div className="mt-5 pb-4">
                    <h3 className='fs-5 pb-2 fw-bold text-start' style={{ fontFamily: "sans-serif" }}>YouTube Videos</h3>

                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card >
                                <iframe height="325" src="https://www.youtube.com/embed/8fjOKphLWNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <iframe height="325" src="https://www.youtube.com/embed/6U6d9lFoSo8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <iframe height="325" src="https://www.youtube.com/embed/k_hEFRP3QII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Card>
                        </Col>

                        <Col>
                            <Card >
                                <iframe height="325" src="https://www.youtube.com/embed/JplAgfwsIzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            </Card>
                        </Col>


                    </Row>
                </div>
          </div>

        </div>
    );
};

export default Youtube;