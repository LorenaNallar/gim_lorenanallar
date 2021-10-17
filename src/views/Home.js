import React from 'react'
import ItemListContainer from '../components/ItemListContainer'
import Image from 'react-bootstrap/Image'
import Header from '../views/Header'

function Home() {
    return (
        <div>
            
            <Header/>
            <Image src="../../  imagenes/novedades - horarios gim.jpeg" fluid />
            <ItemListContainer/>
        </div>
    )
}

export default Home
