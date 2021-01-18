import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Import images
import homeShape from '../../../images/saas/home-shape.png';

function SectionBlock({
    title,
    description,
    imgUrl,
    imgAlt,
    isImgLeft,
    btnText,
    btnUrl,
    isBackground,
    toPageLink,
    isHyperLinkTextContribution
}) {
    return (
        <section className="section-default" style={isBackground && { background: `url(${homeShape})`, backgroundPosition : "center center", height : "auto" }} id="home">
            <Container>
                <Row className={classNames("row-section", isImgLeft && "mod-reverse")}>
                    <Col lg={5} md={12}>
                        <img src={imgUrl} alt={imgAlt}/>
                    </Col>
                    <Col lg={7} md={12}>
                        {title && <h1 className="block-section-title">{title}</h1>}
                        {description && <p className="block-section-desc">
                            {description}
                            {isHyperLinkTextContribution && (
                                <p className="block-section-desc-hyper-text">
                                    To learn more check<br /> out the <Link className="block-section-desc-hyper" to="/staking-portal">TokenWeb Staking Portal</Link>
                                </p>
                            )}
                        </p>}
                        {btnText && !toPageLink &&(
                            <a href={btnUrl} target="_blank" className="btn btn-lg btn-default">{btnText}</a>
                        )}
                        {btnText && toPageLink &&(
                            <Link to={toPageLink} className="btn btn-lg btn-default">{btnText}</Link>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default SectionBlock;
