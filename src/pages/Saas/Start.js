// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Import images
import saas1 from '../../images/saas/1.png';
import appDevelopmentSVG from '../../images/illustrator/app_development_SVG.svg';

//Import Components
import SectionTitleLeft from "../../components/Shared/section-title-left";

class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                {title : "Contribute to securing blockchain networks" },
                {title : "Make money passively" }
            ],
            features2 : [
                {title : "5+ years experience with Proof of Stake" },
                {title : "7+ years active in the crypto industry" }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={6} md={6}>
                                <img src={saas1} className="img-fluid shadow rounded" alt="" />
                            </Col>

                            <Col lg={6} md={6}  className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <SectionTitleLeft
                                        title="What is staking?"
                                        desc="Staking is a process in which tokens and validator nodes are used to secure a blockchain network. In return, those staking receive compensation. If that makes little sense, don't worry! We handle everything for you. You just get paid!"
                                        features={this.state.features}
                                        class = "h4 mr-2"
                                        />
                                    <Link to="#" className="mt-3 text-primary">Start staking now<i className="mdi mdi-chevron-right"></i></Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="mt-100 mt-60">
                        <Row className="align-items-center">
                            <Col lg={7} md={{size:6, order:1}} xs={{order:2}} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title mr-lg-5">
                                <SectionTitleLeft
                                    title="Who are we?"
                                    desc="TokenWeb was founded by individuals who have been in crypto for many years and want to help spread it to a wider audience by making crypto much easier to understand and use. "
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
            </React.Fragment>
        );
    }
}

export default Start;
