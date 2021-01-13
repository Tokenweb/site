// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody, Collapse} from 'reactstrap';

//Import components

class PageTerms extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Utility", link : "#" },
                { id : 4, name : "Terms of Services" },
            ],
            t1 : true,
            t2 : false,
            t3 : false,
            t4 : false,
            t5 : false,
            t6 : false,
            t7 : false

        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

     // Make sure to remove the DOM listener when the component is unmounted.
     componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
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


                <section className="section">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={9}>
                                <div className="p-4 shadow border rounded">




                                    <h5>Frequently Asked Questions</h5>
                                    <div className="faq-content mt-4">
                                        <div className="accordion" id="accordionExample">

                                        <Card className="border rounded shadow mb-2">
                                            <Link to="#" className={ this.state.t1 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t1: !this.state.t1, })}>
                                                <div className="card-header bg-light p-3" id="headingOne">
                                                    <h4 className="title mb-0 faq-question"> What is staking?</h4>
                                                </div>
                                            </Link>
                                            <Collapse isOpen={this.state.t1}>
                                                <CardBody>
                                                    <p className="text-muted mb-0 faq-ans">Staking is a way to earn passive income with your tokens. A simple way of imagining it: You are putting the weight of your tokens onto a validator`s scale, who in turn rewards you. The more weight a validator has, the more calculations he can validate, resulting in higher rewards for him and more voting rights.  </p>
                                                </CardBody>
                                            </Collapse>
                                        </Card>

                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t2 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t2: !this.state.t2,t1: false  })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question"> How is staking taxed? </h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t2}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">It depends on your tax jurisdiction. In general it is usually viewed as income in the eyes of tax authorities. When it triggers a taxable even however can differ between location because some will tax the value of the crypto when it was rewarded to you, others may only tax when you convert the crypto to cash. It is hghly recommended to get a local tax specialist to file your returns.</p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>

                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t3 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t3: !this.state.t3,t1: false,t2: false  })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question"> Do you have control of my crypto when I stake with you?</h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t3}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">No, the validator only uses the “weight” of your tokens, never the token itself. The tokens always remain yours, the validator just gets to use them for validations (blockchain calculations) and votes (on polls of the project). </p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>


                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t4 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t4: !this.state.t4,t1: false,t2: false,t3: false  })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question"> Can I withdraw my staked coins at any time?  </h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t4}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">Yes anytime, however some networks have a minimum lock-up period, which means it could be up to a certain amount of days before the coins are back in your wallet.</p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>

                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t5 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t5: !this.state.t5,t1: false,t3: false,t2: false,t4: false  })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question"> What is unbonding? </h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t5}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">The process of unstaking your tokens is commonly referred to as an unbonding period. Where you are unbonding your tokens from a validator. This length of this process varies by projects. For example the unbounding period for Cosmos is 21 days. During this time it is important to note that you are not receiving staking rewards.</p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>

                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t6 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t6: !this.state.t6, t1:false, t2:false, t3:false, t4:false, t5: false })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question">  Why do I need a hardware wallet? </h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t6}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">When you store your crypto on an exchange, there is a risk that you may lose your crypto if the exchange is hacked or becomes unoperational. When you have your crypto stored on your own hardware wallet, you are in full control of your tokens and that is how crypto was designed to be managed.</p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>

                                            <Card className="border rounded shadow mb-2">
                                                <Link to="#" className={ this.state.t7 ? "faq position-relative text-primary" : "faq position-relative text-dark" } onClick={() => this.setState({ t7: !this.state.t7,t1: false,t3: false,t2: false,t5: false,t4: false, t6: false  })}>
                                                    <div className="card-header bg-light p-3" id="headingOne">
                                                        <h4 className="title mb-0 faq-question"> Can I stake any cryptocurrency?</h4>
                                                    </div>
                                                </Link>
                                                <Collapse isOpen={this.state.t7}>
                                                    <CardBody>
                                                        <p className="text-muted mb-0 faq-ans">No, only certain blockchains are secured by Proof of Stake. These are the only cryptocurrencies you will be able to stake.</p>
                                                    </CardBody>
                                                </Collapse>
                                            </Card>
                                        </div>
                                    </div>


                                      <br />

                                    <h5>Common Terms</h5>

                                    <ul className="list-unstyled feature-list text-muted">
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Crypto/Cryptocurrency = A token or form of digital value stored on a Blockchain network.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Staking = the process of securing a Proof of Stake network with tokens.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Bonding = sending your token (weight) to a validator to stake on your behalf.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Proof of Stake = a consensus method to secure a blockchain by using token weights instead of mining power in Proof of Work.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Validator = An individual, company, or group that runs a Full Node and contributes to Proof of Stake Blockchains.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Node = A copy of all of the transactions of a Blockchain.</li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Token = A unit of value stored on a Blockchain Network. </li>
                                        <li><i className="mdi mdi-pan-right mdi-24px mr-2"></i>Blockchain = A distributed network that makes it easy to send money and complete transctions without relying on a centralised middle man.</li>

                                    </ul>


                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default PageTerms;
