import React, { Component } from 'react';
import { Container, Row, Col,Media } from 'reactstrap';
import { Link } from "react-router-dom";

import FeatherIcon from 'feather-icons-react';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
            <Container className="faq-margin">
            <Row className="mt-5 pt-md-4 justify-content-center">
                <Col xs={12} className="text-center">
                    <div className="section-title">
                        <h4 className="title mb-4">Flexible Solutions</h4>

                    </div>
                </Col>
            </Row>
                <Row className="justify-content-center">
                    <Col md={6} xs={12}>
                        <Media>
                            <i><FeatherIcon icon="help-circle" className="fea icon-ex-md text-primary mr-2 mt-1" /></i>
                            <Media body>
                                <h5 className="mt-0">Dedicated Miners</h5>
                                <p className="answer text-muted mb-0">We can configure a dedicated filecoin miner based on your specifications and give you full remote access and control.</p>
                            </Media>
                        </Media>
                    </Col>

                    <Col md={6} xs={12} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <Media>
                        <i><FeatherIcon icon="help-circle" className="fea icon-ex-md text-primary mr-2 mt-1" /></i>
                            <Media body>
                                <h5 className="mt-0">Fully Managed Miners</h5>
                                <p className="answer text-muted mb-0">We can manage a fully hosted solution where we take care of everything for you.</p>
                            </Media>
                        </Media>
                    </Col>

                    <Col md={6} xs={12} className="mt-4 pt-2">
                        <Media>
                        <i><FeatherIcon icon="help-circle" className="fea icon-ex-md text-primary mr-2 mt-1" /></i>
                            <Media body>
                                <h5 className="mt-0">Lending FIL</h5>
                                <p className="answer text-muted mb-0">If you are HODLING Filecoin and want to monetise it without the hassle of mining, loan it for a fixed interest rate.</p>
                            </Media>
                        </Media>
                    </Col>

                    <Col md={6} xs={12} className="mt-4 pt-2">
                        <Media>
                        <i><FeatherIcon icon="help-circle" className="fea icon-ex-md text-primary mr-2 mt-1" /></i>
                            <Media body>
                                <h5 className="mt-0">Hedging</h5>
                                <p className="answer text-muted mb-0">Eliminate price volatility by implementing hedging strategies to lock in guaranteed FIL prices.</p>
                            </Media>
                        </Media>
                    </Col>
                </Row>

                <Row className="mt-5 pt-md-4 justify-content-center">
                    <Col xs={12} className="text-center">
                        <div className="section-title">
                            <h4 className="title mb-4">Ready to Start Mining? Get in touch!</h4>
                            <p className="text-muted para-desc mx-auto">Let us know your goals and we will follow up very quickly with the perfect solution.</p>
                              <a href="mailto:hello@tokenweb.io" ><input type="submit" value="Contact Us" className="btn btn-primary mt-4"/></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Faq;
