import React from "react";
import Item from "./Item"
import '../estilos.css'

function ItemList({ products }) {
  return (

    <div className="row">
      <div className="itemList__container">
        <div className="item__container">
         
          {products.length>0 && products.map(product => (
          <Item key={product.id} id={product.id} image={product.pictureUrl} price={product.price} title={product.title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemList;