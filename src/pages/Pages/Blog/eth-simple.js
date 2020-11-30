// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Alert, Form, FormGroup, Label, Button, Input } from 'reactstrap';

//Import components
import PageBreadcrumb from "../../../components/Shared/page-breadcrumb";


// import images
import eth from '../../../images/blog/ethereum.png';


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
                    <h2>A Simple Explanation of Ethereum</h2>

                </PageBreadcrumb>

                <section className="section">
                    <Container>
                        <Row>
                            <Col lg="12" md="12">
                                <div className="mr-lg-3">
                                    <div className="blog position-relative overflow-hidden shadow rounded">
                                        <div className="position-relative">
                                            <img src={eth} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                        <div className="content p-4">

                                          <h6>Ethereum is a new way to run applications, specifically the back-end and business logic. </h6>
                                          <h6>How do Web Applications currently operate?</h6>
                                            <p>When you have an application you have a front-end and back-end. The front-end is what users see and interact with when they go to a website. The back-end is where data is stored, application information, and all the logic. Any outside data or application that needs to communicate with it uses an API.</p>
                                            <p>With traditional applications you have all of this sitting on a server, most commonly through a large company cloud-provider such as AWS, Microsoft Azure, or Google Cloud.</p>
                                            <p>There are many problems with this (centralised) configuration. If the server goes down, no one can access anything. If it crashes and isn’t backed up properly, information can be lost.
                                            It can also be hacked and tampered with, i.e data and business logic. Finally, an important note is that companies pay the server costs, so they must find a way to monetise their applications to cover these costs either by charging a fee to users, selling ad space, or by finding a way to monetise data.</p>
                                            <h6>Ethereum changes the game.</h6>
                                            <p>With Ethereum it is slightly different. The business logic and execution gets deployed to ethereum and the front-end is usually deployed on a server. APIs are moving towards being decentralised (or aggregated from multiple sources) because this is how Ethereum apps in the financial sector can be attacked.</p>
                                            <p>Side note: Some front-ends use IPFS. IPFS is not some magical decentralised hosting solution. It is a tool to make data on your machine accessible to others on a website such as static images. For this to work at scale, people must pin the data and keep a copy, why they would do this? We are not quite sure. Something better will come along. </p>
                                            <h6>There are some very big differences with Ethereum</h6>
                                            <p>1. It is not a single server. It is millions of computers around the world which your logic is deployed to.</p>
                                            <p>2. It has 0 chance of downtime. As long as you have an internet connection you can always access it.</p>
                                            <p>3. The Front-end can still go down due to the server, but you can interact directly with the smart contracts on a plethora of sites like etherscan, etc. or running your own node on CLI. </p>
                                            <p>4. Nothing on it can be tampered with. While we refrain from saying it is hack-proof, it has yet to ever experience a single hack. </p>
                                            <p>5. Users pay for usage costs in form of transaction fees. While some view this model as a large barrier to entry from a UX (user experience) perspective, we believe that it creats a fundamentally more correct ecnomic model where users are not at risk at having their personal information sold without their consent, among many other benefits.</p>

                                            <h6>Limitations of Ethereum</h6>
                                            <p>Like anything, all of these benefits do not come without a cost or other form of trade-off. First, many companies cannot use Ethereum because it is fully public. That means if business logic is proprietary it should not use Ethereum (this will be solved in the future). Second, as mentioned above, users pay for costs which creates some friction but the end game is better. Lastly, is accountability and liability. If AWS or another cloud provider crashes or otherwise costs your entity money, you can pursue a case in the legal system to attempt to recoup this. Since Ethereum is a public good, it cannot be sued (effectively).</p>
                                            <h6>Final thoughts on the future of Ethereum</h6>
                                            <p>For Ethereum to become mainstream it needs to solve for scalability and privacy. So it can be used by millions of people in real-time and for privacy for business logic and on the user side. This is a multi-year plan to achieve this but we believe it will definitely happen. First scaling will be solved with eth2 then privacy will be solved.</p>
                                            <h6 className="text-muted">To stay up to date with the Ethereum Ecosystem, Follow us on Twitter. <a href="https://twitter.com/tokenweb_io" target="_blank">@tokenweb_io</a></h6>





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
