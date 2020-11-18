// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images

import filecoin from '../../../images/blog/filecoin-logo.png';


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
                    <h2>Read Before Mining Filecoin</h2>

                </PageBreadcrumb>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                        <div className="position-relative">
                                            <img src={filecoin} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content p-4">

                                            <h6 className="mt-3">Background:</h6>
                                            <p>At TokenWeb we offer a variety of hosted Filecoin mining and related services due to demand from our clients.</p>
                                            <p>However, we believe it is our responsibility to clearly share some risks and potential long term unsustainable aspects of Filecoin which directly relates to mining risks so our clients can make informed decisions when allocating their capital.</p>
                                            <p>**We try our best to ensure information in our blogs is accurate. If anything is incorrect please contact us and we will review quickly.</p>
                                            <p>**Additionally, we want to clearly differentiate components that sometimes get encompassed in the Filecoin brand. For the sake of this article we are not referring to LibP2P or IPFS, purely Filecoin - its economics and usability. Some very cool technology has erupted from the project such as proof of space, but we will not do a deep dive on the quality of the innovations but rather focus on the usability of it.</p>
                                            <p>This will be a very high level article written so anyone interested in mining Filecoin can understand how it works, its benefits, limitations, and certain aspects we perceive as risks.</p>
                                            <p>The core aspects we will address are: Decentralisation, Usability, and Economics.</p>
                                            <h6>Decentralisation and Intro to Filecoin</h6>
                                            <p>To begin with we will touch on decentralisation and some background, which we are worried about with Filecoin in its current state due to the economic and hardware barriers to entry. The vision we have always heard of with Filecoin is a globally optimised storage network where anyone can monetise unused space on their devices. That is not feasible in current times due to the hardware requirements.</p>
                                            <p>To run a lotus node, you must meet the requirements of 8-core CPU and 32 GiB RAM. No common computers offer 32GiB RAM. To put in comparison a standard $2,500+ macbook Pro has 16GiB of ram.</p>
                                            <p>With a lotus node you can interact with Filecoin and create deals to store your data. Most likely this will be abstracted away by third parties who create interfaces for these functions so it is not a huge impact on the usability of Filecoin in our eyes; however, it does limit decentralisation significantly.</p>
                                            <p>Now to Mine Filecoin and sell unused storage space is where things get brought to a whole new level of complexity.</p>
                                            <p>8-core CPU = not an issue</p>
                                            <p>128 GiB of RAM are needed at the very least. This should be complemented with 256 GiB of swap on a very fast NVMe SSD storage medium. = absolutely ridiculous</p>
                                            <p>A powerful GPU is recommended as it can significantly speed up SNARK computations. = traditional storage servers do not use GPUs so even if someone has existing infrastructure they will need to invest heavily in GPUs which often will not even fit into the hardware layout of most dedicated storage servers without some creativity</p>
                                            <p> 1TiB NVMe-based disk space for memory swap = it’s a lot, but it’s fine.</p>
                                            <p>The problem lies in that virtually no one has remotely close to this capacity on their personal devices. Secondly, unless you are running a gaming or other highly specialised server, your server will not even meet these minimum requirements. Therefore, general purpose storage allocation is not feasible and it requires dedicated Filecoin mining servers to be created which in our eyes defeats its vision of a decentralised storage network where anyone can participate.</p>
                                            <p>We know that in the future personal devices will have this capacity but it will be many years. We wish Filecoin was built for today, so it could be used now because decentralised storage is a very useful technology if implemented properly.</p>
                                            <p>Due to these high requirements, current mining conditions appear to be highly centralised: https://filfox.info/en/ranks/power - with just a few operations running most of the highest storage miners. Our hope is that technology advances and lowers the barriers to entry so more people can participate and even out this distribution; however, we are many many years away from consumer technology reaching that point and are worried that a handful of mining operations will scale to such a large size by this point that it will not be profitable for any retail or other individual mining operation.</p>
                                            <h6>Economics</h6>
                                            <p>Now that we have covered some of the hardware requirements, we will dive into the collateral economics where FIL is used.</p>
                                            <p>Miners and those offering storage have to pledge an amount of FIL based on the amount of storage space they are offering.</p>
                                            <p>This makes sense and is a very cool implementation of a new form of proof of stake. By pledging collateral it provides the buyer a level of confidence to know that the seller has put up their own money which will be slashed (meaning they lose some) if they go offline, breach contract terms, terminate it early, or otherwise act maliciously. </p>
                                            <p>The problem with this is the high cost. It currently costs ~70FIL per 10TiB sector. </p>
                                            <p>This pledge is received back in the future at some point, but the volatility of FIL makes this much too risky for large scale operations. Sure if FIL increases in price you can make a fortune, but if it decreases significantly you can lose a fortune. Miners do not want to deal with this speculation.</p>
                                            <p>A trick is to either borrow FIL by putting up collateral in ETH or another form, but this relies on centralised services to broker the deals. The better method, but requires a decently high level of financial derivatives to do effectively on a large scale, is to use hedging strategies where you can lock in current prices. For example, if you purchase $100,000 worth of FIL to use as collateral. You can immediately open a short position for the same amount to lock in the price you paid. You will also usually have to pay a daily premium for these short positions, which are very high right now because most large scale miners are using these methods, so they can eat into your profit margin rapidly. </p>
                                            <p>You must also pay a daily fee for your sectors which are currently averaging about 0.5FIL per day. If you do not make that payment then your miner will not receive rewards. Making an adjusted collateral amount of 0.28FIL per 32GiB sector.</p>
                                            <p>Your rewards for that 10TiB sector currently average about 620 FIL per year gross. Giving a crude net (without factoring in hardware and operational costs) of ~367.5 FIL per year (620 - 70 - (0.5 * 365)) which is a sizable return. </p>
                                            <p>Our clients are very interested in achieving returns of this rate, but we wanted to clearly outline risks and requirements so everyone fully understands what they are getting into because there are many factors that can change these figures in a very short time period.</p>
                                            <h6>Usability</h6>
                                            <p>Now beyond mining rewards, users also profit by creating agreements with storage buyers to rent their space. What we are worried about is the long term sustainability of this revenue channel due to lack of usability of the Filecoin network.</p>
                                            <p>Currently we have identified some limitations that users should understand before participating in Filecoin mining and selling storage.</p>
                                            <p>Data is stored unencrypted with strangers. This will be a turn off for many people and removes any chance of sensitive or private data, or even personal pictures or information. We do not think that individuals will use the service for these reasons. The UX is also extremely difficult to use compared to highly streamlined and well known brands such as Google Drive, DropBox, and countless others. In addition, Filecoin cannot currently compete with the speed of other centralised platforms. IF Filecoin achieves mass adoption then in theory speed would be faster than centralised services; however it is the classic chick and egg conundrum - will mass adoption ever happen if speed is inferior to existing services.</p>
                                            <p>Another smaller (potential) issue is that there is no accountability. Sure the storage provider is penalised by having a portion of their FIL pledge amount slashed, but the end user receives no compensation if they suffer damages and has no one to hold accountable. This can be seen as both positive and negative depending on your viewpoints.</p>
                                            <p>Summary of Mining Risks:
                                            Dedicated hardware requirements (benefit is that hardware is re-usable for a plethora of other purposes, typically retains value decently well, and is not expected to have to be updated anytime soon as is true with ASIC miners).
                                            Asset collateral is required to mine and a daily maintenance rate is assessed. Both at a very high rate.
                                            20% of FIL rewards are available immediately. 80% vest for 6 months - which could create implications with covering operational costs.
                                            We have noticed a trend that as more miners are joining, rewards per TiB drop while collateral requirements for a 32 GiB sector are rising. This can make it significantly hard to grow operations and re-invest capital.
                                            </p>
                                            <h6>Final Notes</h6>
                                            <p>Debunking some claims: The claim that netflix could benefit from using Filecoin is not true (based on this first iteration of the Filecoin Protocol). 1) content needs to be secured. 2) cannot scale to handle this unless mass adoption is achieved 3) netflix security regulations and complexity of having to use a cryptocurrency to pay for services. 4) lack of control over infrastructure</p>
                                            <p>Now we are not saying that Filecoin is not usable at all. It has some fantastic use cases for
                                            Public websites and content such as image hosting websites, public data, static company websites and certain applications such as sensor proof content sources like distributed wikipedia powered by IPFS. Actually it is IPFS which is great for this but the issue with IPFS is speed, and Filecoin’s goal is an incentive layer to speed data retrieval up significantly. Time will tell how effective it is.</p>
                                            <p>We think decentralised storage is definitely something that will be common in the future and love the idea of people owning and controlling their data, and we respect teams like Filecoin who take on the monumentos challenge of pushing it forward. It is just an uphill battle due to many technological limitations present in today’s world, but as it matures, Filecoin may become the de-facto protocol for data storage and retrieval. It is important to know the risks that an efficient and user friendly decentralised storage solution that is mass adopted may never happen before investing in a Filecoin mining operation. </p>


                                            <h6 className="text-muted">Now that you have a more clear understanding of the scope of Filecoin Mining and associated risks and limitations, if you decide mining Filecoin is right for you, we are happy to chat and create the perfect solution to achieve your goals.</h6>
                                            <a href="mailto:hello@tokenweb.io" ><input type="submit" value="Email Us" className="btn btn-primary mt-4"/></a>




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
