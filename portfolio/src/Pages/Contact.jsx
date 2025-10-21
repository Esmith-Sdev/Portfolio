import "../styles/About.css";
import { Container } from "react-bootstrap";
export default function Contact() {
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
      <div id="contact" className="card-container">
        <h1
          style={{
            borderBottom: "2px solid #a882ff",
          }}
        >
          <span className="gradientSpan">Contact</span>
        </h1>
        <div className="d-flex flex-column justify-content-start pt-3">
          <div className="d-flex flex-row gap-1 p-2">
            <div className="iconCircle">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <p className="contactGradient">463-294-8006</p>
          </div>
          <div className="d-flex flex-row gap-1 p-2">
            <div className="iconCircle">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <p className="contactGradient">Esmith.Sdev@gmail.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
