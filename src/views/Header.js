import Logo from "./Logo"
import Lupa from "./Lupa"
import Redes from "./Redes"
import CustomNavbar from "./CustomNavbar"
import './estilos.css'
import {Container} from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

const Header = () => {

    return (
        <header>
            <Container className="encabezado__menu">
            <Row className = "contenedorHeader">
                <Col>  
                    <Logo/>
                </Col>
                <Col>
                    <Redes/>
                </Col>
                <Col>
                    <Lupa/>
                </Col>
                
            </Row>
            <Row className = "contenedorHeader">
                <Col>
                    <CustomNavbar/>
                </Col>
            </Row>
            </Container>    
        </header>
    );
}

export default Header;