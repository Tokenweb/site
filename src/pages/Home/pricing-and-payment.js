import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Input, FormGroup, Label } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section-title";

class PricingAndPayment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }
    render() {
        return (
            <React.Fragment>
                <Container className="mt-100 mt-60">
                    {/* Render Section Title */}
                    <SectionTitle title="Our Funds" desc="Our investment products are great for everyone. We have something for every size of risk and goals." />

                    <Row>
                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Token Fund I</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">

                                        <span className="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2">This fund invests in proven token based projects our team has been involved with for years.
</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Minimum Investment: 500 CHF</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>CHF 500 Mininum Investment</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Control payout timing</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>24×7 support</li>
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Staking Fund I</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="price text-primary font-weight-bold display-4 mb-0">2</span>
                                        <span className="h4 mb-0 mt-2 text-primary">%</span>
                                        <span className="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2"> Per Transection</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Transparent payouts</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Deposit tagging</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Control payout timing</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>24×7 support</li>
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link>
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Liquidity Fund I</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="price text-primary font-weight-bold display-4 mb-0">2</span>
                                        <span className="h4 mb-0 mt-2 text-primary">%</span>
                                        <span className="h6 align-self-end font-weight-bold text-uppercase mb-2 ml-2"> Per Transection</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Transparent payouts</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Deposit tagging</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Control payout timing</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>24×7 support</li>
                                    </ul>

                                    <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link>
                                </div>
                            </div>
                        </Col>









                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default PricingAndPayment;
