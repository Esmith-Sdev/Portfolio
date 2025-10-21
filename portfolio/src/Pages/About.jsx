import "../styles/About.css";
import { Container } from "react-bootstrap";
export default function About() {
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
      <div id="about" className="card-container">
        <h1
          style={{
            borderBottom: "2px solid #a882ff",
          }}
        >
          <span className="gradientSpan">About Me</span>
        </h1>
        <p>
          My name is Eddie Smith and I’m currently attending Ivy Tech Community
          College for Full Stack Web Development. I’m confident in creating
          clean, responsive websites using HTML and CSS, and I’m building strong
          skills in JavaScript, React, and Node.js as I advance in my studies.
        </p>
      </div>
    </Container>
  );
}
