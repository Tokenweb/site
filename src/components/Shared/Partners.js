import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../images/client/cosmos.png";
import img3 from "../../images/client/eth.png";
import img4 from "../../images/client/polkadot.png"
import filecoin from "../../images/client/Filecoin-logo.png"
import graph from "../../images/client/graph.png"
import kyber from "../../images/client/kyber.png"
import bitcoin from "../../images/client/bitcoin.png"
import uniswap from "../../images/client/uniswap.png"

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="3" md="4" xs="12" className="text-center partnerLogo">
                              <img src={img1} className="avatar" alt="cosmos transparent full text logo"/>
                            </Col>


                            <Col id="partner3" lg="3" md="4" xs="12" className="text-center partnerLogo">
                                <img src={img3} className="avatar" alt="ethereum transparent full text logo"/>
                            </Col>
                            <Col id="partner4" lg="3" md="4" xs="12" className="text-center partnerLogo">
                                <img src={img4} className="avatar" alt="polkadot transparent full text logo"/>
                            </Col>
                            <Col id="partner4" lg="3" md="4" xs="12" className="text-center partnerLogo">
                              <img src={filecoin} className="avatar" alt="polkadot transparent full text logo"/>
                            </Col>


                        </Row>

                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="3" md="4" xs="12" className="text-center partnerLogo">
                              <img src={graph} className="avatar" alt="cosmos transparent full text logo"/>
                            </Col>


                            <Col id="partner3" lg="3" md="4" xs="12" className="text-center partnerLogo">
                                <img src={kyber} className="avatar" alt="ethereum transparent full text logo"/>
                            </Col>
                            <Col id="partner4" lg="3" md="4" xs="12" className="text-center partnerLogo">
                                <img src={bitcoin} className="avatar" alt="polkadot transparent full text logo"/>
                            </Col>
                            <Col id="partner4" lg="3" md="4" xs="12" className="text-center partnerLogo">
                              <img src={uniswap} className="avatar" alt="polkadot transparent full text logo"/>
                            </Col>


                        </Row>

            </React.Fragment>
        );
    }
}

export default Partners;
