import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../styles/Navbar.css";
import Logo from "../assets/ES-LOGO.png";
export default function NavigationBar() {
  return (
    <Navbar className="navigationBar" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className="navbrand" href="/home">
          <Image className="navBrandLogo" src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Nav variant="underline" defaultActiveKey="#welcome">
            <Nav.Item>
              <Nav.Link className="navLink" href="#welcome">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="#about">
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="#projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="#contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
