import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import "../styles/WelcomeHeader.css";
export default function WelcomeHeader() {
  return (
    <>
      <div
        id="welcome"
        className="headerContainer"
        style={{
          marginTop: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="headerText"
          style={{ textAlign: "center", padding: "1rem" }}
        >
          <span className="gradientSpan">Welcome To My Portfolio</span>
        </h1>
        <Nav.Link href="/Portfolio/#about">
          <button className="flashyButton">Learn more about me</button>
        </Nav.Link>
      </div>
    </>
  );
}
