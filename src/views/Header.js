
import '../estilos.css'
import {Container} from "react-bootstrap"
import { Row } from "react-bootstrap"

import Navigation from '../components/Navigation'


const Header = () => {

    return (
        <header>
            <Container className="encabezado__menu">
                <Row className = "contenedorHeader">
                    <Navigation/>
                   
                </Row>
            </Container>    
        </header>
    );
}

export default Header;