// React Basic and Bootstrap
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';

class Faq extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="section bg-light">
                    <Container>
                        <Row className="my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
                            <Col className="text-center">
                                <div className="section-title">
                                    <h4 className="title mb-4">Send us a message to learn more</h4>
                                  <p className="text-muted para-desc mx-auto">We make investing simple and accessible for everyone. Let us know your investment goals and we will be in touch very soon!</p>
                                  <a href="mailto:hello@tokenweb.io" ><input type="submit" value="Email Us" className="btn btn-primary mt-4"/></a>
                                  <p className="text-muted para-desc mx-auto disclaimer">**Disclaimer**</p>
                                  <p className="text-muted para-desc mx-auto disclaimercontent">We cannot accept funds from anyone who resides, has citizenship or does regular business dealings with any country or individual on the international sanctions list.
We may be required to complete KYC and AML procedures depending on the situation.
If you are an American Citizen, Resident, or are tax liable there you must meet the accredited investor criteria.
We reserve the right, without providing reason, to deny anyone from joining a TokenWeb fund.
</p>


                                </div>


{/*couldn't figure out how to put the mail icon below into the form above*/}
{/* <form to="mailto:info@info.com" className="btn btn-primary mt-4"><i className="mdi mdi-email mr-1"></i>Email us</form> */}

                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}
export default Faq;
