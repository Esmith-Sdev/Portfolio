import { Button, Card, Container, Row, Col } from "react-bootstrap";
import FishQuestThumbnail from "../assets/FishQuest-Logo-w-text.png";
import SheinThumbnail from "../assets/shein-final-logo.png";
import SunriseKitchenThumbnail from "../assets/sunrise-logo.png";
export default function Projects() {
  return (
    <section className="section">
      <div className="section-inner">
        <div id="projects" className="card-container">
          <h1
            className="headerText"
            style={{
              borderBottom: "2px solid #a882ff",
            }}
          >
            <span className="gradientSpan">Projects</span>
          </h1>
          <Container className="py-4">
            <Row className="g-4 justify-content-center">
              <Card
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  marginTop: "5rem",
                  border: "2px solid #a882ff",
                  background: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    overflow: "hidden",
                  }}
                  variant="top"
                  src={FishQuestThumbnail}
                ></Card.Img>
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <h2>
                    <span className="h2Span">FishQuest</span>
                  </h2>
                  <p className="cardText">
                    Currently this app is still in early stages of development.
                    I am taking on the project alone, but I have made progress
                    with the mockup and prototype.
                  </p>
                  <a
                    target="_blank"
                    href="https://www.figma.com/proto/Q1O2KU3hjixDBYz1PuyAda/FishQuest-Wireframe.mockup_--Copy-?t=PP10RiQX7fmWVD8Q-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
                    style={{ width: "10rem" }}
                    className="flashyButton w-50 w-md-auto"
                  >
                    View
                  </a>
                </Card.Body>
              </Card>
              <Card
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  marginTop: "5rem",
                  border: "2px solid #a882ff",
                  background: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    overflow: "hidden",
                  }}
                  variant="top"
                  src={SunriseKitchenThumbnail}
                ></Card.Img>
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <h2>
                    <span className="h2Span">Sunrise Kitchen</span>
                  </h2>
                  <p className="cardText">
                    This website was a school project created for a local
                    Haitian restaurant. It highlights authentic Caribbean
                    flavors through a modern, responsive design that captures
                    the restaurant’s warmth and culture.
                  </p>
                  <a
                    target="_blank"
                    href="https://esmith-sdev.github.io/sunriseKitchen/"
                    style={{ width: "10rem" }}
                    className="flashyButton w-50 w-md-auto"
                  >
                    View
                  </a>
                </Card.Body>
              </Card>
              <Card
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  marginTop: "5rem",
                  border: "2px solid #a882ff",
                  background: "transparent",
                }}
              >
                <Card.Img
                  style={{
                    overflow: "hidden",
                  }}
                  variant="top"
                  src={SheinThumbnail}
                ></Card.Img>
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <h2>
                    <span className="h2Span">Shein Rebrand</span>
                  </h2>
                  <p className="cardText">
                    The SHEIN redesign was a UX/UI project focused on improving
                    trust and simplicity by modernizing the layout and creating
                    a more enjoyable shopping experience.
                  </p>
                  <a
                    href="https://www.figma.com/proto/XCqkp0fJeMkDoG9ruQDHDU/Mockup?node-id=3688-6098&p=f&t=Amy4hbRpOO9OiY9x-1&scaling=min-zoom&content-scaling=fixed&page-id=3688%3A5982&starting-point-node-id=3688%3A6098"
                    target="_blank"
                    style={{ width: "10rem" }}
                    className="flashyButton w-50 w-md-auto"
                  >
                    View
                  </a>
                </Card.Body>
              </Card>

              <Card
                className="d-flex justify-content-center align-items-center flex-column"
                style={{
                  marginTop: "5rem",
                  border: "2px solid #a882ff",
                  background: "transparent",
                }}
              >
                <Card.Body className="d-flex justify-content-center align-items-center flex-column">
                  <h2 className="pt-5">
                    <span className="h2Span">CourseBuilder.io</span>
                  </h2>
                  <p className="cardText">
                    This is a React-based school project designed to practice
                    API integration and provide students and teachers with tools
                    to manage and organize their courses efficiently.
                  </p>
                  <a
                    target="_blank"
                    href="https://esmith-sdev.github.io/SDEV_255_Final_Project_Group_8"
                    className="flashyButton w-50 w-md-auto"
                  >
                    View
                  </a>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}
