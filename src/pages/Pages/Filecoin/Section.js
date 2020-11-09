import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Images
import health from "../../../images/insurance/health.svg";
import termLife from "../../../images/insurance/term-life.svg";
import familyHealth from "../../../images/insurance/family-health.svg";
import investment from "../../../images/insurance/investment.svg";
import car from "../../../images/insurance/car.svg";
import bike from "../../../images/insurance/bike.svg";

import bg from "../../../images/insurance/bg.png";

class Section extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories : [
                { img : health, title : "Health Insurance", link : "#" },
                { img : termLife, title : "Term Life Insurance", link : "#" },
                { img : familyHealth, title : "Family Health Insurance", link : "#" },
                { img : investment, title : "Investment Plans", link : "#" },
                { img : car, title : "4 Wheeler Insurance", link : "#" },
                { img : bike, title : "2 Wheeler Insurance", link : "#" },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
        <section className="bg-half-170  d-table w-100" style={{ background: `url(${bg}) center center` }}>
            <Container>
                <Row className="mt-5 justify-content-center">
                    <Col lg={12}>
                        <div className="title-heading text-center">
                            <h1 className="heading title-dark text-black mb-3">Mine Filecoin</h1>
                            <h4 className="mx-auto text-black">TokenWeb works with a datacenter in central Europe and has the capacity to scale up to hundreds of petabytes as quickly as required.</h4>


                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      
            </React.Fragment>
        );
    }
}

export default Section;
