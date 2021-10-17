import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from 'axios'
import '../estilos.css'
import { Row } from "react-bootstrap"
import { Container } from "react-bootstrap"
import Header from '../views/Header'


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
    <>
    <Header/>
    
      <div className="wrapper">
        <div>
          
          <h2 className="titulo">Productos</h2>
          <Container className='contenedor'>
            <Row className='contenedorFila'>
              <ItemList products={products}/>
            </Row>
          </Container>
          
        </div>
      </div>
    
  </>
  )
}

export default ItemListContainer;