import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class BlogBox extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.blogs.map((blog, key) =>
                    <Col lg="4" md="6" className="mt-4 pt-2" key={key} name="blog">
                        <div className="blog position-relative overflow-hidden shadow rounded">
                            <Link to={blog.link}><div className="position-relative">
                              <img src={blog.image} className="img-fluid rounded-top" alt=""/>
                                <div className="overlay rounded-top bg-dark"></div>
                            </div></Link>
                            <div className="content p-4">
                                <h4><Link to={blog.link} className="title text-dark">{blog.title}</Link></h4>
                                <div className="post-meta mt-3">
                                    <Link to={blog.link} className="text-muted float-right readmore">Read More <i className="mdi mdi-chevron-right"></i></Link>
                                    <ul className="list-unstyled mb-0">

                                        <small className="text-dark user d-block"><i className="mdi mdi-account"></i> {blog.autor}</small>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default BlogBox;
