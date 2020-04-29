// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, FormGroup, Label } from 'reactstrap';

import StarRatings from 'react-star-ratings';

//Import components
import Banner from "./banner";


//Import Images
import full from "../../../images/job/bg2.png";
import Kava from "../../../images/job/kava.svg";
import Cosmos from "../../../images/job/cosmos.svg";
import EthereumGold from "../../../images/job/ethereum-gold.svg";
import Polkadot from "../../../images/job/polkadoticon.png";
import Eslint from "../../../images/job/Eslint.svg";
import Gitlab from "../../../images/job/Gitlab.svg";
import Gradle from "../../../images/job/Gradle.svg";
import Mg from "../../../images/job/Mg.svg";
import Sketch from "../../../images/job/Sketch.svg";
import Twilio from "../../../images/job/Twilio.svg";
import Udemy from "../../../images/job/Udemy.svg";
import Webhooks from "../../../images/job/Webhooks.svg";




class PageJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required

            ],
            jobs : [
                { id : 1, image : full, title : "Cosmos", time : "Active", cmpImage : Cosmos, cmpName : "Cosmos", Annual  : "2 Year", reward : "8.74%", field : "Information strategy" },
                { id : 2, image : full, title : "Kava", time : "Active", cmpImage : Kava, cmpName : "Kava", Experience : "2 Year", reward : "8.08%", field : "Information strategy" },
                { id : 3, image : full, title : "Ethereum", time : "Coming Soon", cmpImage : EthereumGold, cmpName : "Ethereum", reward : "7.15%", workingHrs : "6hr", field : "Information strategy" },
                { id : 4, image : full, title : "Polkadot", time : "Coming Maybe?", cmpImage : Polkadot, cmpName : "Polkadot", reward : "6-14%", workingHrs : "6hr", field : "Information strategy" },


            ]
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

                <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
                    <Container>
                  

                        <Row>

                            {
                                this.state.jobs.map((job, key) =>
                                    <Col key={key} lg="4" md="6" xs="12" className="mt-4 pt-2">
                                        <div className="job-box rounded shadow position-relative overflow-hidden">
                                            <div className="border-bottom">
                                                <div className="position-relative">
                                                    <img src={full} className="img-fluid" alt=""/>
                                                    <div className="job-overlay bg-white"></div>
                                                </div>
                                                <h5 className="mb-0 position"><Link to="page-job-detail.html" className="text-dark">{job.title}</Link>
                                                    <ul className="list-unstyled h6 mb-0 text-warning">

                                                    </ul>
                                                </h5>
                                                <ul className="list-unstyled head mb-0">
                                                    {
                                                        job.time === "Active" ? <li className={"badge badge-success badge-pill"}>{job.time}</li>
                                                        : job.time === "Coming Soon" ? <li className={"badge badge-warning badge-pill"}>{job.time}</li> : <li className={"badge badge-warning badge-pill"}>{job.time}</li>
                                                    }
                                                </ul>
                                            </div>

                                            <div className="content position-relative p-4">
                                                <div className="firm-logo rounded-pill shadow bg-light text-center">
                                                    <img src={job.cmpImage} className="avatar avatar-md-sm" alt=""/>
                                                </div>
                                                <div className="company-detail text-center mt-3">
                                                    <h5 className="mb-0"><Link to={"/" + job.cmpName + "-staking"} className="text-dark company-name">{job.cmpName}</Link></h5>

                                                </div>
                                                <ul className="job-facts list-unstyled">

                                                    <li className="list-inline-item text-muted"><i className="mdi mdi-check text-success mr-1"></i> Annual Reward ~ {job.reward}</li>

                                                </ul>

                                                {
                                                    job.time === "Active" ? <Link to={"/" + job.cmpName + "-staking"} className="btn btn-outline-primary btn-block">Stake Now</Link>
                                                    : job.time === "Coming Soon" ? <Link to="#" className="btn btn-light btn-block disabled" >Coming Soon</Link> : <Link to="#" className="btn btn-light btn-block disabled" >Coming Maybe?</Link>
                                                }





                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    <Banner />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageJob;
