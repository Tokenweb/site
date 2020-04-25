import React, { Component } from 'react';
import { Row, Col } from "reactstrap";

//Import Images
import img1 from "../../images/client/cosmos4.png";
import img2 from "../../images/client/kava.png";
import img3 from "../../images/client/eth.png";

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <Row className="justify-content-center" id="partners">
                            <Col id="partner1" lg="4" md="4" xs="6" className="text-center partnerLogo">
                                <img src={img1} className="avatar" alt=""/>
                            </Col>

                            <Col id="partner2" lg="4" md="4" xs="6" className="text-center partnerLogo">
                                <img src={img2} className="avatar" alt=""/>
                            </Col>
                            <Col id="partner3" lg="4" md="4" xs="6" className="text-center partnerLogo">
                                <img src={img3} className="avatar" alt=""/>
                            </Col>


                        </Row>
            </React.Fragment>
        );
    }
}

export default Partners;
