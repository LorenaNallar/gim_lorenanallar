import '../estilos.css'

import { Link } from 'react-router-dom'


function Navigation() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to='/' >Ecommerce FC Gim</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to='/'>Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/productos'>Productos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/nosotros' >Nosotros</Link>
                </li>
              </ul>
            </div>
      </nav>
   
  
    )
}

export default Navigation