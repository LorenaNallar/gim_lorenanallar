import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router";

import '../estilos.css'
import {useModal} from './ModalContext'
import {firestore} from '../firebase'

const ItemListContainer = () => {
    const fakeProduct = {title: "loading", id:"-", price: "-", image: "/loading.gif", description: "loading"}
    const [products, setProducts] = useState([fakeProduct])
    const {id} = useParams()
    const {setModalText, showModal} = useModal()

    useEffect( () => {

        const collectionRef = firestore.collection("products")
        let query

        if (id === undefined) {
            query = collectionRef.get()
        } else {
            query = collectionRef.where('category', '==', id).get()
        }


        query
            .then( (result) => {
                setProducts(result.docs.map( p => ({id: p.id, ...p.data()})) )
            })
            .catch( error => {
                setModalText("Ocurrió un error al tratar de obtener los productos")
                showModal()
            })
    },[id])

    return (<div className="itemList">
                <ItemList items={products}/>
            </div>)
}
export default ItemListContainer;