import { Button, Card, Container } from "react-bootstrap";
import GuesswhoThumbnail from "../assets/guess-who-logo.png";
import FishQuestThumbnail from "../assets/FishQuest-Logo-w-text.png";
import SheinThumbnail from "../assets/shein-final-logo.png";
export default function Projects() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        marginTop: "200px",
        padding: "10rem",
        paddingTop: "15rem",
        borderRadius: "3rem",
      }}
    >
      <div id="projects" className="card-container">
        <h1
          style={{
            borderBottom: "2px solid #a882ff",
          }}
        >
          <span className="gradientSpan">Projects</span>
        </h1>
        <Container className="d-flex flex-row justify-content-center align-items-center gap-5">
          <Card
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              width: "30rem",
              marginTop: "5rem",
              border: "2px solid #a882ff",
              background: "transparent",
            }}
          >
            <Card.Img
              style={{
                width: "200px",
                height: "200px",
                overflow: "hidden",
              }}
              variant="top"
              src={GuesswhoThumbnail}
            ></Card.Img>
            <Card.Body className="d-flex justify-content-center align-items-center flex-column">
              <h2>
                <span className="h2Span">Guess Who</span>
              </h2>
              <p className="cardText">
                This is a website I made based off the game Guess Who. I added
                my own twist to the game by allowing users to use their own
                images or choose from templates.
              </p>
              <button style={{ width: "10rem" }} className="flashyButton">
                View
              </button>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              width: "30rem",
              marginTop: "5rem",
              border: "2px solid #a882ff",
              background: "transparent",
            }}
          >
            <Card.Img
              style={{
                width: "200px",
                height: "200px",
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
                Currently this app is still in early stages of development. I am
                taking on the project alone, but I have made progress with the
                mockup and prototype.
              </p>
              <button style={{ width: "10rem" }} className="flashyButton">
                View
              </button>
            </Card.Body>
          </Card>
          <Card
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              width: "30rem",
              marginTop: "5rem",
              border: "2px solid #a882ff",
              background: "transparent",
            }}
          >
            <Card.Img
              style={{
                width: "200px",
                height: "200px",
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
                trust and simplicity by modernizing the layout and creating a
                more enjoyable shopping experience.
              </p>
              <button style={{ width: "10rem" }} className="flashyButton">
                View
              </button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </Container>
  );
}
