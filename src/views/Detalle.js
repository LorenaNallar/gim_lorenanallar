import React, { useEffect, useState } from 'react'
import axios from 'axios'
 

function Detalle(props) {

    const [datos,setProducts] = useState({});
        const getDatos = ()=>{
        axios.get('./../public/products.json')
        .then(res => {
        setProducts(res.data)
        });
    }
    useEffect(()=>{
        getDatos();
    },[])



    return (
        <div className="col">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={datos.pictureUrl} alt="imagen_producto" />
                <div className="card-body">
                    <h5 className="card-title">{datos.title}</h5>
                    <p className="card-text">
                        {datos.description}
                        Categoria: {datos.category} - Precio {datos.price}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Detalle