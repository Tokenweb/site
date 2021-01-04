// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import saas1 from '../../images/saas/1.png';
import appDevelopmentSVG from '../../images/illustrator/app_development_SVG.svg';
import staking from '../../images/saas/staking.jpg';
import money from '../../images/saas/moneygrowth.jpg';
import work from '../../images/saas/work.jpg';

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features2 : [
                {title : "" },
                {title : "" }
            ],
            features : [
                {title : "" },
                {title : "" }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-70 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={staking} className="img-fluid shadow rounded" alt="" />
                            </Col>

                            <Col lg={6} md={6}  className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title="Our Mission"
                                        desc="TokenWeb supports transformative technologies which empower individuals and strive to create an inclusive future."
                                        features={this.state.features}
                                        class = "h4 mr-2"
                                        />

                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                <SectionTitleLeft
                                    title="Projects"
                                    desc="TokenWeb builds, funds, and supports early stage start ups. "
                                    features={this.state.features2}
                                    class = "h4 mr-2"
                                    />

                                </div>
                            </Col>

                            <Col lg="5" md={{size:6,order:2}} xs={{order:1}}>
                                <img src={appDevelopmentSVG} alt="" />
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-70 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={staking} className="img-fluid shadow rounded" alt="" />
                            </Col>

                            <Col lg={6} md={6}  className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title="Staking as a Service"
                                        desc="TokenWeb actively runs validators on major staking networks to secure and govern the blockchains. Anyone can delegate their tokens to our validators and share in the rewards."

                                        features={this.state.features}
                                        class = "h4 mr-2"
                                        />

                                </div>
                            </Col>
                        </Row>
                    </Container>
            </React.Fragment>
        );
    }
}

export default Start;
