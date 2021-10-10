import Imagen from '../imagenes/novedades - horarios gim.jpeg'; 
import Navegacion from '../components/Navegacion'


const Main = () => {
    return (
        <main>
            <div>
                <Navegacion/>
                <img className = "contenedorImagen" src={Imagen} />
            </div>
           

        </main>
    );
}

export default Main;