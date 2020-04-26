import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import images
import startupSVG from '../../images/illustrator/Startup_SVG.svg';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-half-170 d-table w-100" id="home">
                            <Container>
                                <Row className="align-items-center">
                                    <Col lg={7} md={7}>
                                        <div className="title-heading mt-4">
                                            <h1 className="heading mb-3">Funds by <span className="text-primary">TokenWeb</span> </h1>
                                            <p className="para-desc text-muted">TokenWeb’s investment funds are based in the Cayman Islands and managed in Switzerland to provide our clients maximum privacy, security, and tax benefits. </p>
                                          
                                        </div>
                                    </Col>
                                    <Col lg={5} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                        <img src={startupSVG} alt="" />
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
