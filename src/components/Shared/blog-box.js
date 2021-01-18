import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>
                    <Col lg="4" md="6" className="mt-4 pt-2 blog-box" key={key} name="blog">
                        <Link to={blog.link}>
                            <div className="blog position-relative overflow-hidden">
                                <div className="position-relative blog-img-holder">
                                    <img src={blog.image} className="img-fluid rounded-top" alt=""/>
                                </div>
                                <div className="content p-4">
                                    <h4 className="title text-dark">{blog.title}</h4>
                                    <div className="post-meta mt-3">
                                        <div className="text-muted float-right readmore">
                                            Read More <i className="mdi mdi-chevron-right"></i>
                                        </div>
                                        <ul className="list-unstyled mb-0">
                                            <small className="text-dark user d-block"><i className="mdi mdi-account"></i>{blog.autor ? blog.autor : 'Unknown'}</small>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default BlogBox;
