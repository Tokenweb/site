import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Input, Label } from 'reactstrap';



class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
        grid1 : [
            { title : "Stake", link : "/page-aboutus" },
            { title : "Buy Crypto (Coming Soon)", link : "/page-team" },
            { title : "Investment Funds", link : "/page-services" },



        ],
        grid2 : [
            { title : "Blog", link : "/page-terms" },
            { title : "Tutorial", link : "/page-privacy" },
            { title : "Documentation", link : "/documentation" },



        ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <footer className={this.props.isLight ? "footer bg-light" : "footer"}>
            <Container>
                <Row>


                    <Col lg="4" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Crypto</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid1.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="4" md="4" xs="12" className="mt-4 mt-sm-0 pt-2 pt-sm-0" name="footercolumn">
                        <h4 className={this.props.isLight ? "text-dark footer-head" : "text-light footer-head"}>Learning Center</h4>
                        <ul className="list-unstyled footer-list mt-4">
                            {
                                this.state.grid2.map((grid, key) =>
                                <li key={key}><Link to={grid.link} className={this.props.isLight ? "text-muted" : "text-foot"}><i className="mdi mdi-chevron-right mr-1"></i> {grid.title}</Link></li>
                                )
                            }
                        </ul>
                    </Col>

                    <Col lg="4" xs="12" className="mb-0 mb-md-4 pb-0 pb-md-2" name="footercolumn">
                        <Link className={this.props.isLight ? "logo-footer text-dark" : "logo-footer"} to="#">TokenWeb</Link>
                        <p className={ this.props.isLight ? "mt-4 text-muted" : "mt-4"}>Our mission is to make complex crypto products simple to understand and available for everyone.</p>
                        <Row>

                            <Col lg="6">
                                <Input type="submit" id="submitsubscribe" name="send" className="btn btn-primary rounded w-100" value="Stake"/>
                            </Col>
                        </Row>
                    </Col>


                </Row>
            </Container>
        </footer>
        <footer className="footer footer-bar">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col sm="6">
                        <div className="text-sm-left">
                            <p className="mb-0">© 2020 TokenWeb</p>
                        </div>
                    </Col>


                </Row>
            </Container>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;