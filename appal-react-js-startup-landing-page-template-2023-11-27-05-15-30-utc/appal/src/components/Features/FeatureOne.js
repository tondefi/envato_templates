import React, { Fragment } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import featureDataOne from "../../data/feature/feature-one.json";
import featureDataTwo from "../../data/feature/feature-two.json";
const [{ paragraph1, paragraph2, subTitle, title, span }] = featureDataOne;
const featureThree = ({ sectionSpace }) => {
  return (
    <Fragment>
      <section
        id="features-section"
        className={`features-section ${sectionSpace} clearfix`}
      >
        <Container>
          <div className="feature-item">
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="5" md="5">
                <div className="feature-image-1">
                  <span className="circle-image">
                    <img
                      src="assets/images/features/animation/1-img-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="phone-image"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <img
                      src="assets/images/features/animation/1-img-2.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-image-1"
                    data-aos="fade-left"
                    data-aos-delay="400"
                  >
                    <img
                      src="assets/images/features/animation/1-img-3.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-image-2"
                    data-aos="fade-left"
                    data-aos-delay="600"
                  >
                    <img
                      src="assets/images/features/animation/1-img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                </div>
              </Col>

              <Col lg="6" md="8">
                <div className="feature-content">
                  <div className="section-title mb-30">
                    <span className="sub-title mb-15">{subTitle}</span>
                    <h2 className="title-text mb-0">
                      {title}
                      <span>{span}</span>
                    </h2>
                  </div>

                  <p className="mb-30">{paragraph1}</p>
                  <p className="mb-60">{paragraph2}</p>

                  <div className="btns-group ul-li clearfix">
                    <ul className="clearfix">
                      <li>
                        <Link
                          to="/features-app-landing-creative"
                          className="custom-btn"
                        >
                          See All Features
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/features-saas-landing-creative"
                          className="custom-btn-underline"
                        >
                          See All Features
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className="feature-item">
            <Row className="justify-content-lg-between justify-content-md-center">
              <Col lg="6" md="8">
                <div className="feature-content">
                  {featureDataTwo.map((featureDataTwo, key) => {
                    return (
                      <div key={key} className="section-title mb-30">
                        <span className="sub-title mb-15">
                          {featureDataTwo.subTitle}
                        </span>
                        <h2 className="title-text mb-0">
                          {featureDataTwo.title}
                          <span>{featureDataTwo.span}</span>
                        </h2>
                      </div>
                    );
                  })}

                  {featureDataTwo.map((featureDataTwo, key) => {
                    return (
                      <p key={key} className="mb-30">
                        {featureDataTwo.paragraph1}
                      </p>
                    );
                  })}

                  <div className="info-list ul-li-block mb-45 clearfix">
                    <ul className="clearfix">
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer of the truth, of human happiness. NoM one
                          rejects.
                        </span>
                      </li>
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer.
                        </span>
                      </li>
                      <li>
                        <small className="icon">
                          <i className="flaticon-checked"></i>
                        </small>
                        <span className="info-text">
                          the and expound the actual teachings of the great
                          explorer of the truth, of human happiness. NoM one
                          rejects.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <Link to="/pricing-page" className="custom-btn-underline m-0">
                    Start 30 Days Free Trail
                  </Link>
                </div>
              </Col>

              <Col lg="5" md="5">
                <div className="feature-image-1">
                  <span className="circle-image">
                    <img
                      src="assets/images/features/animation/1-img-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="phone-image"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <img
                      src="assets/images/features/animation/2-img-1.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-image-1"
                    data-aos="fade-right"
                    data-aos-delay="400"
                  >
                    <img
                      src="assets/images/features/animation/2-img-2.png"
                      alt="image_not_found"
                    />
                  </span>
                  <span
                    className="comment-image-2"
                    data-aos="fade-right"
                    data-aos-delay="600"
                  >
                    <img
                      src="assets/images/features/animation/1-img-4.png"
                      alt="image_not_found"
                    />
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default featureThree;
