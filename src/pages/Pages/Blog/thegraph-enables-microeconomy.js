// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images
import cosmosbg from '../../../images/blog/cosmosbg.png';
import thegraph from '../../../images/blog/thegraph.png';


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
                    <title>The Graph Enables the Decentralised Micro Economy</title>
                    <meta name="description" content="Some description." />
                </MetaTags>
                {/* breadcrumb */}
                <PageBreadcrumb pathItems = {this.state.pathItems}>
                    <h2>The Graph Enables the Decentralised Micro Economy</h2>

                </PageBreadcrumb>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog-single position-relative">
                                        <div className="position-relative">
                                            <img src={thegraph} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content p-4">

                                            <h6 className="mt-3">The Graph is one of the newer Ethereum projects, we at TokenWeb are highly excited about.

                                          The Graph is a decentralised indexing protocol for querying networks like Ethereum and IPFS. </h6>
                                            <p>Essentially what this means at a high level is that it makes it simple and efficient to query data that otherwise could take extensive amounts of time. </p>
                                            <p>Blockchain networks such as Ethereum are known to be very difficult to index and retrieve data from due to its network architecture and smart contract structure. </p>
                                            <p>The Graph solves this by employing a concept called “subgraphs” which are curated groups of indexed blockchain data that can be easily queried with a GraphQL API.</p>
                                            <p>To create one of these anyone can publish what is called a “subgraph manifest” which provides a description of the data to be indexed, how to handle recording events, and mapping the data. They then publish this to IPFS and Indexers (individuals or companies who are running dedicated hardware and software) begin compiling the data. </p>
                                            <p>To ensure the integrity and quality of indexed data, Curators stake Graph Tokens on specific subgraphs to indicate the quality of it and in return are awarded a portion of the querying fee. They can also open challenges against subgraphs they believe should be removed or content updated.</p>
                                            <h6>As a quick summary. The Graph makes searching blockchain data easy. It’s a highly needed solution and most of the biggest companies in the Ethereum ecosystem use it. There are 3 key roles within The Graph. Subgraph creators, indexers, and curators. Each of these play a vital role in making the network what it is today and to continue growing it.</h6>
                                            <p>What we respect most about The Graph is the way they handled their token distribution. They encouraged people to get involved hands on early and rewarded them for doing so and actively contributing to the network. Their private funding and  public token sale adds up to less than $20 million, which is highly respectable but not greedy at all for the amount they would have been able to raise if they chose to go for maximum fundraising. A small fraction of tokens was allocated to the fundraising, while a majority remain to be distributed to network participants. In our view, this is a fantastic example, maybe even the best to exist to date, of how decentralised applications should function. They incentivise participation and not speculation. </p>
                                            <p>This plays directly into how we see the future unfolding where more and more people participate in the micro or gig economy instead of holding traditional 9-5 jobs. This new model of work is appealing because it provides more flexibility and freedom but also is fun and enables people to continuously learn and try new things. From a company perspective it is also economically advantageous because of many efficiencies created when people are only paid for the hours they are truly working and contributing. </p>
                                            <p>The Graph is one of the leading crypto companies when it comes to providing roles for the micro-economy. They have over 200 indexers and over 2,400 curators from 92 countries. This means that a start-up, just a few years old has in essence created jobs for over 2,500 people across the globe. That is truly mind-boggling at the power this can have in the future to make the world a better place. With so much hatred sometimes in today’s society it is a beautiful thing to see people from all walks of life working together and thriving together - the future looks very bright. </p>
                                            <p>Additionally, roles exist for people from every background. Creators of sub-graphs need to have a solid understanding of data and technology, indexers need to know some basic technology such as running a dedicated server, and curators just need to be motivated. </p>
                                            <p>This creates a very inclusive world where everyone can participate and we at TokenWeb are very excited to see how this progresses and are privileged to work with a company as great as The Graph. </p>
                                            <h6 className="text-muted">We will be launching an Indexing Server for The Graph once it reaches main-net. Anyone will be able to delegate their GRT and share rewards with us. Follow us on Twitter to stay up to date. <a href="https://twitter.com/tokenweb_io" target="_blank">@tokenweb_io</a></h6>
                                                <h6 className="text-muted">To learn more about the graph and how to get involved check out <a href="https://twitter.com/tokenweb_io" target="_blank">https://thegraph.com/blog/</a> </h6>




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
