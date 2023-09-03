import React from 'react';
import {FaReact} from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = ()=>{
  return (
    <header className='header'>
        
      <div className='MiNombre '>
        <FaReact className='icono'/> 
        <Link to="/" className='nombre'><h3><span className='yellow'>H</span>ugo <span className='blue'> A</span>drian <span className='green'>M</span>ejia <span className='orange'> S</span>oteno</h3></Link>
      </div>
      <nav className='menu'>
        <ul className="menu-list">
          <li className="menu-list-item"><Link to="/Sobre-mi"><p>Sobre mi</p></Link></li>
          <li className="menu-list-item"><Link to="/Skills"><p>Skills</p></Link></li>
          <li className="menu-list-item"><Link to="/Proyectos"><p>Proyectos</p></Link></li>
          <li className="menu-list-item"><Link to="/Formacion"><p>Formacion</p></Link></li>
          <li className="menu-list-item"><Link to="error404"><p>404</p></Link></li>
          <li className="menu-list-item"><Link to="/Contacto"><p>Contacto</p></Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
