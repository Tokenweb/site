// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images
import eth from '../../../images/blog/eth2.png';


// Client Images

class EthSecurity extends Component {

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
                    <title>DeFi's Impact on Ethereum 2.0 Security</title>
                    <meta name="description" content="Will DeFi yields have an impact on the security of Ethereum2.0?" />
                    <meta name="keywords" content="Staking, Ethereum, defi, eth2, eth, blockchain, pos, proof of stake, crypto, stake, tokens, crypto, tokenweb, validator" />
                </MetaTags>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems = {this.state.pathItems}>
                    <h2>DeFi's Impact on Ethereum 2.0 Security</h2>

                </PageBreadcrumb>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog-single position-relative">
                                        <div className="position-relative">
                                            <img src={eth} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content pt-4 pb-4">

                                            <p className="text-muted">*This article assumes you have a basic understanding of DeFi, yield farming, and proof of stake.</p>
                                            <p>A hotly debated topic across not just Ethereum but most proof of stake ecosystems is the impact of DeFi protocol yields i.e liquidity mining and other forms of yield farming, on the security of PoS (proof of stake) networks such as ETH2, Cosmos, and Polkadot.</p>
                                            <p>For example. If a site such as UniSwap or Compound offers an incentive APY of 7.5% per annum and ETH2 staking rewards are 5%, the debate arises if people will choose to stake their tokens to secure the Ethereum network when they could receive a higher return by lending or otherwise participating in a DeFi protocol. </p>
                                            <p>We take a different viewpoint than a majority of people and companies in this space when it comes to DeFi’s affect on PoS security. We think the impact in the short term may be noticeable to a small extent but it will have a near zero impact on the long term security of PoS systems such as ETH2.</p>
                                            <p>Why? Because under current economics, we do not believe that DeFi protocol tokens, used specifically for governance, have long-term value. The vast majority of DeFi tokens are classified as governance tokens. Many even openly state that the tokens are value-less, such as the creator of Yearn.Finance. </p>
                                            <p>Why are they valueless in our opinion? Well, having community governance for a project is a great step towards decentralisation; however, the economic model of these tokens is not sustainable and cannot be compared to common forms of equity (which represents ownership) in the traditional markets.</p>
                                            <p>When you  own a stock, you own a piece of the company and have voting rights in most scenarios. The same holds true more or less with DeFi protocols. The difference is that with stocks you are also entitled to revenue sharing, i.e dividends. This is where the value of stocks becomes apparent. </p>
                                            <p>DeFi tokens are, for the most part, different. There is very rarely a revenue sharing component and the only reason we believe that the majority of DeFi Governance Tokens currently have such immense value is that investors are speculating that at some point in the future some utility or revenue sharing model may be implemented beyond pure governance to create sustainable value for the token, but at this stage that is just a gamble. </p>
                                            <p>Additionally, the cost basis for these DeFi tokens do not make sense. The cost-basis is essentially zero when users receive them for participating in a platform. Now for people who truly want to be involved in the governance of the platform, having the token itself is enough and the value does not matter. But the majority of users do not in fact care about the governance and are using these tokens as a method to increase their annual yields on the platforms. Essentially yield farming is a form of rebate for users of financial exchanges, similar to how robin hood makes a profit while offering free trading by having a creative business model which takes advantage of rebate structures.</p>
                                            <p>Another aspect of the model we do not agree with is having to pay to vote. Imagine in the real world if you had to pay to vote in a national election? It just does not make sense. As long as the tokens have any value greater than 0, then it holds true that users are required to pay to vote (this also does not factor in network gas costs). </p>
                                            <p>On the opposite end of the spectrum, KyberDAO is the one example that we believe is sustainable where users are paid to participate in governance. The reason why KyberDAO is different and in our eyes sustainable is because of this model where users are incentivised to vote because of the network fee revenue sharing model based on voter participation. </p>
                                            <p>Yield farming is great for user acquisition and getting new people to test out the protocol with the hope that when rewards end, a large portion of users remain with the platform because they have grown accustomed to using it. However, we believe that most DeFi projects will have to adopt these models to remain sustainable in the long term. </p>
                                            <p>Once they adopt this model, then, like Kyber Network, the returns and value of the project will directly be determined by total network fees (which is normally calculated by a percentage of volume or overall transaction values in a given time period). </p>
                                            <p>When this happens then we believe everything will become inline and the differences between the baseline rate of return and a platform specific APY will be due the pricing in of risk, and to a smaller extent the future growth potential of the platform. </p>
                                            <p>Right now we only have excess returns in the DeFi space because price discovery has not been fully realised, and sadly many of the participants are not thinking ahead or value investing, but rather looking to make quick money in the short-term, which historically has nearly always proven to be highly unsustainable. </p>
                                            <p>The issues we foresee arising with ETH2 phase0 do not have to do with APY, but are based on what we will refer to as liquidity. </p>
                                            <p>When phase0 of ETH2 launches, it will be a one way street. Users who stake their ETH will be converting it to the ETH2 network token, but will not be able to transfer it back to ETH1. This creates a liquidity crisis. We believe that because of this initial stakers on the ETH2 network will be limited to die hard ETH supporters. Why would someone be otherwise incentivised to stake their token on ETH2 for a lesser reward than DeFi yields while also not being able to access their tokens for an indefinite period of time (most likely sometime in Spring 2021 at the earliest). The opportunity cost of that is much too high. </p>
                                            <p>While we envision that there are enough of these diehard supporters to properly secure the network to a decent enough level, to really secure to a level where it is comfortable to secure trillions of dollars on the ETH network, a majority of ETH holders must be incentivised to participate in governance. </p>
                                            <p>To counter this there is a decent amount of research being conducted on staking derivatives. I.e being able to borrow a synthetic token such as synthetic ETH against a staked balance to create liquidity. There are many pros and cons to this approach and we do not necessarily believe in any proposals we have seen to date, but we also are largely against debt-based derivatives in general so we acknowledge we have a bias towards this topic. Regardless, we will save the discussion for another blog post dedicated explicitly to this topic.</p>
                                            <p>So all in all, we do not believe that yield farming and other defi protocol monetisation schemes will have a long term impact on the security of ethereum 2.0. However, we are actively monitoring solutions which can provide liquidity to those staking ETH, because we believe that is the real problem which needs to be solved first.</p>


                                            <h6 className="text-muted">We will be launching a non-custodial validator service for ETH2.0 once phase 0 ships. Anyone will be able to delegate their ETH and earn ETH2.0. Follow us on Twitter to stay up to date. <a href="https://twitter.com/tokenweb_io" target="_blank">@tokenweb_io</a></h6>
                                        




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
export default EthSecurity;
