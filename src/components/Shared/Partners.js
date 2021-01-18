import React, { Component } from 'react';
import { Row, div } from "reactstrap";

//Import Images
import cosmosImg from "../../images/client/cosmos-white.png";
import ethImg from "../../images/client/eth-white.png";
import polkadotImg from "../../images/client/polkadot-white.png"
import graphImg from "../../images/client/graph-white.png"
import kyberImg from "../../images/client/kyber-white.png"

class Partners extends Component {
    render() {
        return (
            <React.Fragment>
                        <div className="partners-box" id="partners">
                            <div id="partner1" className="text-center partner-logo mod-cosmos">
                              <img src={cosmosImg} className="partner-logo-img" alt="cosmos-logo"/>
                            </div>
                            <div id="partner2"  className="text-center partner-logo mod-eth">
                                <img src={ethImg} className="partner-logo-img" alt="ethereum-logo"/>
                            </div>
                            <div id="partner3"  className="text-center partner-logo mod-polkadot">
                                <img src={polkadotImg} className="partner-logo-img" alt="polkadot-logo"/>
                            </div>
                            <div id="partner4"  className="text-center partner-logo mod-cosmos">
                              <img src={graphImg} className="partner-logo-img" alt="graph-logo"/>
                            </div>
                            <div id="partner5"  className="text-center partner-logo mod-kyber">
                                <img src={kyberImg} className="partner-logo-img" alt="kyber-logo"/>
                            </div>
                        </div>

            </React.Fragment>
        );
    }
}

export default Partners;
