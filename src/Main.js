import Imagen from './imagenes/novedades - horarios gim.jpeg'; 
import ItemListContainer from './ItemListContainer';


const Main = () => {
    return (
        <main>
            <div>
                <ItemListContainer greeting = {"E-Commerce FC Running y FC Gym"}/>    
            </div>
            <div>
                <img className = "contenedorImagen" src={Imagen} />
            </div>
           

        </main>
    );
}

export default Main;