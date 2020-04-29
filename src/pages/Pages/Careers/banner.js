// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images


class Banner extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="section newStakingBanner">
                    <Container className=" mb-md-5 mb-4">
                        <Row className="align-items-center mb-4">
                            <Col lg="8" md="8" className="text-sm-left">
                                <div className="section-title">
                                    <h4 className="title mb-4">New to staking?</h4>
                                    <p className="text-muted para-desc mb-0">Check out the guide we have put together to learn about how staking works, why it is important, and what you need to get started staking tokens. </p>
                                </div>
                            </Col>

                            <Col lg="4" md="4" className="mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0">
                                <Link to="#" className="btn btn-outline-primary">Read Guide <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>


                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default Banner;
