import { Nav, Container, Navbar } from "react-bootstrap";
function NavBarComp() {
  
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="navbar" >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBarComp;
