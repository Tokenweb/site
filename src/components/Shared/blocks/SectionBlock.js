import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';

// Import images
import homeShape from '../../../images/saas/home-shape.png';

function SectionBlock({ title, description, imgUrl, imgAlt, isImgLeft, btnText, btnUrl, isBackground }) {
    return (
        <section className="section-default" style={isBackground && { background: `url(${homeShape})`, backgroundPosition : "center center", height : "auto" }} id="home">
            <Container>
                <Row className={classNames("row-section", isImgLeft && "mod-reverse")}>
                    <Col lg={5} md={5}>
                        <img src={imgUrl} alt={imgAlt}/>
                    </Col>
                    <Col lg={7} md={7}>
                        {title && <h1 className="block-section-title">{title}</h1>}
                        {description && <p className="block-section-desc">{description}</p>}
                        {btnText && (
                            <a href={btnUrl} target="_blank" className="btn btn-lg btn-default">{btnText}</a>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionBlock;
