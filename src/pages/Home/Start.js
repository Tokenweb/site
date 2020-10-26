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
                {title : "InterScan : A cross-chain block explorer." },
                {title : "Gabel : A Cosmos based multi-chain wallet and governance client." }
            ],
            features : [
                {title : "5+ years experience with Proof of Stake" },
                {title : "8+ years active in the crypto industry" }
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
                                        title="About Us"
                                        desc="Based in the European Union, with a Global reach, TokenWeb was founded by industry veterans to create a safe and streamlined environement to reduce speculation and increase participation within the crypto industry."
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
                                    title="Products and Services"
                                    desc="TokenWeb products focus on providing a simplified UX for complex inter-blockchain communication. Our services range from non-custodial staking services to fully managed investment funds depending on your experience and level of comfort."
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
