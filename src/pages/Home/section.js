import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import images
import homeShape from '../../images/saas/home-shape.png';
import homeImg from '../../images/saas/home.png';
import staking from '../../images/saas/staking.jpg';
import money from '../../images/saas/moneygrowth.jpg';
import work from '../../images/saas/work.jpg';
import desk from '../../images/saas/computerdesk.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center" style={{ background: `url(${homeShape})`, backgroundPosition : "center center", height : "auto" }} id="home">                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="12" className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                        <div className="title-heading margin-top-100">

                                            <h1 className="heading mb-3">Optimise your Crypto Holdings</h1>
                                            <p className="para-desc mx-auto text-muted">Tokenweb.io curates the top projects in the crypto industry and streamlines the process to monetise your portfolio.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="/staking-portal" className="btn btn-primary">Get Started<i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>

                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;
