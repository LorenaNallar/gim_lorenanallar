import './estilos.css'
import {Container} from "react-bootstrap"
import {Navbar} from "react-bootstrap"
import {Nav} from "react-bootstrap"
import { NavDropdown } from "react-bootstrap"

const CustomNavbar = () => {
    return (
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="encabezado__menu">
          <Container>
            <Nav className="encabezado__menu">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Mi cuenta</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Indumentaria</NavDropdown.Item>
                <NavDropdown.Item href="#">Articulos Running</NavDropdown.Item>
                <NavDropdown.Item href="#">Paquetes</NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Container>
          </Nav>
        </Navbar.Collapse>
       
      
    );
}

export default CustomNavbar