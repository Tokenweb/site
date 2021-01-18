// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

//Import components

import BlogBox from "../../../components/Shared/blog-box";

// import images
import cosmosbg from '../../../images/blog/cosmosbg.png';
import kavabg from '../../../images/blog/kavabg.png';
import graphbg from '../../../images/blog/thegraph.png';
import ethbg from '../../../images/blog/eth2.png';
import filecoin from "../../../images/blog/filecoin.png";
import eth from "../../../images/blog/ethereum.png";



class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Home", link : "/index" },
                { id : 2, name : "Pages", link : "#" },
                { id : 3, name : "Blog", link : "#" },
                { id : 4, name : "Blog Grid" },
            ],
            blogs : [
                { id : 1, image : cosmosbg, title : "Introduction to Staking Cosmos", autor : "Margarethe", link : "/introduction-to-staking-cosmos" },
                { id : 2, image : kavabg, title : "TokenWeb Drops Support for Kava", link : "/tokenweb-drops-support-for-kava"  },
              { id : 3, image : graphbg, title : "The Graph Enables the Decentralised Micro Economy", link : "/thegraph-enables-microeconomy"  },
                 { id : 4, image : ethbg, title : "DeFi's Impact on Ethereum 2.0 Security", link : "/defi-yields-ethereum-security" },
                { id : 5, image : filecoin, title : "Read Before Mining Filecoin", link : "/filecoin-blog"  },
                { id : 6, image : eth, title : "A Simple Explanation of Ethereum", link : "/ethereum-explained"  },
                // { id : 7, image : blog07, title : "Design your apps in your own way", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
                // { id : 8, image : blog08, title : "How apps is changing the IT world", like : "33", comment : "08", autor : "Calvin Carlo", date : "13th August, 2019" },
            ]
        }
    }

    componentDidMount() {
        document.body.classList = "";
        window.addEventListener("scroll", this.scrollNavigation, true);

        var blogs = document.getElementsByName("blog");
        for(var i=0; i<blogs.length; i++){
            blogs[i].classList.remove("mt-4");
            blogs[i].classList.add("mb-4");
        }
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


                <section className="section-default">
                    <Container>
                        <Row>
                            {/* blog box */}
                            <BlogBox blogs={this.state.blogs} />
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Blog;
