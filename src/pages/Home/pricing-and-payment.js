import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Alert, Input, FormGroup, Label } from "reactstrap";

//Import Components
import SectionTitle from "../../components/Shared/section/title/section-title";

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
                <Container className="mt-100 mt-60 fundBlocks">
                    {/* Render Section Title */}
                    <SectionTitle title="Our Funds" desc="Year over year, TokenWeb's crypto-based funds have grossly outperformed industry averages. We are truly experts at what we do." />

                    <Row>
                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Token Fund</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">

                                        <span className="h6 align-self-end mb-2 ml-2">Invests in token projects with established history</span>
                                    </div>

                                    <ul className="feature list-inline">

                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>CHF 50,000 Minimum</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>5 Year Holding Period</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>100% Capital in Tokens</li>
                                    </ul>


                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Staking Fund</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">


                                      <span className="h6 align-self-end mb-2 ml-2">Invests in stakable tokens and distributes staking revenue quarterly.</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>CHF 100,000 Minimum</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Withdraw Anytime</li>

                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Monthly Payouts</li>
                                    </ul>

                                    {/* <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link> */}
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="6" xs="12" className="mt-4 pt-2">
                            <div className="rounded border bg-light shadow">
                                <div className="bg-primary p-4 text-center rounded-top">
                                    <h4 className="mb-0 title-dark text-light">Yield Farming Fund</h4>
                                </div>

                                <div className="p-4">
                                    <div className="d-flex justify-content-center mb-4">

                                        <span className="h6 align-self-end mb-2 ml-2">Provides liquidity to DeFi platforms in exchange for token incentives.</span>
                                    </div>

                                    <ul className="feature list-inline">
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>CHF 100,000 Minimum</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>Token Based</li>
                                        <li className="h5 font-weight-normal"><i className="mdi mdi-check-decagram text-primary mr-2"></i>90 Day Redemption Period</li>

                                    </ul>

                                        {/* <Link to="" className="btn btn-primary btn-block mt-4 pt-2">Payment Now</Link> */}
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
