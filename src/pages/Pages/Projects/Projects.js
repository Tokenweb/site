import React, { Component } from "react";
import { Row, Container } from "reactstrap";

//Import Components
import SectionTitle from "../../../components/Shared/section-title";
import ProcessBox from "./ProjectsBox";

//Import Images
import img1 from "../../../images/client/eth.png";
import img2 from "../../../images/client/eth.png";


class Process extends Component {
  state = {
    processArray: [
      { title: "DeStake", icon: img1, desc: "Liquid, Incentivised Staking using derivatives.", link: "" },
      { title: "Fraktal Hub", icon: img2, desc: "Governance and Staking technology for Fraktal Network", link: "" },

    ],
  };
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          {/* Section title */}
          <SectionTitle
            title="Projects"
            desc="TokenWeb provides resources to help innovative ideas become reality. We build our own products and support passionate entrepreneurs. Everything we do is always 100% open-source and transparent."
          />


          <Row>
            {/* Process Box */}
            <ProcessBox data={this.state.processArray} />
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Process;
