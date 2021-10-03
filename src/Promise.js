import React, {useState,useEffect} from 'react';
import Item from './components/Item';

const DB_PRODUCTS = [
    {"id":1,
    "title": "Remera térmica",
    "price": 1000.00,
    "description":"Remera Térmica varios colores",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"},

]

function comprobarError(){
    return (Math.random() < 0.5);
  }

function crearPromesa() {

    return new Promise((resolve, reject) => {  

    //para simular la demora de la red, creamos un setTimeOut
    setTimeout(
        function(){                
            const error = comprobarError();           
            if(!(error)){      
                resolve(DB_FOOD);  
            }
            else { 
                reject( new Error("Error obteniendo los datos"));
            }
        }, 
        500);      
    });     
}

// nuestro componente
function Promesa(){
    //Inicializamos el estado con un array vacío
    const [items,setItems] = React.useState(null);
    //Inicializamos el estado "estado" con un valor por defecto de "cargando..."
    const [estado,setEstado] = useState('Cargando...');

    
    useEffect(() => { 
        // creamos la Promesa        
        let requestDatos = crearPromesa();

        // una vez que la promesa se cumple se ejecuta .then(),
        // guardamos los datos recibidos en el estado
        requestDatos
        .then( function(items_promise){
            setItems(items_promise);     
            setEstado('Listo!');           
            console.log(items_promise);
        })      
        // si hay errores, los "atrapamos" en nuestro .catch()
        .catch( function(err){
            console.log(err);   
            setEstado('Error');       
        })
        // si tenemos código que se ejecuta independientemente del resultado de la promesa, 
        // lo escribimos en .finally()
        .finally( ()=>{
                console.log('Promesa terminada');
            }
        )
    }, []);
      
  
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-6 mx-auto">        
              <h3>{estado}</h3>  
              <hr/>         
            {(items !== null) && 
                items.map( (itm,index) =>
                    <Item
                        key={index}
                        title={itm.title}
                        price={itm.price}
                        imgUrl={itm.thumbnail}
                    />
            )}                   
            </div>
      </section>
    )  
}

export default Promise;
