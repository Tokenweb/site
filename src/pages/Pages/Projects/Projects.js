import React, { Component } from "react";
import { Row, Container } from "reactstrap";

//Import Components
import ProjectsBox from "./ProjectsBox";

//Import Images
import deStakeImg from "../../../images/projects/project-img-1.png";
import fraktalImg from "../../../images/projects/project-img-2.png";


class Process extends Component {
  state = {
    processArray: [
      { title: "DeStake", icon: deStakeImg, desc: "Liquid, Incentivised Staking using derivatives.", link: "" },
      { title: "Fraktal Hub", icon: fraktalImg, desc: "Governance and Staking technology for Fraktal Network", link: "" },

    ],
  };
  render() {
    return (
      <div className="section-default">
        <Container className="">
          <div className="block-project">
            <h1 className="block-project-title">Projects</h1>
              <p className="block-project-desc">TokenWeb provides resources to help innovative ideas become reality. We build our own products and support passionate entrepreneurs. Everything we do is always 100% open-source and transparent.</p>
              <Row>
                <ProjectsBox data={this.state.processArray} />
              </Row>
              <a href="#" className="btn btn-lg btn-default">Submit Your Project</a>
            </div>
        </Container>
      </div>
    );
  }
}

export default Process;
