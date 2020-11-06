
// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images
import kavabg from '../../../images/blog/kavabg.png';
import liquidity from '../../../images/blog/liquiditykava.png';
import ianresp from '../../../images/blog/ianresp.png';
import ianfinal from '../../../images/blog/ianfinal.png';
import brianresp from '../../../images/blog/brianresp.png';


// Client Images



class CosmosStakingBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required


            ],


            successMsg : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({successMsg : true});
    }

    componentDidMount() {
        document.body.classList = "";
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
                    <h2>TokenWeb Drops Support for Kava</h2>

                </PageBreadcrumb>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog position-relative overflow-hidden shadow rounded">

                                        <div className="content p-4">

                                            <p className=" mt-3">TokenWeb was a small and relatively early validator for the Kava Network. Months ago we ceased our Kava validator operations due to lack of interest. However, we planned to re-introduce it in the future as the protocol matured, and we have stayed active in the community being among the first users of all of their products and latest releases such as the Kava lending Platform and Hard Protocol (formerly harvest.io),</p>
                                            <h6>Today we are announcing that we will NOT BE offering Kava or any of its related offerings at any point in the future.</h6>
                                            <p className="">We have made this decision because our values here at TokenWeb do not align with those of Kava’s Founding Team. </p>

                                            <p className="">At TokenWeb we believe in open, permissionless, and transparent networks. This means that anyone can access, join, create and participate in the networks with no biases or censorship. The Kava platform by default is highly centralised. They must approve any application to be added to their network, much like a traditional app store. To this extent they have even been branded the “Apple store of Defi.”</p>

                                            <p className="">This means that the Kava Network is not permissionless and will be able to censor which apps are added to the platform. Even if a community governance model is adopted to approve new applications, a highly centralised and stringent code review must be conducted among other organisational measures which can only be efficiently executed by a centralised party. This grossly goes against our values of how a blockchain and cryptocurrency powered future should operate (We will save diving into the security aspect of not abstracting applications away from core network modules and the amount of risk this involves for another discussion).</p>

                                            <p className="">Then, HARD protocol was launched and this solidified our decision to distance ourselves from Kava.</p>

                                            <p className="">Hard Protocol is claimed to be governed by HARD, a native Kava chain token. It is issued in a similar fashion to other yield farming/liquidity mining models in the DeFi space where users receive tokens by participating in the platform. In this case it is supplying liquidity for BNB, KAVA, HARD, and USDX. </p>
                                            <p className="">Some quick background. Hard Protocol went live on Oct. 15th. Hard Tokens are earned by supplying liquidity in BNB, KAVA, HARD, and USDX. Hard Tokens have a vesting period of either 30 days or 1 year. If you choose 30 days your rewards are reduced by ~67%. The earliest vesting release date is Dec. 1. Therefore, there was no possibility to supply HARD because the token was unavailable due to vesting until December. </p>
                                            <p className="">The vesting schedule was under heavy opposition by the community but we supported it because it was designed to keep out speculators and promote actually using the token for governance (so we thought). </p>
                                            <p className="">Then on ~Nov 6th. Hard tokens became available on bitmax.io and could be withdrawn to supply on the hard platform and receive extremely high liquidity rewards valued at the time of writing this at over 1,500% APY. However, those who participated in the platform from Day 0 were still excluded from supplying their HARD because it was still subject to the vesting schedule.</p>
                                            <p className="mb-3">TokenWeb Founder, Ian, initially questioned how tokens are available because of the vesting schedule. The reply was:</p>

                                            <div className="position-relative">
                                                <img src={liquidity} className="img-fluid rounded-top" alt=""/>
                                            </div>
                                            <p className="mt-3">Now to most this could raise flags and start a debate, but to us it is completely understandable. Creating markets requires a level of liquidity. Just like the Filecoin debacle where the founder supposedly transferred large amounts of tokens to exchanges for market making - in our eyes that is necessary and completely fine.</p>
                                            <p className="">However, Ian’s stance is that price should have no place when it comes to a governance token. Governance tokens are designed to be issued to application/network participants based on their level of activity. This ensures that those who use/contribute to apps the most have the most say in them, which for the most part makes sense.</p>

                                              <p className="">Furthermore, by listing on exchanges, this enables people to purchase governance power via buying HARD on an exchange and supplying it to receive more HARD. As a governance token, this should not be the case. The people who actively use the platform should be the ones gaining more governance power. We acknowledge that it is inevitable that tokens are bought and sold on 3rd party exchanges and enable people to purchase voting power, but in this scenario this was actively facilitated by the Kava team. They even had tokens put aside for this. When Ian continued to raise the alarm about purchasing governance, the CEOs response had nothing to do with governance and he just spoke about market conditions, token price, and APYs - doesn’t sound  much like a governance token does it?</p>
                                              <p className="">You can read the exchange of messages in the screenshots below.</p>
                                              <div className="position-relative">
                                                  <img src={ianresp} className="img-fluid rounded-top mb-3" alt=""/>
                                              </div>
                                              <div className="position-relative">
                                                  <img src={brianresp} className="img-fluid rounded-top mt-3" alt=""/>
                                              </div>
                                              <p className="mt-3">The final message sent by Ian asks them to explain their previous statements that implied the distribution model of the token “labelled a governance token” was not designed for a fair governance, but rather for profits. As of the time of writing this article the team has not responded to this comment nor answered the question.</p>
                                              <div className="position-relative">
                                                  <img src={ianfinal} className="img-fluid rounded-top" alt=""/>
                                              </div>
                                              <p className="mt-3">Due to these events, TokenWeb will no longer offer or provide any support for Kava-related product or application. </p>
                                              <p className="text-muted">*Disclaimer: This article is purely an opinion piece. </p>



                                        </div>
                                    </div>

                                    {/* comments */}





                                </div>
                            </Col>

                        {/* sidebar */}


                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default CosmosStakingBlog;
