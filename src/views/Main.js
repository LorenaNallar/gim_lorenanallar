import Imagen from '../imagenes/novedades - horarios gim.jpeg'; 
import '../estilos.css' 


const Main = () => {
    return (
        <main>
            <div>
                <img className = "contenedorImagen" src={Imagen} />
            </div>
           

        </main>
    );
}

export default Main;