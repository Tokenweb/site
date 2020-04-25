// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Alert, Form, FormGroup, Input, Button, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Components
import SectionTitle from "../../components/Shared/section-title";
import SectionTitleLeft from "../../components/Shared/section-title-left";

// Import Images
import seoSVG from '../../images/illustrator/SEO_SVG.svg';
import mobileNotificationSVG from '../../images/illustrator/Mobile_notification_SVG.svg';

class HowItWorks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            features : [
                { title : "Storing crypto safely" },
                { title : "Which projects to choose" },
                { title : "Staking, Lending, and getting added value out of your holdings" },
  { title : "Daily oversight and monitoring of investment projects" },
            ],
            features1 : [
                { title : "Digital Marketing Solutions for Tomorrow" },
                { title : "Our Talented & Experienced Marketing Agency" },
                { title : "Create your own skin to match your brand" },
            ],
            Contactvisible : false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({Contactvisible : true});
    }

    componentDidMount(){
        var sectiontitles = document.getElementsByName("maintitle");
            sectiontitles[0].classList.remove('mb-4');
            sectiontitles[0].classList.remove('pb-2');
            sectiontitles[0].classList.add('mb-60');
    }

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light border-bottom">
                    <Container>
                        {/* render Section title */}
                        <SectionTitle title="" />

                        <Row className="align-items-center">
                            <Col lg="5" md="6">
                                <img src={seoSVG} alt="" />
                            </Col>

                            <Col lg="7" md="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                <SectionTitleLeft
                                    title = "Is a fund right for you?"
                                    desc = "Our funds are ideal for people and institutions who want to diversify into crypto but are unsure of:"
                                    features = {this.state.features}
                                    class = "mdi-18px h5 mr-2"
                                />

                                </div>
                            </Col>
                        </Row>
                    </Container>

                  
                </section>
            </React.Fragment>
        );
    }
}

export default HowItWorks;
