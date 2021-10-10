import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from 'axios'
import '../estilos.css'


function ItemListContainer() {
  
  const [products, setProducts] = useState([]);
  
  const getItems = () => {
    axios.get('/products.json')
    .then(res => {
      setProducts(res.data)
    })
  }

  useEffect(() => {
    getItems();    
  }, []);
  
  
  return (
    <div className="itemList">
      <div className="wrapper">
        <div className="itemList-container">
          
          <h2 className="titulo">Productos</h2>
          <div className='itemList-container'>
         
            <ItemList products={products}/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer;