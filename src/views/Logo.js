import ImagenLogo from './imagenes/Logo FC.png'; 
import './estilos.css'

const Logo = () => {

    return (
        <div>
            <img className = "contenedorImagenHeader" src={ImagenLogo} />
        </div>
    );
}

export default Logo;