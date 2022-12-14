import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>Iddeadevs DAO</Navbar.Brand>
        <Nav className="me-auto" variant="pills"></Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
