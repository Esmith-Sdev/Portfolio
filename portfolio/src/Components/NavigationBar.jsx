import { Navbar, Nav, Container, Image } from "react-bootstrap";
import "../styles/Navbar.css";
import Logo from "../assets/ES-LOGO.png";
export default function NavigationBar() {
  return (
    <Navbar className="navigationBar" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand className="navbrand" href="/Portfolio/#welcome">
          <Image className="navBrandLogo" src={Logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-center" id="navbarScroll">
          <Nav variant="underline" defaultActiveKey="#welcome">
            <Nav.Item>
              <Nav.Link className="navLink" href="/Portfolio/#welcome">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/Portfolio/#about">
                About Me
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/Portfolio/#projects">
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="navLink" href="/Portfolio/#contact">
                Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
