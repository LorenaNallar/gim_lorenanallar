import React, { useEffect, useState } from 'react'
import axios from 'axios'
 

function ItemDetail(props) {

    const [id] = props.match.params.id;
    console.log(id)
    const [product, setProducts] = useState([]);

     const getItems = () => {
      axios.get('/products.json')
      .then(res => {
        setProducts(res.data)
      })
    }

    useEffect(()=>{
      getItems();
  },[])
  
    return (
        <div className="col">
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={product.image} alt="imagen_producto" />
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">
                {product.description}
            {product.category} - {product.price}
            </p>
        </div>
        </div>
      </div>
    )
}

export default ItemDetail