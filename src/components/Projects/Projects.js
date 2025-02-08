import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import maor from "../../Assets/Projects/maor.png";
import ownerdirect from "../../Assets/Projects/ownerdirect.png";
import buddypass from "../../Assets/Projects/buddypass.png";
import lovetogether from "../../Assets/Projects/lovetogether.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maor}
              isBlog={false}
              title="Maor"
              description="I worked on Maor, a React-based platform with a Laravel backend. I integrated Braintree as a payment gateway for smooth transactions and built subscription management tools to automate renewals and enhance user experience."
              demoLink="https://maor.org/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ownerdirect}
              isBlog={false}
              title="OwnerDirect"
              description="I contributed to OwnerDirect, a vacation rental platform that connects property owners with travelers. I worked with Core PHP, Eloquent, and MySQL, integrating the Escapia API for seamless data synchronization. I also implemented a booking cancellation system with Stripe for secure payment handling and integrated hotel booking APIs like Escapia and NextPax to enhance functionality."
              demoLink="https://ownerdirect.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddypass}
              isBlog={false}
              title="BuddyPass"
              description="I helped develop BuddyPass, a mobile app with a React Native frontend and a Node.js (TypeScript) backend. I designed and implemented a trip management system, allowing users to invite others, plan itineraries, and split bills. I also integrated Duffel’s flight booking API for seamless travel planning and booking, along with Agora for real-time chat and Firebase for notifications"
              demoLink="https://apps.apple.com/us/app/buddypass/id6449385742"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lovetogether}
              isBlog={false}
              title="Love Together"
              description="I worked on Love-Together, a Next.js and TypeScript-based platform with a Node.js backend. My contributions included building features for sending notifications and emails to users about their compatibility and integrating Firebase for authentication to enhance security."
              demoLink="https://www.love-together.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
