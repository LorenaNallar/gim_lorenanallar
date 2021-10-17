import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartContext'
import Navigation from '../components/Navigation'

function Carrito() {

    const [carrito]=useContext(CartContext);

    const [total,setTotal]=useState(0);

    useEffect(() => {
        let tot = 0;
        carrito.map((item)=>{
            tot = tot + item.price
        });

        setTotal(tot)

    }, [])

    function borrar(index){
        let temp = carrito;
        temp.splice(index, 1)
        setTotal(temp);
    }


    return (<>
        <Navigation/>
        <div className="container">
            {carrito && carrito.map((item,index)=>{
                return (
                    <ul className="list-group" key={index}>
                        <img src={item.image} width='100px' alt=""/>
                        <li className="list-group-item">{item.title}</li>
                        <li className="list-group-item">{item.price}</li>
                        <button onClick={()=>{borrar(index)}}>Borrar</button>
                    </ul>
                )
            })}
            <h1>Total : {total}</h1>
        </div>
        </>
    )
}

export default Carrito