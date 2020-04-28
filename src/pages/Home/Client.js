// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Containers
import ReviewsSlider from "../../components/Shared/reviews-slider";

//Import Images


class Client extends Component {


    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">


                        {/* clients slider */}

                    </Container>

                    <Container className="pb-lg-4 mb-md-5 mb-4 mt-100 mt-60">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Join our Community Mailing List</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">We keep you up to date with key industry updates and any new tools available to make money passively with your tokens.</p>

                                    <div className="mt-3">
                                        <Link to="#" className="btn btn-light mt-2 mr-2 disabled">Coming Soon</Link>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default Client;
