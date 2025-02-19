import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./elements/Navigation";
import { Container, Row, Col } from "reactstrap";

const HeaderFluid = ({
  activeClass,
  btnType,
  whitekContent,
  logoWhite,
  handleSidebar,
}) => {
  const [scroll, setScroll] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(false);

  useEffect(() => {
    const Header = document.getElementById("header-section");
    setHeaderHeight(Header.offsetHeight);
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <header
      id="header-section"
      className={`header-section ${
        whitekContent ? whitekContent : "black-content"
      } sticky-header clearfix  ${
        scroll > headerHeight ? "stuck" : "not-stuck"
      }`}
    >
      <Container fluid>
        <Row className="align-items-center">
          {/* brand-logo - satrt */}
          <Col lg="2" sm="6">
            <div className="brand-logo float-left">
              <Link to="/" className="brand-link">
                <img
                  src={logoWhite ? logoWhite : "assets/images/logo/logo-2.png"}
                  alt="logo_not_found"
                />
              </Link>
            </div>
          </Col>
          {/* brand-logo - end */}

          <Col lg="7">
            <Navigation activeClass={activeClass} />
          </Col>

          {/* btns-group - start */}
          <Col lg="3" sm="6">
            <div className="btns-group ul-li-right clearfix">
              <ul className="clearfix">
                <li>
                  <Link to="/contact-us" className={btnType}>
                    Sign Up Free
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSidebar}
                    type="button"
                    id="sidebar-collapse"
                    className="mobile-menu-btn"
                  >
                    <i className="flaticon-right-alignment"></i>
                  </button>
                </li>
              </ul>
            </div>
          </Col>
          {/* btns-group - end */}
        </Row>
      </Container>
    </header>
  );
};

export default HeaderFluid;
