import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

class ProjectsBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((process, key) => (
          <Col lg="6" xs="12" key={key} className="project">
            <Link to={process.link}>
              <div className="project-box">
                <div className="project-box-img-holder">
                    <img
                      src={process.icon}
                      className="project-box-img"
                      alt="project pic"
                    />
                </div>
                <h5 className="project-box-title">{process.title}</h5>
                <p className="project-box-text">{process.desc}</p>
              </div>
            </Link>
          </Col>
        ))}
      </React.Fragment>
    );
  }
}

export default ProjectsBox;
