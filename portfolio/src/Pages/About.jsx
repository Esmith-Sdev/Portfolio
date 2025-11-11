import { Nav } from "react-bootstrap";
export default function About() {
  return (
    <section className="section">
      <div className="section-inner">
        <div id="about" className="card-container">
          <h1
            className="headerText"
            style={{
              borderBottom: "2px solid #a882ff",
            }}
          >
            <span className="gradientSpan">About Me</span>
          </h1>
          <p>
            My name is Eddie Smith and I’m currently attending Ivy Tech
            Community College for Full Stack Web Development. I’m confident in
            creating clean, responsive websites using HTML and CSS, and I’m
            building strong skills in JavaScript, React, and Node.js as I
            advance in my studies.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center mt-5">
        <Nav.Link href="/Portfolio/#projects">
          <div className="iconCircle">
            <i className="bi bi-arrow-down"></i>
          </div>
        </Nav.Link>
      </div>
    </section>
  );
}
