import Logo from "./Logo"
import Lupa from "./Lupa"
import Redes from "./Redes"
import Navbar from "./Navbar"
import CartWidget from "./CartWidget"
import './estilos.css'
import { Container } from "react-bootstrap"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"

const Header = () => {

    return (
        <header>
            <Row className = "contenedorHeader">
                    <Col m = {3}> </Col>
                    <Col m = {1}>  
                        <Logo/>
                    </Col>
                    <Col m = {2}>
                        <Navbar/>
                    </Col>
                    <Col m = {2}>
                        <Redes/>
                    </Col>
                    <Col m = {1}>
                        <Lupa/>
                    </Col>
                    <Col m = {3}> </Col>
                </Row>
        </header>
    );
}

export default Header;