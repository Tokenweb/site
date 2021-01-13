import React from 'react';
import { Container } from 'reactstrap';

// Import images

function SupportBlock({ title, description, imgUrl, imgAlt, isImgLeft, btnText, btnUrl, isBackground }) {
    return (
        <section className="section-default" id="home">
            <Container>
                <div className="block-support">
                    <h1 className="block-support-title">We support all things WEB3</h1>
                    <p className="block-support-text">
                        TokenWeb is a blockchain venture studio focused on staking innovations, web3 tooling, and interoperability.
                    </p>
                    <a href="https://1m7jrkuztqm.typeform.com/to/VrLHpmwO" target="_blank" className="btn btn-lg btn-default">Apply For Funding</a>
                </div>
            </Container>
        </section>
    );
}

export default SupportBlock;
