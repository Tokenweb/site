// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";

//Import Images
import logo from "../../../images/job/kava.svg";

class Kava extends Component {

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
                    <p className="para-desc mx-auto text-muted">Kava is a cross-chain lending platform backed by a stable coin. What this means is that people who hold any major crypto coin such as Bitcoin, ATOM, ETH, BNB, etc. can use their crypto as collateral to secure loans in a stable coin, just by clicking a few buttons. It is similar to MakerDAO's permissionless credit but not limited to just Ethereum Coins. Kava is part of the Cosmos Ecosystem. </p>

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
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Once you receive your new Ledger Hardware Wallet, plug it into your computer and follow the set up instructions on the device.</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>It is extremely important to write down your seed phrase and place in a secure location. If your device is ever lost or broken, entering the seed phrase in a new wallet is the ONLY way to recover your tokens. </li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Next, On your computer download Ledger Live. This is the program you will use to manage and interact with your Hardware Wallet.</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Once installed and your Ledger Nano is connected it is time to Download the Cosmos App. Kava is part of the Cosmos Ecosystem, so you will be able to manage your KAVA tokens from the Cosmos App. If the App does not appear in the search, then go to settings -- selet "experimental features" -- activate developer mode. Then the Cosmos application will show up for you to install.</li>
                                    </ul>

                                    <h5 className="mt-4">Connecting to Web Wallet</h5>
                                    <p className="text-muted">If you are already familiar with using web wallets with your Ledger Wallet, please skip this step. Unfortunately, at the time of writing this guide Lunie.io does not yet support Kava; therefore, this guide will use the Cosmosstation wallet. </p>
                                    <ul className="list-unstyled">
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Now you are ready to send your ATOMs to your wallet. To do so go to https://wallet.cosmostation.io/ and connect to it with your Ledger Device.</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>From the CosmosStation Dashboard you should see your Cosmos wallet address and be able to copy it. Send your tokens to this address and they will now be stored on your Ledger Wallet.</li>
                                    </ul>

                                    <h5 className="mt-4">Staking your Tokens</h5>

                                    <ul className="list-unstyled">
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Once you have tokens in your available balance on CosmosStation, you are ready to begin staking!</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Go to Validators and type in tokenweb.io and choose "stake."</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Choose Max amount and then subtract 1 from that number. It is important to leave a small amount of ATOM in your wallet to pay for transaction fees. If you try to stake your max amount without subtracting 1 ATOM then you should see a warning message about this.</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Once you confirm the staking transaction on your Ledger you will see a message on CosmosStation that you have successfully staked your tokens!</li>
                                    </ul>

                                    <h5 className="mt-4">Receiving Rewards</h5>

                                    <ul className="list-unstyled">
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Rewards are credited to your account in real time every few seconds.</li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>Currently, there is no option to automatically re-stake your rewards. To receive your rewards and restake them you must choose the claim rewards button on CosmosStation and then you will see the tokens in your available balance. Now you can click on the TokenWeb Validator, choose stake, and re-stake these tokens to benefit from compounded rewards. </li>
<br />
                                    <li className="text-muted"><i className="mdi mdi-pan-right text-success mdi-18px mr-2"></i>It is important to note that even though you may see your account on CosmosStation, you will not be able to interact with it and stake, withdraw, claim rewards, etc. without your Ledger Device connected to your computer because every transaction must be confirmed on the device.</li>
                                    </ul>

                                    <div className="mt-4">
                                        <a href="https://t.me/tokenweb" target="_blank" className="btn btn-outline-primary">Need Help? <i className="mdi mdi-send"></i></a>
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
export default Kava;
