import ImagenCart from './imagenes/carrito.png'; 
import './estilos.css'

const CartWidget = () => {

    return (
        <div>
            <img className = "contenedorImagenHeader" src={ImagenCart} />
        </div>
    );
}

export default CartWidget;