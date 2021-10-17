import ImagenRedesFB from '../imagenes/IG (1).png'; 
import ImagenRedesI from '../imagenes/IG (1).png'; 

import '../estilos.css'

const Redes = () => {

    return (
        <div>
            <img className = "contenedorImagenHeader" src={ImagenRedesFB} />
            <img className = "contenedorImagenHeader" src={ImagenRedesI} />
        </div>
    );
}

export default Redes;