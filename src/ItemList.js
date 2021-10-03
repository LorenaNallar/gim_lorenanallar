import Item from './Item'
import {Container} from "react-bootstrap" 

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="Container">
            <h2>Nuestros productos</h2>
           

            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
               
            </div>
        </div>
    )
}