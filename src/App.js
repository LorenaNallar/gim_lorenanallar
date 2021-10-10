
import './estilos.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home';
import Nosotros from './views/Nosotros';
import Main from './views/Main';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Detalle from './views/Detalle';
import ItemListContainer from './components/ItemListContainer';


function App () {

    return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/nosotros" component={Nosotros}/>
                        <Route exact path="/productos" component={ItemListContainer}/>
                        <Route exact path="/products/:id" component={Detalle}/>
                        <Route exact path="/main" component = {Main} />
                    </Switch>
                </BrowserRouter>
                
            </div>
        )
}
export default App;
