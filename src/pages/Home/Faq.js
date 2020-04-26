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
                                  <p className="text-muted para-desc mx-auto">Fill in some text here. Either instructions as to what to include in the email or something about how we make investing simple for everyone. </p>
                                  <form method="post" action="mailto:info@tokenweb.io" > <input type="submit" value="Email Us" className="btn btn-primary mt-4"/></form>
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
