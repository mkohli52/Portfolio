import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              My journey in programming started with curiosity and quickly turned into a passion for building scalable and efficient web solutions.
              <br />
              <br />I have hands-on experience with
              <i>
                <b className="purple"> JavaScript, TypeScript, PHP, Java, and Python. </b>
              </i>
              <br />
              <br />
              I love working on <i><b className="purple">web applications</b></i>, building robust backend systems, and optimizing databases for performance.
              <br />
              <br />
              My expertise includes crafting seamless digital experiences using
              <b className="purple"> Node.js</b> and
              <i>
                <b className="purple"> modern JavaScript frameworks</b>
              </i>,
              such as
              <i>
                <b className="purple"> React.js and Next.js.</b>
              </i>
              <br />
              <br />
              I also have experience deploying applications on <b className="purple">AWS</b> and integrating CI/CD pipelines to streamline development workflows.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mkohli52"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mkohli52/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
