// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container,Row, Col, FormGroup, Label } from 'reactstrap';
import classNames from 'classnames';

import StarRatings from 'react-star-ratings';

//Import components
import Banner from "./banner";


//Import Images
import full from "../../../images/job/bg2.png";

import Cosmos from "../../../images/job/cosmos.svg";
import EthereumGold from "../../../images/job/ethereum-gold.svg";
import Polkadot from "../../../images/job/polkadoticon.png";
import Kyber from "../../../images/job/kyber.png";
import TheGraph from "../../../images/job/thegraph.png";





class PageJob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required

            ],
            jobs : [
                { id : 1, image : full, title : "Cosmos", time : "Active", cmpImage : Cosmos, cmpName : "Cosmos", Annual  : "2 Year", reward : "8.74%", field : "Information strategy" },

                { id : 2, image : full, title : "Ethereum", time : "Coming Soon", cmpImage : EthereumGold, cmpName : "Ethereum", reward : "7.15%", workingHrs : "6hr", field : "Information strategy" },
                { id : 3, image : full, title : "Polkadot", time : "Coming Soon", cmpImage : Polkadot, cmpName : "Polkadot", reward : "12%", workingHrs : "6hr", field : "Information strategy" },

                    { id : 4, image : full, title : "KyberDAO", time : "Coming Soon", cmpImage : Kyber, cmpName : "KyberDAO", reward : "4%", workingHrs : "6hr", field : "Information strategy" },
                      { id : 5, image : full, title : "The Graph", time : "Coming Soon", cmpImage : TheGraph, cmpName : "The Graph", reward : "TBD", workingHrs : "6hr", field : "Information strategy" },

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
        if (top > 40) {
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
          <section className="section-default">
            <Container>
              <div className="block-network">
                <h1 className="block-network-title">Choose Network</h1>
                  <Row>
                    {this.state.jobs.map((job, key) =>
                      <Col key={key} lg="4" md="6" xs="12" className="block-network-container">
                        <Link to={job.time === "Active" && ("/" + job.cmpName + "-staking")}>
                          <div className={classNames("block-network-box", job.time === "Active" ? "mod-active" : "mod-disabled")}>
                              <div className="block-network-img-holder">
                                <img src={job.cmpImage} className="block-network-img" alt=""/>
                              </div>
                              <h5 className="block-network-box-title">{job.cmpName}</h5>
                              <p className="block-network-box-text">Annual Reward ~ {job.reward}</p>
                              {job.time === "Active" ? (
                                <a className="block-network-status mod-active">Stake Now</a>
                              ) : (
                                <span className="block-network-status">Coming Soon</span> 
                              )}
                            </div>
                          </Link>
                        </Col>
                      )}
                  </Row>
              <Banner />
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageJob;
