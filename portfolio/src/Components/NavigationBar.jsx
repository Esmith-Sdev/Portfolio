import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import "../styles/Navbar.css";
import Logo from "../assets/ES-PURPLE.png";
export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Navbar
      className="navigationBar"
      expand="lg"
      fixed="top"
      expanded={isOpen}
      onToggle={setOpen}
      collapseOnSelect={isOpen}
    >
      <Container fluid>
        <Navbar.Brand className="navbrand" href="/Portfolio/#welcome">
          <Image className="navBrandLogo" src={Logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle
          as="button"
          className="navbar-toggler border-0 p-0 d-lg-none"
          aria-controls="main-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Hamburger
            color="#a882ff"
            toggled={isOpen}
            toggle={setOpen}
            size={30}
          />
        </Navbar.Toggle>

        <Navbar.Collapse
          id="main-nav"
          className="d-lg-flex justify-content-center"
        >
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
