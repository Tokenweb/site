// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images
import cosmosbg from '../../../images/blog/cosmosbg.png';


// Client Images
import client1 from '../../../images/client/01.jpg';
import client2 from '../../../images/client/02.jpg';
import client3 from '../../../images/client/03.jpg';
import client4 from '../../../images/client/04.jpg';


class CosmosStakingBlog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "By Margarethe", link : "#" },
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
                <MetaTags>
                    <title>Introduction to Staking Cosmos</title>
                    <meta name="description" content="Learn everything you need to know to get started earning ATOMs by staking on Cosmos Network." />
                    <meta name="keywords" content="Staking, cosmos, blockchain, pos, proof of stake, crypto, stake, tokens, crypto, tokenweb, validator" />
                </MetaTags>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems = {this.state.pathItems}>
                    <h2>Introduction to Staking Cosmos</h2>
                </PageBreadcrumb>
                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog-single position-relative">
                                        <div className="position-relative">
                                            <img src={cosmosbg} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content pt-4 pb-4">
                                            <h6>Get Started with Staking</h6>
                                            <p className="text-muted mt-3">There are new ways to make money in 2020, combining new technology and investments, called staking. You can use this for yourself, too! The following article explains what is is, and how you can do it easily.</p>
                                            <h6>What is staking?</h6>
                                            <p className="text-muted">Staking is a way to earn passive income with your tokens. A simple way of imagining it: You are putting the weight of your tokens onto a validator`s scale, who in turn rewards you. The more weight a validator has, the more calculations he can validate, resulting in higher rewards for him and more voting rights. </p>
                                            <h6>Why should you stake?</h6>
                                            <p className="text-muted">Your tokens can go to work for you and work at a validator, which will bring you on average around 8-9% per year. It is all automatically done once you signed up for staking with a validator.</p>
                                            <h6>What are you giving the validator?</h6>
                                            <p className="text-muted">The “weight” of your tokens, never the token itself. The tokens always remain yours, the validator just gets to use them for validations (blockchain calculations) and votes (on polls of the project).</p>
                                            <h6>How can you stake CØSMOS?</h6>
                                            <p className="text-muted">CØSMOS is one of the earliest projects to launch with a functional staking infrastructure. The tokens of the CØSMOS project are called ATOMs. It is very easy to stake ATOMs, the CØSMOS tokens. Here is a step-for-step guide for you. </p>
                                            <h7 className="text-muted blogStep">Part 1: Setup of the Ledger</h7>
                                            <p className="text-muted">The initial setup requires a tiny bit of preparation, mainly getting the tokens and a storage device ready. It is a great investment though, as you can use the same storage device for other kind of tokens than CØSMOS. </p>
                                            <p className="text-muted">If you do not have a Ledger Nano you can buy one <a href="https://shop.ledger.com/products/ledger-nano-s" target="_blank">here</a>.</p>
                                            <p className="text-muted">Once you have your Ledger Hardware Wallet, you begin the setup by plugging the device into your computer, setting your custom PIN code and taking a note of the seed phrase, which you have to keep a secret.If you ever lose the USB-sized Ledger Nano, you can recover your tokens with another device and your seed phrase. So, never lose the seed phrase.</p>
                                            <p className="text-muted">Next, go to Ledger.com, download the Ledger Live desktop application and create an account.</p>
                                            <p className="text-muted">Then connect your Ledger Nano with Ledger Live. You will need your PIN code for this. Keep your Ledger Nano connected to your computer and follow the instructions on both the device and Ledger Live.</p>
                                            <p className="text-muted">Now you will install the CØSMOS application on your Ledger Wallet, using Ledger Live. The Ledger Nano device arrives empty. You need to install an app for every crypto currency. Since we want to stake CØSMOS, within Ledger Live search the App “CØSMOS” and click install.
                                            CØSMOS will now show up on the Ledger Nano. If it does not show up when searched, go to settings – select “experimental features” – activate the switch on “developer mode” and when you search again it will appear.</p>
                                            <p className="text-muted">Your Ledger is now ready for CØSMOS! Well done.</p>
                                              <h7 className="text-muted blogStep">Part 2: Using the Wallet</h7>
                                              <p className="text-muted">This next part may seem a little confusing, but don't worry this concept takes some time for everyone in crypto to get used to.</p>
                                              <p className="text-muted">Your Tokens are always stored on your Ledger Device. However, to stake them you must connect your Ledger to a Wallet (interface) such as Lunie.io so you can interact with your Ledger Wallet. Think of it like this. Your Ledger Wallet is your vault which holds your valuables and Lunie.io is how you interact with your vault, see what is in there, and move things around.</p>
                                              <p className="text-muted">Even when your Ledger Wallet is no longer plugged into your computer, you may still see your account information and tokens on the Lunie.io website. However, everything is happening on that little device of yours, the Ledger Nano. You can look at it through different programs and websites such as Lunie.io. The wallet and your tokens will be on that device, never on a website.</p>
                                              <p className="text-muted">So to get started Go to lunio.io and sign in using your Ledger Nano. This wallet address will be your CØSMOS address. …and fill it with CØSMOS tokens.</p>
                                              <p className="text-muted">Go to the exchange where you have your ATOMs and send them to your CØSMOS wallet. (withdraw). It takes some time, so get a cup of tea and take a break. Once the transaction is complete, your ATOMs will be on your Ledger Nano in your custom CØSMOS wallet. How cool is that!</p>
                                              <p className="text-muted">Now it's time to stake!</p>
                                              <p className="text-muted"></p>
                                              <p className="text-muted"></p>
                                              <h7 className="text-muted blogStep">Part 3: Staking and Rewards</h7>

                                            <p className="text-muted">First, you will select a validator which you want to stake with and transfer your tokens to stake with them. To do this go on Lunie.io and go to “validators”, select tokenweb.io, set “Max amount” and then subtract 1 ATOM. It is important to leave ~1 ATOM in your wallet to pay for transaction fees. If you try to stake your full balance you will also see a warning from Lunie to save a small amount for transaction fees.</p>
                                            <p className="text-muted">And after this click, you are officially staking! Congrats.</p>
                                            <p className="text-muted">What happens next? On Lunie.io, you can monitor your staking rewards. You get paid out in ATOMs in real time. Once you have reached a certain amount of staking rewards, you can withdraw the sum and either re-stake it (reinvest for also being part of the staking mass) or pull it onto your ledger, send it to an exchange and cash it out into a fiat currency of your choice (Euro, Swiss Francs, US Dollar, your local currency. This is of course based on the availability of exchanges in your country.)</p>

                                            <h6>That's it! If you need more help to get started staking please contact us on <a href="https://t.me/tokenweb" target="_blank">Telegram</a> or <a href="mailto:info@tokenwebio">via Email</a></h6>

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
