import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext, useState } from "react";
import { ModalComponent } from "../common";
import { UserInformationContext } from "../provider";
import Image from "react-bootstrap/Image";

function HeaderComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const userContext = useContext(UserInformationContext);
  const { userInformation } = userContext;

  return (
    <>
      <ModalComponent show={show} handleClose={handleClose} />
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About Us</Nav.Link>
              <NavDropdown title="Subject" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">PRJ301</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">MAE101</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">MAD101</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">SWD391</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {userInformation?.id ? (
              <>
                <span style={{fontWeight: "600"}}>{userInformation?.name}</span>
                <Image
                  src="https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg"
                  roundedCircle
                  style={{width: "48px", height: "48px", marginLeft: "8px"}}
                />
              </>
            ) : (
              <>
                <Button
                  variant="outline-primary"
                  style={{ marginRight: "8px" }}
                >
                  Register
                </Button>
                <Button onClick={handleShow}>Login</Button>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
