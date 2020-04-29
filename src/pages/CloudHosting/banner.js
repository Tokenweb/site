// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import computer from '../../images/icon/computer.svg';
import cloud from '../../images/icon/cloud.svg';
import server from '../../images/icon/server.svg';
import big from '../../images/icon/big.svg';
import database from '../../images/icon/database.svg';
import refresh from '../../images/icon/refresh.svg';

class Banner extends Component {



    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container className="pb-lg-4 mb-md-5 mb-4">
                        <Row className="align-items-center mb-4">
                            <Col lg="9" md="8" className="text-sm-left">
                                <div className="section-title">
                                    <h4 className="title mb-4">Cloud Hosting Services</h4>
                                    <p className="text-muted para-desc mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                </div>
                            </Col>

                            <Col lg="3" md="4" className="mt-4 mt-sm-0 text-sm-right pt-2 pt-sm-0">
                                <Link to="#" className="btn btn-outline-primary">Read more <i className="mdi mdi-chevron-right"></i></Link>
                            </Col>
                        </Row>


                    </Container>
                </section>

            </React.Fragment>
        );
    }
}

export default Banner;
