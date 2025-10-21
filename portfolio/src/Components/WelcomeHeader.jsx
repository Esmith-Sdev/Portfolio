import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../styles/WelcomeHeader.css";
export default function WelcomeHeader() {
  return (
    <>
      <Container style={{ padding: "10rem" }}>
        <div
          id="welcome"
          className="headerContainer"
          style={{
            paddingTop: "10rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ textAlign: "center", padding: "1rem" }}>
            <span className="gradientSpan">Welcome To My Portfolio</span>
          </h1>
          <Nav.Link href="#about">
            <button className="flashyButton">Learn more about me</button>
          </Nav.Link>
        </div>
      </Container>
    </>
  );
}
