
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './estilos.css'

import Home from './views/Home';
import Nosotros from './views/Nosotros';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './views/ItemDetail';
import ShoppingCart from './views/ShoppingCart';
import { CartProvider } from './CartContext';

function App () {

    return (
            <div>
                <CartProvider>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/nosotros" component={Nosotros}/>
                            <Route exact path="/productos" component={ItemListContainer}/>
                            <Route exact path="/detalleproducto/:id" component={ItemDetail}/>
                            <Route exact path="/carrito" component={ShoppingCart}/>
                        </Switch>
                    </BrowserRouter>
                </CartProvider>
                
            </div>
        )
}
export default App;
