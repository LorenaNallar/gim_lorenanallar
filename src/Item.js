import './estilos.css'
import {NavLink} from "react-bootstrap"

const Item = ({id,title,price,pictureUrl}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={pictureUrl} alt={`title-id`}/>
                </div>
                <div>
                    <span>{title}</span>
                    <p>${price}</p>
                </div>
                <div>
                    <NavLink to={`/item/${id}`}>ver detalle</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Item