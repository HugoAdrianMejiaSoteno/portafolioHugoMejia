import React, { useState } from 'react';
import {FaReact} from 'react-icons/fa';
import './Header.css'
import { Link } from 'react-router-dom';
const Header = ()=>{
  const [open, setOpen] = useState(false);
  return (
    <header className='header'>
        
      <div className='MiNombre '>
        <FaReact className='icono'/>
        <Link to="/" className='nombre'><h3><span className='yellow'>H</span>ugo <span className='blue'> A</span>drian <span className='green'>M</span>ejia <span className='orange'> S</span>oteno</h3></Link>
      </div>
      <div className={`btn-navbar ${open && 'open'}`} onClick={()=>{ setOpen(!open) }}>
        {/* esto va a ser para que con las nav hagamos el icono */}
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`${ open ? 'menu-container-btn' : 'menu-container'}`}>
        <nav className={`menu ${open && 'var'}`}>
            <ul className="menu-list">
              <li className="menu-list-item"><Link to="/Sobre-mi" onClick={()=>{ setOpen(!open) }}><p>Sobre mi</p></Link></li>
              <li className="menu-list-item"><Link to="/Skills" onClick={()=>{ setOpen(!open) }}><p>Skills</p></Link></li>
              <li className="menu-list-item"><Link to="/Proyectos" onClick={()=>{ setOpen(!open) }}><p>Proyectos</p></Link></li>
              <li className="menu-list-item"><Link to="/Formacion" onClick={()=>{ setOpen(!open) }}><p>Formacion</p></Link></li>
              <li className="menu-list-item"><Link to="/Contacto" onClick={()=>{ setOpen(!open) }}><p>Contacto</p></Link></li>
              {/* <li className="menu-list-item"><Link to="/error404" onClick={()=>{ setOpen(!open) }}><p>404</p></Link></li> */}
            </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
