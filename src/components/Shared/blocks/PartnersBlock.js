import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import classNames from 'classnames';

import Partners from '../Partners';


function PartnersBlock({ title, description, imgUrl, imgAlt, isImgLeft, btnText, btnUrl, isBackground }) {
    return (
      <section className="section-default section-first bg-light">
        <Container>
          <div className="block-partners">
            <h1 className="block-partners-title">{title}</h1>
              <p className="block-partners-desc">{description}</p>
              <Partners/>
          </div>
        </Container>
    </section>
    );
}

export default PartnersBlock;
