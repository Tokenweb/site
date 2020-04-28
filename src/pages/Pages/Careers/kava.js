// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

//Import Images
import logo from "../../../images/job/Gradle.svg";

class PageJobDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required

            ],
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }
     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
     }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {

        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems = {this.state.pathItems}>
                    <img src={logo} className="avatar avatar-small" alt=""/>
                    <h4 className="title mt-4 mb-3">Kava Staking</h4>
                    <p className="para-desc mx-auto text-muted">Kava is a cross-chain lending platform backed by a stable coin. What this means is that people who hold any major crypto coin such as Bitcoin, ATOM, ETH, BNB, etc. can use their crypto as collateral to secure loans in a stable coin, just by clicking a few buttons. It is similar to MakerDAO's permissionless credit but not limited to just Ethereum Coins. </p>

                </PageBreadcrumb>


                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="4" md="5" xs="12">
                                <div className="sidebar rounded shadow">
                                    <div className="widget border-bottom p-4">
                                        <h5 className="mb-0">Key Information</h5>
                                    </div>

                                    <div className="p-4">
                                        <div className="widget">
                                            <i className="mdi mdi-account-check mdi-24px float-left mr-3"></i>
                                            <div className="overflow-hidden d-block">
                                                <h4 className="widget-title mb-0">Project Website</h4>
                                                <p className="text-primary">https://kava.io</p>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <i className="mdi mdi-map-marker mdi-24px float-left mr-3"></i>
                                            <div className="overflow-hidden d-block">
                                                <h4 className="widget-title mb-0">Token Name</h4>
                                                <p className="text-primary">KAVA</p>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <i className="mdi mdi-monitor mdi-24px float-left mr-3"></i>
                                            <div className="overflow-hidden d-block">
                                                <h4 className="widget-title mb-0">Staking Reward</h4>
                                                <p className="text-primary">~ 8.08% Annually</p>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <i className="mdi mdi-briefcase-outline mdi-24px float-left mr-3"></i>
                                            <div className="overflow-hidden d-block">
                                                <h4 className="widget-title mb-0">Unbonding Period</h4>
                                                <p className="text-primary"> 21 Days</p>
                                            </div>
                                        </div>






                                    </div>
                                </div>
                            </Col>

                            <Col lg="8" md="7" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="ml-lg-4">
                                    <h5>Required Items to Get Started</h5>
                                    <p className="text-muted">Ledger Nano, KAVA, Computer</p>
                                    <p className="text-muted">Completely new to staking and are confused? Check out this introductory guide before proceeding.</p>


                                    <h5 className="mt-4">Setting up Ledger Nano</h5>
                                    <p className="text-muted">If your KAVA are already on your Ledger Wallet please skip this step. </p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Participate in requirements analysis</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Write clean, scalable code using C# and .NET frameworks</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Test and deploy applications and systems</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Revise, update, refactor and debug code</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Improve existing software</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Develop documentation throughout the software development life cycle (SDLC)</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Serve as an expert on applications and provide technical support</li>
                                    </ul>

                                    <h5 className="mt-4">Connecting to Web Wallet</h5>
                                    <p className="text-muted">If you are already familiar with using web wallets with your Ledger Wallet, please skip this step. We recommend the Lunie.io web wallet, but any alternative you are comfortable with is fine. </p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Proven experience as a .NET Developer or Application Developer</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Experience designing, developing and creating RESTful web services and APIs</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Basic know how of Agile process and practices</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of object-oriented programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of concurrent programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Sound knowledge of application architecture and design.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Excellent problem solving and analytical skills</li>
                                    </ul>

                                    <h5 className="mt-4">Staking your Tokens</h5>
                                    <p className="text-muted">If you are already familiar with using web wallets with your Ledger Wallet, please skip this step. We recommend the Lunie.io web wallet, but any alternative you are comfortable with is fine. </p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Proven experience as a .NET Developer or Application Developer</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Experience designing, developing and creating RESTful web services and APIs</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Basic know how of Agile process and practices</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of object-oriented programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of concurrent programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Sound knowledge of application architecture and design.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Excellent problem solving and analytical skills</li>
                                    </ul>

                                    <h5 className="mt-4">Receiving Rewards</h5>
                                    <p className="text-muted">If you are already familiar with using web wallets with your Ledger Wallet, please skip this step. We recommend the Lunie.io web wallet, but any alternative you are comfortable with is fine. </p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Proven experience as a .NET Developer or Application Developer</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>good understanding of SQL and Relational Databases, specifically Microsoft SQL Server.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Experience designing, developing and creating RESTful web services and APIs</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Basic know how of Agile process and practices</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of object-oriented programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Good understanding of concurrent programming.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Sound knowledge of application architecture and design.</li>
                                        <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Excellent problem solving and analytical skills</li>
                                    </ul>

                                    <div className="mt-4">
                                        <Link to="#" className="btn btn-outline-primary">Need Help? <i className="mdi mdi-send"></i></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageJobDetail;
